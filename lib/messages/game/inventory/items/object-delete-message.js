var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var ObjectDeleteMessage = function() {
    this.objectUID = 0;
    this.quantity = 0;
};

require('util').inherits(ObjectDeleteMessage, d2com.NetworkMessage.class);

ObjectDeleteMessage.prototype.serialize = function(output) {
    this.serializeAs_ObjectDeleteMessage(output);
};

ObjectDeleteMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ObjectDeleteMessage(input);
};

ObjectDeleteMessage.prototype.serializeAs_ObjectDeleteMessage = function(param1) {
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

ObjectDeleteMessage.prototype.deserializeAs_ObjectDeleteMessage = function(param1) {
    this.objectUID = param1.readVarUhInt();
    if (this.objectUID < 0) {
        throw new Error("Forbidden value (" + this.objectUID + ") on element of ObjectDeleteMessage.objectUID.");
    } else {
        this.quantity = param1.readVarUhInt();
        if (this.quantity < 0) {
            throw new Error("Forbidden value (" + this.quantity + ") on element of ObjectDeleteMessage.quantity.");
        } else {
            return;
        }
    }
};

ObjectDeleteMessage.prototype.getMessageId = function() {
    return 3022;
};

ObjectDeleteMessage.prototype.getClassName = function() {
    return 'ObjectDeleteMessage';
};

module.exports.id = 3022;
module.exports.class = ObjectDeleteMessage;
module.exports.getInstance = function() {
    return new ObjectDeleteMessage;
};