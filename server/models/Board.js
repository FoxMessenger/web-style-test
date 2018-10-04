// =============================================================
// Dependencies
// =============================================================
var mongoose = require('mongoose');

// =============================================================
// Create Schema
// =============================================================
var Schema = mongoose.Schema;

var newBoard = new Schema ({
	clientSheet: [{
		type: Schema.Types.ObjectId,
		ref: 'ClientSheet'
	}],
	demographics: [{
		type: Schema.Types.ObjectId,
		ref: 'Demographics'
	}],
	maps: [{
		type: Schema.Types.ObjectId,
		ref: 'Maps'
	}]
});


// ===================
// Create Board Model
// ===================
var Board = mongoose.model('Board', newBoard);

// ======================
// Export the Board Model
// ======================
module.exports = Board;