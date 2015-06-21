var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var ObjectItem = require('../../../../types/game/data/items/object-item.js').class;

var ExchangeObjectsModifiedMessage = function() {
    this.object = [];
};

require('util').inherits(ExchangeObjectsModifiedMessage, require('../exchanges/exchange-object-message.js').class);

ExchangeObjectsModifiedMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeObjectsModifiedMessage(output);
};

ExchangeObjectsModifiedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeObjectsModifiedMessage(input);
};

ExchangeObjectsModifiedMessage.prototype.serializeAs_ExchangeObjectsModifiedMessage = function(param1) {
    this.serializeAs_ExchangeObjectMessageAs_ExchangeObjectMessage(param1);
    param1.writeShort(this.object.length);
    var _loc2_ = 0;
    while (_loc2_ < this.object.length) {
        (this.object[_loc2_]).serializeAs_ObjectItem(param1);
        _loc2_++;
    }
};

ExchangeObjectsModifiedMessage.prototype.deserializeAs_ExchangeObjectsModifiedMessage = function(param1) {
    var _loc4_ = null;
    this.deserializeAs_ExchangeObjectMessage(param1);
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = new ObjectItem();
        _loc4_.deserialize(param1);
        this.object.push(_loc4_);
        _loc3_++;
    }
};

ExchangeObjectsModifiedMessage.prototype.getMessageId = function() {
    return 6533;
};

ExchangeObjectsModifiedMessage.prototype.getClassName = function() {
    return 'ExchangeObjectsModifiedMessage';
};

module.exports.id = 6533;
module.exports.class = ExchangeObjectsModifiedMessage;
module.exports.getInstance = function() {
    return new ExchangeObjectsModifiedMessage;
};