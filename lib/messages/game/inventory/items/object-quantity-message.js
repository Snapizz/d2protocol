var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ObjectQuantityMessage = function() {
    this.objectUID = 0;
    this.quantity = 0;
};

require('util').inherits(ObjectQuantityMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new ObjectQuantityMessage();
};

ObjectQuantityMessage.prototype.serialize = function(output) {
    this.serializeAs_ObjectQuantityMessage(output);
};

ObjectQuantityMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ObjectQuantityMessage(input);
};

ObjectQuantityMessage.prototype.serializeAs_ObjectQuantityMessage = function(param1) {
    if (this.objectUID < 0) {
        throw new Error("Forbidden value (" + this.objectUID + ") on element objectUID.");
    } else {
        param1.writeVarInt(this.objectUID);
        if (this.quantity < 0) {
            throw new Error("Forbidden value (" + this.quantity + ") on element quantity.");
        } else {
            param1.writeVarInt(this.quantity);
            return;
        }
    }
};

ObjectQuantityMessage.prototype.deserializeAs_ObjectQuantityMessage = function(param1) {
    this.objectUID = param1.readVarUhInt();
    if (this.objectUID < 0) {
        throw new Error("Forbidden value (" + this.objectUID + ") on element of ObjectQuantityMessage.objectUID.");
    } else {
        this.quantity = param1.readVarUhInt();
        if (this.quantity < 0) {
            throw new Error("Forbidden value (" + this.quantity + ") on element of ObjectQuantityMessage.quantity.");
        } else {
            return;
        }
    }
};

ObjectQuantityMessage.prototype.getMessageId = function() {
    return 3023;
};

ObjectQuantityMessage.prototype.getClassName = function() {
    return 'ObjectQuantityMessage';
};

module.exports.id = 3023;
module.exports.ObjectQuantityMessage = ObjectQuantityMessage;