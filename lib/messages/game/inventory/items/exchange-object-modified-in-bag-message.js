var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var ObjectItem = require('../../../../types/game/data/items/object-item.js').class;

var ExchangeObjectModifiedInBagMessage = function() {
    this.object = new ObjectItem();
};

require('util').inherits(ExchangeObjectModifiedInBagMessage, require('../exchanges/exchange-object-message.js').class);

ExchangeObjectModifiedInBagMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeObjectModifiedInBagMessage(output);
};

ExchangeObjectModifiedInBagMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeObjectModifiedInBagMessage(input);
};

ExchangeObjectModifiedInBagMessage.prototype.serializeAs_ExchangeObjectModifiedInBagMessage = function(param1) {
    this.serializeAs_ExchangeObjectMessage(param1);
    this.object.serializeAs_ObjectItem(param1);
};

ExchangeObjectModifiedInBagMessage.prototype.deserializeAs_ExchangeObjectModifiedInBagMessage = function(param1) {
    this.deserializeAs_ExchangeObjectMessage(param1);
    this.object = new ObjectItem();
    this.object.deserialize(param1);
};

ExchangeObjectModifiedInBagMessage.prototype.getMessageId = function() {
    return 6008;
};

ExchangeObjectModifiedInBagMessage.prototype.getClassName = function() {
    return 'ExchangeObjectModifiedInBagMessage';
};

module.exports.id = 6008;
module.exports.class = ExchangeObjectModifiedInBagMessage;
module.exports.getInstance = function() {
    return new ExchangeObjectModifiedInBagMessage;
};