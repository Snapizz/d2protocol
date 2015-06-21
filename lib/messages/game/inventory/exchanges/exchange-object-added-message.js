var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var ObjectItem = require('../../../../types/game/data/items/object-item.js').ObjectItem;

var ExchangeObjectAddedMessage = function() {
    this.object = new ObjectItem();
};

require('util').inherits(ExchangeObjectAddedMessage, require('./exchange-object-message.js').ExchangeObjectMessage);

module.exports = function() {
    return new ExchangeObjectAddedMessage();
};

ExchangeObjectAddedMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeObjectAddedMessage(output);
};

ExchangeObjectAddedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeObjectAddedMessage(input);
};

ExchangeObjectAddedMessage.prototype.serializeAs_ExchangeObjectAddedMessage = function(param1) {
    this.serializeAs_ExchangeObjectMessage(param1);
    this.object.serializeAs_ObjectItem(param1);
};

ExchangeObjectAddedMessage.prototype.deserializeAs_ExchangeObjectAddedMessage = function(param1) {
    this.deserializeAs_ExchangeObjectMessage(param1);
    this.object = new ObjectItem();
    this.object.deserialize(param1);
};

ExchangeObjectAddedMessage.prototype.getMessageId = function() {
    return 5516;
};

ExchangeObjectAddedMessage.prototype.getClassName = function() {
    return 'ExchangeObjectAddedMessage';
};

module.exports.id = 5516;
module.exports.ExchangeObjectAddedMessage = ExchangeObjectAddedMessage;