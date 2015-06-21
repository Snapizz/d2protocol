var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var InteractiveElement = require('../../../types/game/interactive/interactive-element.js').class;

var InteractiveMapUpdateMessage = function() {
    this.interactiveElements = [];
};

require('util').inherits(InteractiveMapUpdateMessage, d2com.NetworkMessage.class);

InteractiveMapUpdateMessage.prototype.serialize = function(output) {
    this.serializeAs_InteractiveMapUpdateMessage(output);
};

InteractiveMapUpdateMessage.prototype.deserialize = function(input) {
    this.deserializeAs_InteractiveMapUpdateMessage(input);
};

InteractiveMapUpdateMessage.prototype.serializeAs_InteractiveMapUpdateMessage = function(param1) {
    param1.writeShort(this.interactiveElements.length);
    var _loc2_ = 0;
    while (_loc2_ < this.interactiveElements.length) {
        param1.writeShort((this.interactiveElements[_loc2_]).getTypeId());
        (this.interactiveElements[_loc2_]).serialize(param1);
        _loc2_++;
    }
};

InteractiveMapUpdateMessage.prototype.deserializeAs_InteractiveMapUpdateMessage = function(param1) {
    var _loc4_ = 0;
    var _loc5_ = null;
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = param1.readUnsignedShort();
        _loc5_ = ProtocolTypeManager.getInstance(InteractiveElement, _loc4_);
        _loc5_.deserialize(param1);
        this.interactiveElements.push(_loc5_);
        _loc3_++;
    }
};

InteractiveMapUpdateMessage.prototype.getMessageId = function() {
    return 5002;
};

InteractiveMapUpdateMessage.prototype.getClassName = function() {
    return 'InteractiveMapUpdateMessage';
};

module.exports.id = 5002;
module.exports.class = InteractiveMapUpdateMessage;
module.exports.getInstance = function() {
    return new InteractiveMapUpdateMessage;
};