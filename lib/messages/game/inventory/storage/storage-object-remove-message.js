var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var StorageObjectRemoveMessage = function() {
    this.objectUID = 0;
};

require('util').inherits(StorageObjectRemoveMessage, d2com.NetworkMessage.class);

StorageObjectRemoveMessage.prototype.serialize = function(output) {
    this.serializeAs_StorageObjectRemoveMessage(output);
};

StorageObjectRemoveMessage.prototype.deserialize = function(input) {
    this.deserializeAs_StorageObjectRemoveMessage(input);
};

StorageObjectRemoveMessage.prototype.serializeAs_StorageObjectRemoveMessage = function(param1) {
    if (this.objectUID < 0) {
        throw new Error("Forbidden value (" + this.objectUID + ") on element objectUID.");
    } else {
        param1.writeVarInt(this.objectUID);
        return;
    }
};

StorageObjectRemoveMessage.prototype.deserializeAs_StorageObjectRemoveMessage = function(param1) {
    this.objectUID = param1.readVarUhInt();
    if (this.objectUID < 0) {
        throw new Error("Forbidden value (" + this.objectUID + ") on element of StorageObjectRemoveMessage.objectUID.");
    } else {
        return;
    }
};

StorageObjectRemoveMessage.prototype.getMessageId = function() {
    return 5648;
};

StorageObjectRemoveMessage.prototype.getClassName = function() {
    return 'StorageObjectRemoveMessage';
};

module.exports.id = 5648;
module.exports.class = StorageObjectRemoveMessage;
module.exports.getInstance = function() {
    return new StorageObjectRemoveMessage;
};