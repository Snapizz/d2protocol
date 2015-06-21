var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var BasicAckMessage = module.exports = function() {
    this.seq = 0;
    this.lastPacketId = 0;

    return this;
};

require('util').inherits(BasicAckMessage, d2com.NetworkMessage.class);

BasicAckMessage.prototype.serialize = function(output) {
    this.serializeAs_BasicAckMessage(output);
};

BasicAckMessage.prototype.deserialize = function(input) {
    this.deserializeAs_BasicAckMessage(input);
};

BasicAckMessage.prototype.serializeAs_BasicAckMessage = function(param1) {
    if (this.seq < 0) {
        throw new Error("Forbidden value (" + this.seq + ") on element seq.");
    } else {
        param1.writeVarInt(this.seq);
        if (this.lastPacketId < 0) {
            throw new Error("Forbidden value (" + this.lastPacketId + ") on element lastPacketId.");
        } else {
            param1.writeVarShort(this.lastPacketId);
            return;
        }
    }
};

BasicAckMessage.prototype.deserializeAs_BasicAckMessage = function(param1) {
    this.seq = param1.readVarUhInt();
    if (this.seq < 0) {
        throw new Error("Forbidden value (" + this.seq + ") on element of BasicAckMessage.seq.");
    } else {
        this.lastPacketId = param1.readVarUhShort();
        if (this.lastPacketId < 0) {
            throw new Error("Forbidden value (" + this.lastPacketId + ") on element of BasicAckMessage.lastPacketId.");
        } else {
            return;
        }
    }
};

BasicAckMessage.prototype.getMessageId = function() {
    return 6362;
};

BasicAckMessage.prototype.getClassName = function() {
    return 'BasicAckMessage';
};

module.exports.id = 6362;