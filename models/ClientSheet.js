// =============================================================
// Dependencies
// =============================================================
var mongoose = require('mongoose');

// =============================================================
// Create Schema
// =============================================================
var Schema = mongoose.Schema;

var newClientSheet = new Schema ({
	clientBrandName: {
		type: String,
		required: true
	},	
	clientAge: {
		type: Number
	},
	verfied: {
		type: Boolean
	},
	createdAt: {
	    type: Date,
	    default: Date.now
  	}
});


// =========================
// Create Client Sheet Model
// =========================
var ClientSheet = mongoose.model('ClientSheet', newClientSheet);

// =========================
// Export the Comment Model
// =========================
module.exports = ClientSheet;