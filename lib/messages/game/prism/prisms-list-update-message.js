var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var PrismSubareaEmptyInfo = require('../../../types/game/prism/prism-subarea-empty-info.js').class;

var PrismsListUpdateMessage = function() {

};

require('util').inherits(PrismsListUpdateMessage, require('./prisms-list-message.js'));

module.exports = function() {
    return new PrismsListUpdateMessage();
};

PrismsListUpdateMessage.prototype.serialize = function(output) {
    this.serializeAs_PrismsListUpdateMessage(output);
};

PrismsListUpdateMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PrismsListUpdateMessage(input);
};

PrismsListUpdateMessage.prototype.serializeAs_PrismsListUpdateMessage = function(param1) {
    this.serializeAs_PrismsListMessage(param1);
};

PrismsListUpdateMessage.prototype.deserializeAs_PrismsListUpdateMessage = function(param1) {
    this.deserializeAs_PrismsListMessage(param1);
};

PrismsListUpdateMessage.prototype.getMessageId = function() {
    return 6438;
};

PrismsListUpdateMessage.prototype.getClassName = function() {
    return 'PrismsListUpdateMessage';
};

module.exports.id = 6438;
module.exports.PrismsListUpdateMessage = PrismsListUpdateMessage;