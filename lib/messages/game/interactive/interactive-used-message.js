var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var InteractiveUsedMessage = function() {
    this.entityId = 0;
    this.elemId = 0;
    this.skillId = 0;
    this.duration = 0;
};

require('util').inherits(InteractiveUsedMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new InteractiveUsedMessage();
};

InteractiveUsedMessage.prototype.serialize = function(output) {
    this.serializeAs_InteractiveUsedMessage(output);
};

InteractiveUsedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_InteractiveUsedMessage(input);
};

InteractiveUsedMessage.prototype.serializeAs_InteractiveUsedMessage = function(param1) {
    if (this.entityId < 0) {
        throw new Error("Forbidden value (" + this.entityId + ") on element entityId.");
    } else {
        param1.writeVarInt(this.entityId);
        if (this.elemId < 0) {
            throw new Error("Forbidden value (" + this.elemId + ") on element elemId.");
        } else {
            param1.writeVarInt(this.elemId);
            if (this.skillId < 0) {
                throw new Error("Forbidden value (" + this.skillId + ") on element skillId.");
            } else {
                param1.writeVarShort(this.skillId);
                if (this.duration < 0) {
                    throw new Error("Forbidden value (" + this.duration + ") on element duration.");
                } else {
                    param1.writeVarShort(this.duration);
                    return;
                }
            }
        }
    }
};

InteractiveUsedMessage.prototype.deserializeAs_InteractiveUsedMessage = function(param1) {
    this.entityId = param1.readVarUhInt();
    if (this.entityId < 0) {
        throw new Error("Forbidden value (" + this.entityId + ") on element of InteractiveUsedMessage.entityId.");
    } else {
        this.elemId = param1.readVarUhInt();
        if (this.elemId < 0) {
            throw new Error("Forbidden value (" + this.elemId + ") on element of InteractiveUsedMessage.elemId.");
        } else {
            this.skillId = param1.readVarUhShort();
            if (this.skillId < 0) {
                throw new Error("Forbidden value (" + this.skillId + ") on element of InteractiveUsedMessage.skillId.");
            } else {
                this.duration = param1.readVarUhShort();
                if (this.duration < 0) {
                    throw new Error("Forbidden value (" + this.duration + ") on element of InteractiveUsedMessage.duration.");
                } else {
                    return;
                }
            }
        }
    }
};

InteractiveUsedMessage.prototype.getMessageId = function() {
    return 5745;
};

InteractiveUsedMessage.prototype.getClassName = function() {
    return 'InteractiveUsedMessage';
};

module.exports.id = 5745;
module.exports.InteractiveUsedMessage = InteractiveUsedMessage;