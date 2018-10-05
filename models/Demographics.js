// ==============
// Dependencies
// ==============
var mongoose = require('mongoose');

// ==============
// Create Schema
// ==============
var Schema = mongoose.Schema;

var newDemographic = new Schema ({
	accountTypePersonal: {
		type: Number,
		required: true
	},
	accountTypeCommercial: {
		type: Number,
		required: true
	},
	audienceGenderMale: {
		type: Number,
		required: true
	},
	audienceGenderFemale: {
		type: Number,
		required: true
	},
	audienceAge: {
		type: Number,
		required: true
	},
	audienceEthnincityWhite: {
		type: Number,
		required: true
	},
	audienceEthnincityBlack: {
		type: Number,
		required: true
	},
	audienceEthnincityLatin: {
		type: Number,
		required: true
	},
	audienceEthnincityAsian: {
		type: Number,
		required: true
	},
	audienceEthnincityMideast: {
		type: Number,
		required: true
	},
	
});


// =============================================================
// Create Reply Model
// =============================================================
var Demographics = mongoose.model('Demographics', newDemographic);

// =============================================================
// Export the Reply Model
// =============================================================
module.exports = Demographics;