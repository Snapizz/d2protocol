var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var MimicryObjectEraseRequestMessage = function() {
    this.hostUID = 0;
    this.hostPos = 0;
};

require('util').inherits(MimicryObjectEraseRequestMessage, d2com.NetworkMessage.class);

MimicryObjectEraseRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_MimicryObjectEraseRequestMessage(output);
};

MimicryObjectEraseRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_MimicryObjectEraseRequestMessage(input);
};

MimicryObjectEraseRequestMessage.prototype.serializeAs_MimicryObjectEraseRequestMessage = function(param1) {
    if (this.hostUID < 0) {
        throw new Error("Forbidden value (" + this.hostUID + ") on element hostUID.");
    } else {
        param1.writeVarInt(this.hostUID);
        if (this.hostPos < 0 || this.hostPos > 255) {
            throw new Error("Forbidden value (" + this.hostPos + ") on element hostPos.");
        } else {
            param1.writeByte(this.hostPos);
            return;
        }
    }
};

MimicryObjectEraseRequestMessage.prototype.deserializeAs_MimicryObjectEraseRequestMessage = function(param1) {
    this.hostUID = param1.readVarUhInt();
    if (this.hostUID < 0) {
        throw new Error("Forbidden value (" + this.hostUID + ") on element of MimicryObjectEraseRequestMessage.hostUID.");
    } else {
        this.hostPos = param1.readUnsignedByte();
        if (this.hostPos < 0 || this.hostPos > 255) {
            throw new Error("Forbidden value (" + this.hostPos + ") on element of MimicryObjectEraseRequestMessage.hostPos.");
        } else {
            return;
        }
    }
};

MimicryObjectEraseRequestMessage.prototype.getMessageId = function() {
    return 6457;
};

MimicryObjectEraseRequestMessage.prototype.getClassName = function() {
    return 'MimicryObjectEraseRequestMessage';
};

module.exports.id = 6457;
module.exports.class = MimicryObjectEraseRequestMessage;
module.exports.getInstance = function() {
    return new MimicryObjectEraseRequestMessage;
};