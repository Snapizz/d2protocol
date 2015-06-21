var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ChallengeTargetsListRequestMessage = module.exports = function() {
    this.challengeId = 0;

    return this;
};

require('util').inherits(ChallengeTargetsListRequestMessage, d2com.NetworkMessage.class);

ChallengeTargetsListRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_ChallengeTargetsListRequestMessage(output);
};

ChallengeTargetsListRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ChallengeTargetsListRequestMessage(input);
};

ChallengeTargetsListRequestMessage.prototype.serializeAs_ChallengeTargetsListRequestMessage = function(param1) {
    if (this.challengeId < 0) {
        throw new Error("Forbidden value (" + this.challengeId + ") on element challengeId.");
    } else {
        param1.writeVarShort(this.challengeId);
        return;
    }
};

ChallengeTargetsListRequestMessage.prototype.deserializeAs_ChallengeTargetsListRequestMessage = function(param1) {
    this.challengeId = param1.readVarUhShort();
    if (this.challengeId < 0) {
        throw new Error("Forbidden value (" + this.challengeId + ") on element of ChallengeTargetsListRequestMessage.challengeId.");
    } else {
        return;
    }
};

ChallengeTargetsListRequestMessage.prototype.getMessageId = function() {
    return 5614;
};

ChallengeTargetsListRequestMessage.prototype.getClassName = function() {
    return 'ChallengeTargetsListRequestMessage';
};

module.exports.id = 5614;