var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var ObjectItem = require('../../../../types/game/data/items/object-item.js').class;

var ExchangeObjectPutInBagMessage = module.exports = function() {
    this.object = new ObjectItem();

    return this;
};

require('util').inherits(ExchangeObjectPutInBagMessage, require('../exchanges/exchange-object-message.js'));

ExchangeObjectPutInBagMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeObjectPutInBagMessage(output);
};

ExchangeObjectPutInBagMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeObjectPutInBagMessage(input);
};

ExchangeObjectPutInBagMessage.prototype.serializeAs_ExchangeObjectPutInBagMessage = function(param1) {
    this.serializeAs_ExchangeObjectMessage(param1);
    this.object.serializeAs_ObjectItem(param1);
};

ExchangeObjectPutInBagMessage.prototype.deserializeAs_ExchangeObjectPutInBagMessage = function(param1) {
    this.deserializeAs_ExchangeObjectMessage(param1);
    this.object = new ObjectItem();
    this.object.deserialize(param1);
};

ExchangeObjectPutInBagMessage.prototype.getMessageId = function() {
    return 6009;
};

ExchangeObjectPutInBagMessage.prototype.getClassName = function() {
    return 'ExchangeObjectPutInBagMessage';
};

module.exports.id = 6009;