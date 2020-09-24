import React from 'react';
import logo from './logo.svg';
import './App.css';

import { person } from '@jsonforms/examples';
import {
  materialRenderers,
  materialCells
} from '@jsonforms/material-renderers';

import { JsonForms } from '@jsonforms/react';

// const schema = person.schema;
// const uischema = person.uischema;
// const data = person.data;

const schema = {
  "type": "object",
  "required": [
    "age"
  ],
  "properties": {
    "firstName": {
      "type": "string",
      "minLength": 2,
      "maxLength": 20
    },
    "lastName": {
      "type": "string",
      "minLength": 5,
      "maxLength": 15
    },
    "age": {
      "type": "integer",
      "minimum": 18,
      "maximum": 100
    },
    "gender": {
      "type": "string",
      "enum": [
        "Male",
        "Female",
        "Undisclosed"
      ]
    },
    "height": {
      "type": "number"
    },
    "dateOfBirth": {
      "type": "string",
      "format": "date"
    },
    "rating": {
      "type": "integer"
    },
    "committer": {
      "type": "boolean"
    },
    "address": {
      "type": "object",
      "properties": {
        "street": {
          "type": "string"
        },
        "streetnumber": {
          "type": "string"
        },
        "postalCode": {
          "type": "string"
        },
        "city": {
          "type": "string"
        }
      },
    },
    "comments": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "date": {
            "type": "string",
            "format": "date"
          },
          "message": {
            "type": "string",
            "maxLength": 5
          },
          "enum": {
            "type": "string",
            "const": "foo"
          }
        }
      }
    }
  }
};

const uischema = {
  "type": "VerticalLayout",
  "elements": [
    {
      "type": "HorizontalLayout",
      "elements": [
        {
          "type": "Control",
          "scope": "#/properties/firstName"
        },
        {
          "type": "Control",
          "scope": "#/properties/lastName"
        }
      ]
    },
    {
      "type": "HorizontalLayout",
      "elements": [
        {
          "type": "Control",
          "scope": "#/properties/age"
        },
        {
          "type": "Control",
          "scope": "#/properties/dateOfBirth"
        }
      ]
    },
    {
      "type": "HorizontalLayout",
      "elements": [
        {
          "type": "Control",
          "scope": "#/properties/height"
        },
        {
          "type": "Control",
          "scope": "#/properties/gender"
        },
        {
          "type": "Control",
          "scope": "#/properties/committer"
        }
      ]
    },
    {
      "type": "Group",
      "label": "Address for Shipping T-Shirt",
      "elements": [
        {
          "type": "HorizontalLayout",
          "elements": [
            {
              "type": "Control",
              "scope": "#/properties/address/properties/street"
            },
            {
              "type": "Control",
              "scope": "#/properties/address/properties/streetnumber"
            }
          ]
        },
        {
          "type": "HorizontalLayout",
          "elements": [
            {
              "type": "Control",
              "scope": "#/properties/address/properties/postalCode"
            },
            {
              "type": "Control",
              "scope": "#/properties/address/properties/city"
            }
          ]
        }
      ],
      "rule": {
        "effect": "SHOW",
        "condition": {
          "type": "LEAF",
          "scope": "#/properties/committer",
          "expectedValue": true
        }
      }
    },
    {
      "type": "Control",
      "scope": "#/properties/comments"
    }
  ]
};

const data = {
  "firstName": "Max Power",
  "gender": "Female",
  "committer": true
};

// uischema.type = "Group"
// uischema.label = "My Grupo!!"

console.log(schema)
console.log(uischema)
console.log(data)

function App() {
  const handlechange = ({data, errors}) => {
    console.log(data)
    console.log(errors)
  }
  return (
    <div className='App'>
      <JsonForms
        schema={schema}
        uischema={uischema}
        data={data}
        renderers={materialRenderers}
        cells={materialCells}
        onChange={handlechange}
      />
    </div>
  );
}

export default App;
