var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ObjectDropMessage = module.exports = function() {
    this.objectUID = 0;
    this.quantity = 0;

    return this;
};

require('util').inherits(ObjectDropMessage, d2com.NetworkMessage.class);

ObjectDropMessage.prototype.serialize = function(output) {
    this.serializeAs_ObjectDropMessage(output);
};

ObjectDropMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ObjectDropMessage(input);
};

ObjectDropMessage.prototype.serializeAs_ObjectDropMessage = function(param1) {
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

ObjectDropMessage.prototype.deserializeAs_ObjectDropMessage = function(param1) {
    this.objectUID = param1.readVarUhInt();
    if (this.objectUID < 0) {
        throw new Error("Forbidden value (" + this.objectUID + ") on element of ObjectDropMessage.objectUID.");
    } else {
        this.quantity = param1.readVarUhInt();
        if (this.quantity < 0) {
            throw new Error("Forbidden value (" + this.quantity + ") on element of ObjectDropMessage.quantity.");
        } else {
            return;
        }
    }
};

ObjectDropMessage.prototype.getMessageId = function() {
    return 3005;
};

ObjectDropMessage.prototype.getClassName = function() {
    return 'ObjectDropMessage';
};

module.exports.id = 3005;