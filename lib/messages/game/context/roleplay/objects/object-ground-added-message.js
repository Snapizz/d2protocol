var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var ObjectGroundAddedMessage = function() {
    this.cellId = 0;
    this.objectGID = 0;
};

require('util').inherits(ObjectGroundAddedMessage, d2com.NetworkMessage.class);

ObjectGroundAddedMessage.prototype.serialize = function(output) {
    this.serializeAs_ObjectGroundAddedMessage(output);
};

ObjectGroundAddedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ObjectGroundAddedMessage(input);
};

ObjectGroundAddedMessage.prototype.serializeAs_ObjectGroundAddedMessage = function(param1) {
    if (this.cellId < 0 || this.cellId > 559) {
        throw new Error("Forbidden value (" + this.cellId + ") on element cellId.");
    } else {
        param1.writeVarShort(this.cellId);
        if (this.objectGID < 0) {
            throw new Error("Forbidden value (" + this.objectGID + ") on element objectGID.");
        } else {
            param1.writeVarShort(this.objectGID);
            return;
        }
    }
};

ObjectGroundAddedMessage.prototype.deserializeAs_ObjectGroundAddedMessage = function(param1) {
    this.cellId = param1.readVarUhShort();
    if (this.cellId < 0 || this.cellId > 559) {
        throw new Error("Forbidden value (" + this.cellId + ") on element of ObjectGroundAddedMessage.cellId.");
    } else {
        this.objectGID = param1.readVarUhShort();
        if (this.objectGID < 0) {
            throw new Error("Forbidden value (" + this.objectGID + ") on element of ObjectGroundAddedMessage.objectGID.");
        } else {
            return;
        }
    }
};

ObjectGroundAddedMessage.prototype.getMessageId = function() {
    return 3017;
};

ObjectGroundAddedMessage.prototype.getClassName = function() {
    return 'ObjectGroundAddedMessage';
};

module.exports.id = 3017;
module.exports.class = ObjectGroundAddedMessage;
module.exports.getInstance = function() {
    return new ObjectGroundAddedMessage;
};