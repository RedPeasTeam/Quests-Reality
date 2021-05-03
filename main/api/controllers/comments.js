'use strict';

var util = require('util');
var faker = require('faker');
const { fake } = require('faker');

faker.locale = 'ru';

module.exports = {
  comments: getComments
};

function getComments(req, res) {

  const getDate = function() {
    const years = [2019, 2020, 2021];

    let day = Math.floor(Math.random() * 30 + 1);
    let month = Math.floor(Math.random() * 11 + 1);
    let year = years[Math.floor(Math.random() * 3)];

    if (day < 10) day = `0${day}`;
    if (month < 10) month = `0${month}`;

    return `${day}-${month}-${year}`;
  };

  const dataRes = [];

  for (let i = 0; i < Math.floor(Math.random() * 20 + 1); i += 1) {
    dataRes.push(
      {
        id:        '' + faker.datatype.number(),
        firstName: '' + faker.name.firstName(),
        lastName:  '' + faker.name.lastName(),
        comment:   '' + faker.lorem.paragraph(),
        date:      '' + getDate(),
        image:     '' + faker.image.avatar(),
      },
    );
  }

  res.json([...dataRes]);
}