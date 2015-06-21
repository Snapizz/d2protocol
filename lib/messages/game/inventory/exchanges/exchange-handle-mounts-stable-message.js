var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeHandleMountsStableMessage = function() {
    this.actionType = 0;
    this.ridesId = [];
};

require('util').inherits(ExchangeHandleMountsStableMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new ExchangeHandleMountsStableMessage();
};

ExchangeHandleMountsStableMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeHandleMountsStableMessage(output);
};

ExchangeHandleMountsStableMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeHandleMountsStableMessage(input);
};

ExchangeHandleMountsStableMessage.prototype.serializeAs_ExchangeHandleMountsStableMessage = function(param1) {
    param1.writeByte(this.actionType);
    param1.writeShort(this.ridesId.length);
    var _loc2_ = 0;
    while (_loc2_ < this.ridesId.length) {
        if (this.ridesId[_loc2_] < 0) {
            throw new Error("Forbidden value (" + this.ridesId[_loc2_] + ") on element 2 (starting at 1) of ridesId.");
        } else {
            param1.writeVarInt(this.ridesId[_loc2_]);
            _loc2_++;
            continue;
        }
    }
};

ExchangeHandleMountsStableMessage.prototype.deserializeAs_ExchangeHandleMountsStableMessage = function(param1) {
    var _loc4_ = 0;
    this.actionType = param1.readByte();
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = param1.readVarUhInt();
        if (_loc4_ < 0) {
            throw new Error("Forbidden value (" + _loc4_ + ") on elements of ridesId.");
        } else {
            this.ridesId.push(_loc4_);
            _loc3_++;
            continue;
        }
    }
};

ExchangeHandleMountsStableMessage.prototype.getMessageId = function() {
    return 6562;
};

ExchangeHandleMountsStableMessage.prototype.getClassName = function() {
    return 'ExchangeHandleMountsStableMessage';
};

module.exports.id = 6562;
module.exports.ExchangeHandleMountsStableMessage = ExchangeHandleMountsStableMessage;