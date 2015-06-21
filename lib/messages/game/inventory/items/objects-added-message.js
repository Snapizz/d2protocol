var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var ObjectItem = require('../../../../types/game/data/items/object-item.js').class;

var ObjectsAddedMessage = module.exports = function() {
    this.object = [];

    return this;
};

require('util').inherits(ObjectsAddedMessage, d2com.NetworkMessage.class);

ObjectsAddedMessage.prototype.serialize = function(output) {
    this.serializeAs_ObjectsAddedMessage(output);
};

ObjectsAddedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ObjectsAddedMessage(input);
};

ObjectsAddedMessage.prototype.serializeAs_ObjectsAddedMessage = function(param1) {
    param1.writeShort(this.object.length);
    var _loc2_ = 0;
    while (_loc2_ < this.object.length) {
        (this.object[_loc2_]).serializeAs_ObjectItem(param1);
        _loc2_++;
    }
};

ObjectsAddedMessage.prototype.deserializeAs_ObjectsAddedMessage = function(param1) {
    var _loc4_ = null;
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = new ObjectItem();
        _loc4_.deserialize(param1);
        this.object.push(_loc4_);
        _loc3_++;
    }
};

ObjectsAddedMessage.prototype.getMessageId = function() {
    return 6033;
};

ObjectsAddedMessage.prototype.getClassName = function() {
    return 'ObjectsAddedMessage';
};

module.exports.id = 6033;