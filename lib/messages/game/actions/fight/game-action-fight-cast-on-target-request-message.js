var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameActionFightCastOnTargetRequestMessage = module.exports = function() {
    this.spellId = 0;
    this.targetId = 0;

    return this;
};

require('util').inherits(GameActionFightCastOnTargetRequestMessage, d2com.NetworkMessage.class);

GameActionFightCastOnTargetRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_GameActionFightCastOnTargetRequestMessage(output);
};

GameActionFightCastOnTargetRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameActionFightCastOnTargetRequestMessage(input);
};

GameActionFightCastOnTargetRequestMessage.prototype.serializeAs_GameActionFightCastOnTargetRequestMessage = function(param1) {
    if (this.spellId < 0) {
        throw new Error("Forbidden value (" + this.spellId + ") on element spellId.");
    } else {
        param1.writeVarShort(this.spellId);
        param1.writeInt(this.targetId);
        return;
    }
};

GameActionFightCastOnTargetRequestMessage.prototype.deserializeAs_GameActionFightCastOnTargetRequestMessage = function(param1) {
    this.spellId = param1.readVarUhShort();
    if (this.spellId < 0) {
        throw new Error("Forbidden value (" + this.spellId + ") on element of GameActionFightCastOnTargetRequestMessage.spellId.");
    } else {
        this.targetId = param1.readInt();
        return;
    }
};

GameActionFightCastOnTargetRequestMessage.prototype.getMessageId = function() {
    return 6330;
};

GameActionFightCastOnTargetRequestMessage.prototype.getClassName = function() {
    return 'GameActionFightCastOnTargetRequestMessage';
};

module.exports.id = 6330;