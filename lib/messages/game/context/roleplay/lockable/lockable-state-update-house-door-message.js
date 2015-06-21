var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var LockableStateUpdateHouseDoorMessage = function() {
    this.houseId = 0;
};

require('util').inherits(LockableStateUpdateHouseDoorMessage, require('./lockable-state-update-abstract-message.js').LockableStateUpdateAbstractMessage);

module.exports = function() {
    return new LockableStateUpdateHouseDoorMessage();
};

LockableStateUpdateHouseDoorMessage.prototype.serialize = function(output) {
    this.serializeAs_LockableStateUpdateHouseDoorMessage(output);
};

LockableStateUpdateHouseDoorMessage.prototype.deserialize = function(input) {
    this.deserializeAs_LockableStateUpdateHouseDoorMessage(input);
};

LockableStateUpdateHouseDoorMessage.prototype.serializeAs_LockableStateUpdateHouseDoorMessage = function(param1) {
    this.serializeAs_LockableStateUpdateAbstractMessage(param1);
    if (this.houseId < 0) {
        throw new Error("Forbidden value (" + this.houseId + ") on element houseId.");
    } else {
        param1.writeVarInt(this.houseId);
        return;
    }
};

LockableStateUpdateHouseDoorMessage.prototype.deserializeAs_LockableStateUpdateHouseDoorMessage = function(param1) {
    this.deserializeAs_LockableStateUpdateAbstractMessage(param1);
    this.houseId = param1.readVarUhInt();
    if (this.houseId < 0) {
        throw new Error("Forbidden value (" + this.houseId + ") on element of LockableStateUpdateHouseDoorMessage.houseId.");
    } else {
        return;
    }
};

LockableStateUpdateHouseDoorMessage.prototype.getMessageId = function() {
    return 5668;
};

LockableStateUpdateHouseDoorMessage.prototype.getClassName = function() {
    return 'LockableStateUpdateHouseDoorMessage';
};

module.exports.id = 5668;
module.exports.LockableStateUpdateHouseDoorMessage = LockableStateUpdateHouseDoorMessage;