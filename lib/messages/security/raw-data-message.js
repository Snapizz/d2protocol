var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var RawDataMessage = module.exports = function() {
    this.content = new Buffer(32);

    return this;
};

require('util').inherits(RawDataMessage, d2com.NetworkMessage.class);

RawDataMessage.prototype.serialize = function(output) {
    this.serializeAs_RawDataMessage(output);
};

RawDataMessage.prototype.deserialize = function(input) {
    this.deserializeAs_RawDataMessage(input);
};

RawDataMessage.prototype.serializeAs_RawDataMessage = function(param1) {
    param1.writeVarInt(this.content.length);
    var _loc2_ = 0;
    while (_loc2_ < this.content.length) {
        param1.writeByte(this.content[_loc2_]);
        _loc2_++;
    }
};

RawDataMessage.prototype.deserializeAs_RawDataMessage = function(param1) {
    var _loc2_ = param1.readVarInt();
    param1.readBytes(this.content, 0, _loc2_);
};

RawDataMessage.prototype.getMessageId = function() {
    return 6253;
};

RawDataMessage.prototype.getClassName = function() {
    return 'RawDataMessage';
};

module.exports.id = 6253;