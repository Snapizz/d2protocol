var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var GuildChangeMemberParametersMessage = function() {
    this.memberId = 0;
    this.rank = 0;
    this.experienceGivenPercent = 0;
    this.rights = 0;
};

require('util').inherits(GuildChangeMemberParametersMessage, d2com.NetworkMessage.class);

GuildChangeMemberParametersMessage.prototype.serialize = function(output) {
    this.serializeAs_GuildChangeMemberParametersMessage(output);
};

GuildChangeMemberParametersMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GuildChangeMemberParametersMessage(input);
};

GuildChangeMemberParametersMessage.prototype.serializeAs_GuildChangeMemberParametersMessage = function(param1) {
    if (this.memberId < 0) {
        throw new Error("Forbidden value (" + this.memberId + ") on element memberId.");
    } else {
        param1.writeVarInt(this.memberId);
        if (this.rank < 0) {
            throw new Error("Forbidden value (" + this.rank + ") on element rank.");
        } else {
            param1.writeVarShort(this.rank);
            if (this.experienceGivenPercent < 0 || this.experienceGivenPercent > 100) {
                throw new Error("Forbidden value (" + this.experienceGivenPercent + ") on element experienceGivenPercent.");
            } else {
                param1.writeByte(this.experienceGivenPercent);
                if (this.rights < 0) {
                    throw new Error("Forbidden value (" + this.rights + ") on element rights.");
                } else {
                    param1.writeVarInt(this.rights);
                    return;
                }
            }
        }
    }
};

GuildChangeMemberParametersMessage.prototype.deserializeAs_GuildChangeMemberParametersMessage = function(param1) {
    this.memberId = param1.readVarUhInt();
    if (this.memberId < 0) {
        throw new Error("Forbidden value (" + this.memberId + ") on element of GuildChangeMemberParametersMessage.memberId.");
    } else {
        this.rank = param1.readVarUhShort();
        if (this.rank < 0) {
            throw new Error("Forbidden value (" + this.rank + ") on element of GuildChangeMemberParametersMessage.rank.");
        } else {
            this.experienceGivenPercent = param1.readByte();
            if (this.experienceGivenPercent < 0 || this.experienceGivenPercent > 100) {
                throw new Error("Forbidden value (" + this.experienceGivenPercent + ") on element of GuildChangeMemberParametersMessage.experienceGivenPercent.");
            } else {
                this.rights = param1.readVarUhInt();
                if (this.rights < 0) {
                    throw new Error("Forbidden value (" + this.rights + ") on element of GuildChangeMemberParametersMessage.rights.");
                } else {
                    return;
                }
            }
        }
    }
};

GuildChangeMemberParametersMessage.prototype.getMessageId = function() {
    return 5549;
};

GuildChangeMemberParametersMessage.prototype.getClassName = function() {
    return 'GuildChangeMemberParametersMessage';
};

module.exports.id = 5549;
module.exports.class = GuildChangeMemberParametersMessage;
module.exports.getInstance = function() {
    return new GuildChangeMemberParametersMessage;
};