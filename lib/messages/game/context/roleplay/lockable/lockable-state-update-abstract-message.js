var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var LockableStateUpdateAbstractMessage = function() {
    this.locked = false;
};

require('util').inherits(LockableStateUpdateAbstractMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new LockableStateUpdateAbstractMessage();
};

LockableStateUpdateAbstractMessage.prototype.serialize = function(output) {
    this.serializeAs_LockableStateUpdateAbstractMessage(output);
};

LockableStateUpdateAbstractMessage.prototype.deserialize = function(input) {
    this.deserializeAs_LockableStateUpdateAbstractMessage(input);
};

LockableStateUpdateAbstractMessage.prototype.serializeAs_LockableStateUpdateAbstractMessage = function(param1) {
    param1.writeBoolean(this.locked);
};

LockableStateUpdateAbstractMessage.prototype.deserializeAs_LockableStateUpdateAbstractMessage = function(param1) {
    this.locked = param1.readBoolean();
};

LockableStateUpdateAbstractMessage.prototype.getMessageId = function() {
    return 5671;
};

LockableStateUpdateAbstractMessage.prototype.getClassName = function() {
    return 'LockableStateUpdateAbstractMessage';
};

module.exports.id = 5671;
module.exports.LockableStateUpdateAbstractMessage = LockableStateUpdateAbstractMessage;