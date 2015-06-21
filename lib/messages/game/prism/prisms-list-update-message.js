var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var PrismSubareaEmptyInfo = require('../../../types/game/prism/prism-subarea-empty-info.js').class;

var PrismsListUpdateMessage = function() {

};

require('util').inherits(PrismsListUpdateMessage, require('./prisms-list-message.js').class);

PrismsListUpdateMessage.prototype.serialize = function(output) {
    this.serializeAs_PrismsListUpdateMessage(output);
};

PrismsListUpdateMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PrismsListUpdateMessage(input);
};

PrismsListUpdateMessage.prototype.serializeAs_PrismsListUpdateMessage = function(param1) {
    this.serializeAs_PrismsListMessageAs_PrismsListMessage(param1);
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
module.exports.class = PrismsListUpdateMessage;
module.exports.getInstance = function() {
    return new PrismsListUpdateMessage;
};