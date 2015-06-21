var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var InteractiveUseEndedMessage = function() {
    this.elemId = 0;
    this.skillId = 0;
};

require('util').inherits(InteractiveUseEndedMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new InteractiveUseEndedMessage();
};

InteractiveUseEndedMessage.prototype.serialize = function(output) {
    this.serializeAs_InteractiveUseEndedMessage(output);
};

InteractiveUseEndedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_InteractiveUseEndedMessage(input);
};

InteractiveUseEndedMessage.prototype.serializeAs_InteractiveUseEndedMessage = function(param1) {
    if (this.elemId < 0) {
        throw new Error("Forbidden value (" + this.elemId + ") on element elemId.");
    } else {
        param1.writeVarInt(this.elemId);
        if (this.skillId < 0) {
            throw new Error("Forbidden value (" + this.skillId + ") on element skillId.");
        } else {
            param1.writeVarShort(this.skillId);
            return;
        }
    }
};

InteractiveUseEndedMessage.prototype.deserializeAs_InteractiveUseEndedMessage = function(param1) {
    this.elemId = param1.readVarUhInt();
    if (this.elemId < 0) {
        throw new Error("Forbidden value (" + this.elemId + ") on element of InteractiveUseEndedMessage.elemId.");
    } else {
        this.skillId = param1.readVarUhShort();
        if (this.skillId < 0) {
            throw new Error("Forbidden value (" + this.skillId + ") on element of InteractiveUseEndedMessage.skillId.");
        } else {
            return;
        }
    }
};

InteractiveUseEndedMessage.prototype.getMessageId = function() {
    return 6112;
};

InteractiveUseEndedMessage.prototype.getClassName = function() {
    return 'InteractiveUseEndedMessage';
};

module.exports.id = 6112;
module.exports.InteractiveUseEndedMessage = InteractiveUseEndedMessage;