var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var SystemMessageDisplayMessage = function() {
    this.hangUp = false;
    this.msgId = 0;
    this.parameters = [];
};

require('util').inherits(SystemMessageDisplayMessage, d2com.NetworkMessage.class);

SystemMessageDisplayMessage.prototype.serialize = function(output) {
    this.serializeAs_SystemMessageDisplayMessage(output);
};

SystemMessageDisplayMessage.prototype.deserialize = function(input) {
    this.deserializeAs_SystemMessageDisplayMessage(input);
};

SystemMessageDisplayMessage.prototype.serializeAs_SystemMessageDisplayMessage = function(param1) {
    param1.writeBoolean(this.hangUp);
    if (this.msgId < 0) {
        throw new Error("Forbidden value (" + this.msgId + ") on element msgId.");
    } else {
        param1.writeVarShort(this.msgId);
        param1.writeShort(this.parameters.length);
        var _loc2_ = 0;
        while (_loc2_ < this.parameters.length) {
            param1.writeUTF(this.parameters[_loc2_]);
            _loc2_++;
        }
        return;
    }
};

SystemMessageDisplayMessage.prototype.deserializeAs_SystemMessageDisplayMessage = function(param1) {
    var _loc4_ = null;
    this.hangUp = param1.readBoolean();
    this.msgId = param1.readVarUhShort();
    if (this.msgId < 0) {
        throw new Error("Forbidden value (" + this.msgId + ") on element of SystemMessageDisplayMessage.msgId.");
    } else {
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readUTF();
            this.parameters.push(_loc4_);
            _loc3_++;
        }
        return;
    }
};

SystemMessageDisplayMessage.prototype.getMessageId = function() {
    return 189;
};

SystemMessageDisplayMessage.prototype.getClassName = function() {
    return 'SystemMessageDisplayMessage';
};

module.exports.id = 189;
module.exports.class = SystemMessageDisplayMessage;
module.exports.getInstance = function() {
    return new SystemMessageDisplayMessage;
};