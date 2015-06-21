var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var ObjectDeletedMessage = function() {
    this.objectUID = 0;
};

require('util').inherits(ObjectDeletedMessage, d2com.NetworkMessage.class);

ObjectDeletedMessage.prototype.serialize = function(output) {
    this.serializeAs_ObjectDeletedMessage(output);
};

ObjectDeletedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ObjectDeletedMessage(input);
};

ObjectDeletedMessage.prototype.serializeAs_ObjectDeletedMessage = function(param1) {
    if (this.objectUID < 0) {
        throw new Error("Forbidden value (" + this.objectUID + ") on element objectUID.");
    } else {
        param1.writeVarInt(this.objectUID);
        return;
    }
};

ObjectDeletedMessage.prototype.deserializeAs_ObjectDeletedMessage = function(param1) {
    this.objectUID = param1.readVarUhInt();
    if (this.objectUID < 0) {
        throw new Error("Forbidden value (" + this.objectUID + ") on element of ObjectDeletedMessage.objectUID.");
    } else {
        return;
    }
};

ObjectDeletedMessage.prototype.getMessageId = function() {
    return 3024;
};

ObjectDeletedMessage.prototype.getClassName = function() {
    return 'ObjectDeletedMessage';
};

module.exports.id = 3024;
module.exports.class = ObjectDeletedMessage;
module.exports.getInstance = function() {
    return new ObjectDeletedMessage;
};