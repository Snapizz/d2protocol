var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ChallengeTargetUpdateMessage = function() {
    this.challengeId = 0;
    this.targetId = 0;
};

require('util').inherits(ChallengeTargetUpdateMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new ChallengeTargetUpdateMessage();
};

ChallengeTargetUpdateMessage.prototype.serialize = function(output) {
    this.serializeAs_ChallengeTargetUpdateMessage(output);
};

ChallengeTargetUpdateMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ChallengeTargetUpdateMessage(input);
};

ChallengeTargetUpdateMessage.prototype.serializeAs_ChallengeTargetUpdateMessage = function(param1) {
    if (this.challengeId < 0) {
        throw new Error("Forbidden value (" + this.challengeId + ") on element challengeId.");
    } else {
        param1.writeVarShort(this.challengeId);
        param1.writeInt(this.targetId);
        return;
    }
};

ChallengeTargetUpdateMessage.prototype.deserializeAs_ChallengeTargetUpdateMessage = function(param1) {
    this.challengeId = param1.readVarUhShort();
    if (this.challengeId < 0) {
        throw new Error("Forbidden value (" + this.challengeId + ") on element of ChallengeTargetUpdateMessage.challengeId.");
    } else {
        this.targetId = param1.readInt();
        return;
    }
};

ChallengeTargetUpdateMessage.prototype.getMessageId = function() {
    return 6123;
};

ChallengeTargetUpdateMessage.prototype.getClassName = function() {
    return 'ChallengeTargetUpdateMessage';
};

module.exports.id = 6123;
module.exports.ChallengeTargetUpdateMessage = ChallengeTargetUpdateMessage;