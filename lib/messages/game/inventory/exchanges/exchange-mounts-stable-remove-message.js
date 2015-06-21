var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeMountsStableRemoveMessage = function() {
    this.mountsId = [];
};

require('util').inherits(ExchangeMountsStableRemoveMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new ExchangeMountsStableRemoveMessage();
};

ExchangeMountsStableRemoveMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeMountsStableRemoveMessage(output);
};

ExchangeMountsStableRemoveMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeMountsStableRemoveMessage(input);
};

ExchangeMountsStableRemoveMessage.prototype.serializeAs_ExchangeMountsStableRemoveMessage = function(param1) {
    param1.writeShort(this.mountsId.length);
    var _loc2_ = 0;
    while (_loc2_ < this.mountsId.length) {
        param1.writeVarInt(this.mountsId[_loc2_]);
        _loc2_++;
    }
};

ExchangeMountsStableRemoveMessage.prototype.deserializeAs_ExchangeMountsStableRemoveMessage = function(param1) {
    var _loc4_ = 0;
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = param1.readVarInt();
        this.mountsId.push(_loc4_);
        _loc3_++;
    }
};

ExchangeMountsStableRemoveMessage.prototype.getMessageId = function() {
    return 6556;
};

ExchangeMountsStableRemoveMessage.prototype.getClassName = function() {
    return 'ExchangeMountsStableRemoveMessage';
};

module.exports.id = 6556;
module.exports.ExchangeMountsStableRemoveMessage = ExchangeMountsStableRemoveMessage;