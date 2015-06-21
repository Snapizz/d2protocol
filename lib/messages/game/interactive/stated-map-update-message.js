var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var StatedElement = require('../../../types/game/interactive/stated-element.js').class;

var StatedMapUpdateMessage = function() {
    this.statedElements = [];
};

require('util').inherits(StatedMapUpdateMessage, d2com.NetworkMessage.class);

StatedMapUpdateMessage.prototype.serialize = function(output) {
    this.serializeAs_StatedMapUpdateMessage(output);
};

StatedMapUpdateMessage.prototype.deserialize = function(input) {
    this.deserializeAs_StatedMapUpdateMessage(input);
};

StatedMapUpdateMessage.prototype.serializeAs_StatedMapUpdateMessage = function(param1) {
    param1.writeShort(this.statedElements.length);
    var _loc2_ = 0;
    while (_loc2_ < this.statedElements.length) {
        (this.statedElements[_loc2_]).serializeAs_StatedElement(param1);
        _loc2_++;
    }
};

StatedMapUpdateMessage.prototype.deserializeAs_StatedMapUpdateMessage = function(param1) {
    var _loc4_ = null;
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = new StatedElement();
        _loc4_.deserialize(param1);
        this.statedElements.push(_loc4_);
        _loc3_++;
    }
};

StatedMapUpdateMessage.prototype.getMessageId = function() {
    return 5716;
};

StatedMapUpdateMessage.prototype.getClassName = function() {
    return 'StatedMapUpdateMessage';
};

module.exports.id = 5716;
module.exports.class = StatedMapUpdateMessage;
module.exports.getInstance = function() {
    return new StatedMapUpdateMessage;
};