var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var LockableUseCodeMessage = function() {
    this.code = "";
};

require('util').inherits(LockableUseCodeMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new LockableUseCodeMessage();
};

LockableUseCodeMessage.prototype.serialize = function(output) {
    this.serializeAs_LockableUseCodeMessage(output);
};

LockableUseCodeMessage.prototype.deserialize = function(input) {
    this.deserializeAs_LockableUseCodeMessage(input);
};

LockableUseCodeMessage.prototype.serializeAs_LockableUseCodeMessage = function(param1) {
    param1.writeUTF(this.code);
};

LockableUseCodeMessage.prototype.deserializeAs_LockableUseCodeMessage = function(param1) {
    this.code = param1.readUTF();
};

LockableUseCodeMessage.prototype.getMessageId = function() {
    return 5667;
};

LockableUseCodeMessage.prototype.getClassName = function() {
    return 'LockableUseCodeMessage';
};

module.exports.id = 5667;
module.exports.LockableUseCodeMessage = LockableUseCodeMessage;