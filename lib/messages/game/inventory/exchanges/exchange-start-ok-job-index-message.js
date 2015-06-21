var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var ExchangeStartOkJobIndexMessage = function() {
    this.jobs = [];
};

require('util').inherits(ExchangeStartOkJobIndexMessage, d2com.NetworkMessage.class);

ExchangeStartOkJobIndexMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeStartOkJobIndexMessage(output);
};

ExchangeStartOkJobIndexMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeStartOkJobIndexMessage(input);
};

ExchangeStartOkJobIndexMessage.prototype.serializeAs_ExchangeStartOkJobIndexMessage = function(param1) {
    param1.writeShort(this.jobs.length);
    var _loc2_ = 0;
    while (_loc2_ < this.jobs.length) {
        if (this.jobs[_loc2_] < 0) {
            throw new Error("Forbidden value (" + this.jobs[_loc2_] + ") on element 1 (starting at 1) of jobs.");
        } else {
            param1.writeVarInt(this.jobs[_loc2_]);
            _loc2_++;
            continue;
        }
    }
};

ExchangeStartOkJobIndexMessage.prototype.deserializeAs_ExchangeStartOkJobIndexMessage = function(param1) {
    var _loc4_ = 0;
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = param1.readVarUhInt();
        if (_loc4_ < 0) {
            throw new Error("Forbidden value (" + _loc4_ + ") on elements of jobs.");
        } else {
            this.jobs.push(_loc4_);
            _loc3_++;
            continue;
        }
    }
};

ExchangeStartOkJobIndexMessage.prototype.getMessageId = function() {
    return 5819;
};

ExchangeStartOkJobIndexMessage.prototype.getClassName = function() {
    return 'ExchangeStartOkJobIndexMessage';
};

module.exports.id = 5819;
module.exports.class = ExchangeStartOkJobIndexMessage;
module.exports.getInstance = function() {
    return new ExchangeStartOkJobIndexMessage;
};