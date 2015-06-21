var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var IdentificationSuccessMessage = function() {
    this.login = "";
    this.nickname = "";
    this.accountId = 0;
    this.communityId = 0;
    this.hasRights = false;
    this.secretQuestion = "";
    this.accountCreation = 0;
    this.subscriptionElapsedDuration = 0;
    this.subscriptionEndDate = 0;
    this.wasAlreadyConnected = false;
};

require('util').inherits(IdentificationSuccessMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new IdentificationSuccessMessage();
};

IdentificationSuccessMessage.prototype.serialize = function(output) {
    this.serializeAs_IdentificationSuccessMessage(output);
};

IdentificationSuccessMessage.prototype.deserialize = function(input) {
    this.deserializeAs_IdentificationSuccessMessage(input);
};

IdentificationSuccessMessage.prototype.serializeAs_IdentificationSuccessMessage = function(param1) {
    var _loc2_ = 0;
    _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.hasRights);
    _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.wasAlreadyConnected);
    param1.writeByte(_loc2_);
    param1.writeUTF(this.login);
    param1.writeUTF(this.nickname);
    if (this.accountId < 0) {
        throw new Error("Forbidden value (" + this.accountId + ") on element accountId.");
    } else {
        param1.writeInt(this.accountId);
        if (this.communityId < 0) {
            throw new Error("Forbidden value (" + this.communityId + ") on element communityId.");
        } else {
            param1.writeByte(this.communityId);
            param1.writeUTF(this.secretQuestion);
            if (this.accountCreation < 0 || this.accountCreation > 9.007199254740992E15) {
                throw new Error("Forbidden value (" + this.accountCreation + ") on element accountCreation.");
            } else {
                param1.writeDouble(this.accountCreation);
                if (this.subscriptionElapsedDuration < 0 || this.subscriptionElapsedDuration > 9.007199254740992E15) {
                    throw new Error("Forbidden value (" + this.subscriptionElapsedDuration + ") on element subscriptionElapsedDuration.");
                } else {
                    param1.writeDouble(this.subscriptionElapsedDuration);
                    if (this.subscriptionEndDate < 0 || this.subscriptionEndDate > 9.007199254740992E15) {
                        throw new Error("Forbidden value (" + this.subscriptionEndDate + ") on element subscriptionEndDate.");
                    } else {
                        param1.writeDouble(this.subscriptionEndDate);
                        return;
                    }
                }
            }
        }
    }
};

IdentificationSuccessMessage.prototype.deserializeAs_IdentificationSuccessMessage = function(param1) {
    var _loc2_ = param1.readByte();
    this.hasRights = BooleanByteWrapper.getFlag(_loc2_, 0);
    this.wasAlreadyConnected = BooleanByteWrapper.getFlag(_loc2_, 1);
    this.login = param1.readUTF();
    this.nickname = param1.readUTF();
    this.accountId = param1.readInt();
    if (this.accountId < 0) {
        throw new Error("Forbidden value (" + this.accountId + ") on element of IdentificationSuccessMessage.accountId.");
    } else {
        this.communityId = param1.readByte();
        if (this.communityId < 0) {
            throw new Error("Forbidden value (" + this.communityId + ") on element of IdentificationSuccessMessage.communityId.");
        } else {
            this.secretQuestion = param1.readUTF();
            this.accountCreation = param1.readDouble();
            if (this.accountCreation < 0 || this.accountCreation > 9.007199254740992E15) {
                throw new Error("Forbidden value (" + this.accountCreation + ") on element of IdentificationSuccessMessage.accountCreation.");
            } else {
                this.subscriptionElapsedDuration = param1.readDouble();
                if (this.subscriptionElapsedDuration < 0 || this.subscriptionElapsedDuration > 9.007199254740992E15) {
                    throw new Error("Forbidden value (" + this.subscriptionElapsedDuration + ") on element of IdentificationSuccessMessage.subscriptionElapsedDuration.");
                } else {
                    this.subscriptionEndDate = param1.readDouble();
                    if (this.subscriptionEndDate < 0 || this.subscriptionEndDate > 9.007199254740992E15) {
                        throw new Error("Forbidden value (" + this.subscriptionEndDate + ") on element of IdentificationSuccessMessage.subscriptionEndDate.");
                    } else {
                        return;
                    }
                }
            }
        }
    }
};

IdentificationSuccessMessage.prototype.getMessageId = function() {
    return 22;
};

IdentificationSuccessMessage.prototype.getClassName = function() {
    return 'IdentificationSuccessMessage';
};

module.exports.id = 22;
module.exports.IdentificationSuccessMessage = IdentificationSuccessMessage;