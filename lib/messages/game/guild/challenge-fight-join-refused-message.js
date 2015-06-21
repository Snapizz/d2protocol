var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ChallengeFightJoinRefusedMessage = module.exports = function() {
    this.playerId = 0;
    this.reason = 0;

    return this;
};

require('util').inherits(ChallengeFightJoinRefusedMessage, d2com.NetworkMessage.class);

ChallengeFightJoinRefusedMessage.prototype.serialize = function(output) {
    this.serializeAs_ChallengeFightJoinRefusedMessage(output);
};

ChallengeFightJoinRefusedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ChallengeFightJoinRefusedMessage(input);
};

ChallengeFightJoinRefusedMessage.prototype.serializeAs_ChallengeFightJoinRefusedMessage = function(param1) {
    if (this.playerId < 0) {
        throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
    } else {
        param1.writeVarInt(this.playerId);
        param1.writeByte(this.reason);
        return;
    }
};

ChallengeFightJoinRefusedMessage.prototype.deserializeAs_ChallengeFightJoinRefusedMessage = function(param1) {
    this.playerId = param1.readVarUhInt();
    if (this.playerId < 0) {
        throw new Error("Forbidden value (" + this.playerId + ") on element of ChallengeFightJoinRefusedMessage.playerId.");
    } else {
        this.reason = param1.readByte();
        return;
    }
};

ChallengeFightJoinRefusedMessage.prototype.getMessageId = function() {
    return 5908;
};

ChallengeFightJoinRefusedMessage.prototype.getClassName = function() {
    return 'ChallengeFightJoinRefusedMessage';
};

module.exports.id = 5908;