//global mongoose object

var mongoose = require('mongoose');
var mongooseConfig = require('./../../config/mongooseConfig.js');



mongooseConfig(mongoose); //Auth Configuration

exports.module = mongoose;
