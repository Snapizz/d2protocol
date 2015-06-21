var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var GuildInformationsGeneralMessage = function() {
    this.enabled = false;
    this.abandonnedPaddock = false;
    this.level = 0;
    this.expLevelFloor = 0;
    this.experience = 0;
    this.expNextLevelFloor = 0;
    this.creationDate = 0;
    this.nbTotalMembers = 0;
    this.nbConnectedMembers = 0;
};

require('util').inherits(GuildInformationsGeneralMessage, d2com.NetworkMessage.class);

GuildInformationsGeneralMessage.prototype.serialize = function(output) {
    this.serializeAs_GuildInformationsGeneralMessage(output);
};

GuildInformationsGeneralMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GuildInformationsGeneralMessage(input);
};

GuildInformationsGeneralMessage.prototype.serializeAs_GuildInformationsGeneralMessage = function(param1) {
    var _loc2_ = 0;
    _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.enabled);
    _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.abandonnedPaddock);
    param1.writeByte(_loc2_);
    if (this.level < 0 || this.level > 255) {
        throw new Error("Forbidden value (" + this.level + ") on element level.");
    } else {
        param1.writeByte(this.level);
        if (this.expLevelFloor < 0 || this.expLevelFloor > 9.007199254740992E15) {
            throw new Error("Forbidden value (" + this.expLevelFloor + ") on element expLevelFloor.");
        } else {
            param1.writeVarLong(this.expLevelFloor);
            if (this.experience < 0 || this.experience > 9.007199254740992E15) {
                throw new Error("Forbidden value (" + this.experience + ") on element experience.");
            } else {
                param1.writeVarLong(this.experience);
                if (this.expNextLevelFloor < 0 || this.expNextLevelFloor > 9.007199254740992E15) {
                    throw new Error("Forbidden value (" + this.expNextLevelFloor + ") on element expNextLevelFloor.");
                } else {
                    param1.writeVarLong(this.expNextLevelFloor);
                    if (this.creationDate < 0) {
                        throw new Error("Forbidden value (" + this.creationDate + ") on element creationDate.");
                    } else {
                        param1.writeInt(this.creationDate);
                        if (this.nbTotalMembers < 0) {
                            throw new Error("Forbidden value (" + this.nbTotalMembers + ") on element nbTotalMembers.");
                        } else {
                            param1.writeVarShort(this.nbTotalMembers);
                            if (this.nbConnectedMembers < 0) {
                                throw new Error("Forbidden value (" + this.nbConnectedMembers + ") on element nbConnectedMembers.");
                            } else {
                                param1.writeVarShort(this.nbConnectedMembers);
                                return;
                            }
                        }
                    }
                }
            }
        }
    }
};

GuildInformationsGeneralMessage.prototype.deserializeAs_GuildInformationsGeneralMessage = function(param1) {
    var _loc2_ = param1.readByte();
    this.enabled = BooleanByteWrapper.getFlag(_loc2_, 0);
    this.abandonnedPaddock = BooleanByteWrapper.getFlag(_loc2_, 1);
    this.level = param1.readUnsignedByte();
    if (this.level < 0 || this.level > 255) {
        throw new Error("Forbidden value (" + this.level + ") on element of GuildInformationsGeneralMessage.level.");
    } else {
        this.expLevelFloor = param1.readVarUhLong();
        if (this.expLevelFloor < 0 || this.expLevelFloor > 9.007199254740992E15) {
            throw new Error("Forbidden value (" + this.expLevelFloor + ") on element of GuildInformationsGeneralMessage.expLevelFloor.");
        } else {
            this.experience = param1.readVarUhLong();
            if (this.experience < 0 || this.experience > 9.007199254740992E15) {
                throw new Error("Forbidden value (" + this.experience + ") on element of GuildInformationsGeneralMessage.experience.");
            } else {
                this.expNextLevelFloor = param1.readVarUhLong();
                if (this.expNextLevelFloor < 0 || this.expNextLevelFloor > 9.007199254740992E15) {
                    throw new Error("Forbidden value (" + this.expNextLevelFloor + ") on element of GuildInformationsGeneralMessage.expNextLevelFloor.");
                } else {
                    this.creationDate = param1.readInt();
                    if (this.creationDate < 0) {
                        throw new Error("Forbidden value (" + this.creationDate + ") on element of GuildInformationsGeneralMessage.creationDate.");
                    } else {
                        this.nbTotalMembers = param1.readVarUhShort();
                        if (this.nbTotalMembers < 0) {
                            throw new Error("Forbidden value (" + this.nbTotalMembers + ") on element of GuildInformationsGeneralMessage.nbTotalMembers.");
                        } else {
                            this.nbConnectedMembers = param1.readVarUhShort();
                            if (this.nbConnectedMembers < 0) {
                                throw new Error("Forbidden value (" + this.nbConnectedMembers + ") on element of GuildInformationsGeneralMessage.nbConnectedMembers.");
                            } else {
                                return;
                            }
                        }
                    }
                }
            }
        }
    }
};

GuildInformationsGeneralMessage.prototype.getMessageId = function() {
    return 5557;
};

GuildInformationsGeneralMessage.prototype.getClassName = function() {
    return 'GuildInformationsGeneralMessage';
};

module.exports.id = 5557;
module.exports.class = GuildInformationsGeneralMessage;
module.exports.getInstance = function() {
    return new GuildInformationsGeneralMessage;
};