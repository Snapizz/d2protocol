var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var ObjectItem = require('../../../../types/game/data/items/object-item.js').class;

var ExchangeObjectModifiedMessage = module.exports = function() {
    this.object = new ObjectItem();

    return this;
};

require('util').inherits(ExchangeObjectModifiedMessage, require('../exchanges/exchange-object-message.js'));

ExchangeObjectModifiedMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeObjectModifiedMessage(output);
};

ExchangeObjectModifiedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeObjectModifiedMessage(input);
};

ExchangeObjectModifiedMessage.prototype.serializeAs_ExchangeObjectModifiedMessage = function(param1) {
    this.serializeAs_ExchangeObjectMessage(param1);
    this.object.serializeAs_ObjectItem(param1);
};

ExchangeObjectModifiedMessage.prototype.deserializeAs_ExchangeObjectModifiedMessage = function(param1) {
    this.deserializeAs_ExchangeObjectMessage(param1);
    this.object = new ObjectItem();
    this.object.deserialize(param1);
};

ExchangeObjectModifiedMessage.prototype.getMessageId = function() {
    return 5519;
};

ExchangeObjectModifiedMessage.prototype.getClassName = function() {
    return 'ExchangeObjectModifiedMessage';
};

module.exports.id = 5519;