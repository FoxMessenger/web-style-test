// =============================================================
// Dependencies
// =============================================================
'use strict';

var config = require('./../config/prod'),
    Sequelize = require('sequelize');

// =============================================================
// Create Schema
// =============================================================
module.exports = new Sequelize(
    config.db.name,
    config.db.user,
    config.db.demographics,
    config.db.details
);