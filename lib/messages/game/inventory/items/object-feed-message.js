var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var ObjectFeedMessage = function() {
    this.objectUID = 0;
    this.foodUID = 0;
    this.foodQuantity = 0;
};

require('util').inherits(ObjectFeedMessage, d2com.NetworkMessage.class);

ObjectFeedMessage.prototype.serialize = function(output) {
    this.serializeAs_ObjectFeedMessage(output);
};

ObjectFeedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ObjectFeedMessage(input);
};

ObjectFeedMessage.prototype.serializeAs_ObjectFeedMessage = function(param1) {
    if (this.objectUID < 0) {
        throw new Error("Forbidden value (" + this.objectUID + ") on element objectUID.");
    } else {
        param1.writeVarInt(this.objectUID);
        if (this.foodUID < 0) {
            throw new Error("Forbidden value (" + this.foodUID + ") on element foodUID.");
        } else {
            param1.writeVarInt(this.foodUID);
            if (this.foodQuantity < 0) {
                throw new Error("Forbidden value (" + this.foodQuantity + ") on element foodQuantity.");
            } else {
                param1.writeVarInt(this.foodQuantity);
                return;
            }
        }
    }
};

ObjectFeedMessage.prototype.deserializeAs_ObjectFeedMessage = function(param1) {
    this.objectUID = param1.readVarUhInt();
    if (this.objectUID < 0) {
        throw new Error("Forbidden value (" + this.objectUID + ") on element of ObjectFeedMessage.objectUID.");
    } else {
        this.foodUID = param1.readVarUhInt();
        if (this.foodUID < 0) {
            throw new Error("Forbidden value (" + this.foodUID + ") on element of ObjectFeedMessage.foodUID.");
        } else {
            this.foodQuantity = param1.readVarUhInt();
            if (this.foodQuantity < 0) {
                throw new Error("Forbidden value (" + this.foodQuantity + ") on element of ObjectFeedMessage.foodQuantity.");
            } else {
                return;
            }
        }
    }
};

ObjectFeedMessage.prototype.getMessageId = function() {
    return 6290;
};

ObjectFeedMessage.prototype.getClassName = function() {
    return 'ObjectFeedMessage';
};

module.exports.id = 6290;
module.exports.class = ObjectFeedMessage;
module.exports.getInstance = function() {
    return new ObjectFeedMessage;
};