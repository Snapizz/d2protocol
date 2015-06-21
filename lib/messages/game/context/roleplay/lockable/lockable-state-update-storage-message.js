var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var LockableStateUpdateStorageMessage = function() {
    this.mapId = 0;
    this.elementId = 0;
};

require('util').inherits(LockableStateUpdateStorageMessage, require('./lockable-state-update-abstract-message.js'));

module.exports = function() {
    return new LockableStateUpdateStorageMessage();
};

LockableStateUpdateStorageMessage.prototype.serialize = function(output) {
    this.serializeAs_LockableStateUpdateStorageMessage(output);
};

LockableStateUpdateStorageMessage.prototype.deserialize = function(input) {
    this.deserializeAs_LockableStateUpdateStorageMessage(input);
};

LockableStateUpdateStorageMessage.prototype.serializeAs_LockableStateUpdateStorageMessage = function(param1) {
    this.serializeAs_LockableStateUpdateAbstractMessage(param1);
    param1.writeInt(this.mapId);
    if (this.elementId < 0) {
        throw new Error("Forbidden value (" + this.elementId + ") on element elementId.");
    } else {
        param1.writeVarInt(this.elementId);
        return;
    }
};

LockableStateUpdateStorageMessage.prototype.deserializeAs_LockableStateUpdateStorageMessage = function(param1) {
    this.deserializeAs_LockableStateUpdateAbstractMessage(param1);
    this.mapId = param1.readInt();
    this.elementId = param1.readVarUhInt();
    if (this.elementId < 0) {
        throw new Error("Forbidden value (" + this.elementId + ") on element of LockableStateUpdateStorageMessage.elementId.");
    } else {
        return;
    }
};

LockableStateUpdateStorageMessage.prototype.getMessageId = function() {
    return 5669;
};

LockableStateUpdateStorageMessage.prototype.getClassName = function() {
    return 'LockableStateUpdateStorageMessage';
};

module.exports.id = 5669;
module.exports.LockableStateUpdateStorageMessage = LockableStateUpdateStorageMessage;