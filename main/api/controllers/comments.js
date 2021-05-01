'use strict';

var util = require('util');
var faker = require('faker');
const { fake } = require('faker');

faker.locale = 'ru';

module.exports = {
  comments: getComments
};


function getComments(req, res) {

    /*var schema = [{
        type: 'array',
        items: {
            type: 'Object',
            properties: {
                id: {
                    type: 'number',
                },
                name: {
                    type: 'string',
                    faker: 'name.firstName',
                },
                comment: {
                    "type": "string",
                    "faker": "lorem.text",
                },
                date: {
                    type: 'string',
                    faker: 'date.recent',
                },
                image: {
                    type: 'string',
                    faker: 'image.avatar',
                }
            }
        },
        "minItems": 2,
        "maxItems": 10,
    }];*/

  res.json([
    {
        id: 'datatype.number',
        name: "name.firstName",
        comment: "lorem.paragraph",
        date: "date.recent",
        image: "image.avatar",
    }
  ]);
}