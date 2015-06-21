var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var ObjectItemQuantity = require('../../../../types/game/data/items/object-item-quantity.js').ObjectItemQuantity;

var ObjectsQuantityMessage = function() {
    this.objectsUIDAndQty = [];
};

require('util').inherits(ObjectsQuantityMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new ObjectsQuantityMessage();
};

ObjectsQuantityMessage.prototype.serialize = function(output) {
    this.serializeAs_ObjectsQuantityMessage(output);
};

ObjectsQuantityMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ObjectsQuantityMessage(input);
};

ObjectsQuantityMessage.prototype.serializeAs_ObjectsQuantityMessage = function(param1) {
    param1.writeShort(this.objectsUIDAndQty.length);
    var _loc2_ = 0;
    while (_loc2_ < this.objectsUIDAndQty.length) {
        (this.objectsUIDAndQty[_loc2_]).serializeAs_ObjectItemQuantity(param1);
        _loc2_++;
    }
};

ObjectsQuantityMessage.prototype.deserializeAs_ObjectsQuantityMessage = function(param1) {
    var _loc4_ = null;
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = new ObjectItemQuantity();
        _loc4_.deserialize(param1);
        this.objectsUIDAndQty.push(_loc4_);
        _loc3_++;
    }
};

ObjectsQuantityMessage.prototype.getMessageId = function() {
    return 6206;
};

ObjectsQuantityMessage.prototype.getClassName = function() {
    return 'ObjectsQuantityMessage';
};

module.exports.id = 6206;
module.exports.ObjectsQuantityMessage = ObjectsQuantityMessage;