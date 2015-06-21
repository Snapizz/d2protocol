var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var LockableChangeCodeMessage = function() {
    this.code = "";
};

require('util').inherits(LockableChangeCodeMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new LockableChangeCodeMessage();
};

LockableChangeCodeMessage.prototype.serialize = function(output) {
    this.serializeAs_LockableChangeCodeMessage(output);
};

LockableChangeCodeMessage.prototype.deserialize = function(input) {
    this.deserializeAs_LockableChangeCodeMessage(input);
};

LockableChangeCodeMessage.prototype.serializeAs_LockableChangeCodeMessage = function(param1) {
    param1.writeUTF(this.code);
};

LockableChangeCodeMessage.prototype.deserializeAs_LockableChangeCodeMessage = function(param1) {
    this.code = param1.readUTF();
};

LockableChangeCodeMessage.prototype.getMessageId = function() {
    return 5666;
};

LockableChangeCodeMessage.prototype.getClassName = function() {
    return 'LockableChangeCodeMessage';
};

module.exports.id = 5666;
module.exports.LockableChangeCodeMessage = LockableChangeCodeMessage;