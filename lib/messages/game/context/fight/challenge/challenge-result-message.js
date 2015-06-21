var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ChallengeResultMessage = module.exports = function() {
    this.challengeId = 0;
    this.success = false;

    return this;
};

require('util').inherits(ChallengeResultMessage, d2com.NetworkMessage.class);

ChallengeResultMessage.prototype.serialize = function(output) {
    this.serializeAs_ChallengeResultMessage(output);
};

ChallengeResultMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ChallengeResultMessage(input);
};

ChallengeResultMessage.prototype.serializeAs_ChallengeResultMessage = function(param1) {
    if (this.challengeId < 0) {
        throw new Error("Forbidden value (" + this.challengeId + ") on element challengeId.");
    } else {
        param1.writeVarShort(this.challengeId);
        param1.writeBoolean(this.success);
        return;
    }
};

ChallengeResultMessage.prototype.deserializeAs_ChallengeResultMessage = function(param1) {
    this.challengeId = param1.readVarUhShort();
    if (this.challengeId < 0) {
        throw new Error("Forbidden value (" + this.challengeId + ") on element of ChallengeResultMessage.challengeId.");
    } else {
        this.success = param1.readBoolean();
        return;
    }
};

ChallengeResultMessage.prototype.getMessageId = function() {
    return 6019;
};

ChallengeResultMessage.prototype.getClassName = function() {
    return 'ChallengeResultMessage';
};

module.exports.id = 6019;