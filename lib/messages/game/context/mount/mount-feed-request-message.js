var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var MountFeedRequestMessage = function() {
    this.mountUid = 0;
    this.mountLocation = 0;
    this.mountFoodUid = 0;
    this.quantity = 0;
};

require('util').inherits(MountFeedRequestMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new MountFeedRequestMessage();
};

MountFeedRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_MountFeedRequestMessage(output);
};

MountFeedRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_MountFeedRequestMessage(input);
};

MountFeedRequestMessage.prototype.serializeAs_MountFeedRequestMessage = function(param1) {
    if (this.mountUid < 0) {
        throw new Error("Forbidden value (" + this.mountUid + ") on element mountUid.");
    } else {
        param1.writeVarInt(this.mountUid);
        param1.writeByte(this.mountLocation);
        if (this.mountFoodUid < 0) {
            throw new Error("Forbidden value (" + this.mountFoodUid + ") on element mountFoodUid.");
        } else {
            param1.writeVarInt(this.mountFoodUid);
            if (this.quantity < 0) {
                throw new Error("Forbidden value (" + this.quantity + ") on element quantity.");
            } else {
                param1.writeVarInt(this.quantity);
                return;
            }
        }
    }
};

MountFeedRequestMessage.prototype.deserializeAs_MountFeedRequestMessage = function(param1) {
    this.mountUid = param1.readVarUhInt();
    if (this.mountUid < 0) {
        throw new Error("Forbidden value (" + this.mountUid + ") on element of MountFeedRequestMessage.mountUid.");
    } else {
        this.mountLocation = param1.readByte();
        this.mountFoodUid = param1.readVarUhInt();
        if (this.mountFoodUid < 0) {
            throw new Error("Forbidden value (" + this.mountFoodUid + ") on element of MountFeedRequestMessage.mountFoodUid.");
        } else {
            this.quantity = param1.readVarUhInt();
            if (this.quantity < 0) {
                throw new Error("Forbidden value (" + this.quantity + ") on element of MountFeedRequestMessage.quantity.");
            } else {
                return;
            }
        }
    }
};

MountFeedRequestMessage.prototype.getMessageId = function() {
    return 6189;
};

MountFeedRequestMessage.prototype.getClassName = function() {
    return 'MountFeedRequestMessage';
};

module.exports.id = 6189;
module.exports.MountFeedRequestMessage = MountFeedRequestMessage;