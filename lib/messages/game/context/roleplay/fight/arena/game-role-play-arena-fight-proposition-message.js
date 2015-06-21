var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameRolePlayArenaFightPropositionMessage = function() {
    this.fightId = 0;
    this.alliesId = [];
    this.duration = 0;
};

require('util').inherits(GameRolePlayArenaFightPropositionMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new GameRolePlayArenaFightPropositionMessage();
};

GameRolePlayArenaFightPropositionMessage.prototype.serialize = function(output) {
    this.serializeAs_GameRolePlayArenaFightPropositionMessage(output);
};

GameRolePlayArenaFightPropositionMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameRolePlayArenaFightPropositionMessage(input);
};

GameRolePlayArenaFightPropositionMessage.prototype.serializeAs_GameRolePlayArenaFightPropositionMessage = function(param1) {
    if (this.fightId < 0) {
        throw new Error("Forbidden value (" + this.fightId + ") on element fightId.");
    } else {
        param1.writeInt(this.fightId);
        param1.writeShort(this.alliesId.length);
        var _loc2_ = 0;
        while (_loc2_ < this.alliesId.length) {
            param1.writeInt(this.alliesId[_loc2_]);
            _loc2_++;
        }
        if (this.duration < 0) {
            throw new Error("Forbidden value (" + this.duration + ") on element duration.");
        } else {
            param1.writeVarShort(this.duration);
            return;
        }
    }
};

GameRolePlayArenaFightPropositionMessage.prototype.deserializeAs_GameRolePlayArenaFightPropositionMessage = function(param1) {
    var _loc4_ = 0;
    this.fightId = param1.readInt();
    if (this.fightId < 0) {
        throw new Error("Forbidden value (" + this.fightId + ") on element of GameRolePlayArenaFightPropositionMessage.fightId.");
    } else {
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readInt();
            this.alliesId.push(_loc4_);
            _loc3_++;
        }
        this.duration = param1.readVarUhShort();
        if (this.duration < 0) {
            throw new Error("Forbidden value (" + this.duration + ") on element of GameRolePlayArenaFightPropositionMessage.duration.");
        } else {
            return;
        }
    }
};

GameRolePlayArenaFightPropositionMessage.prototype.getMessageId = function() {
    return 6276;
};

GameRolePlayArenaFightPropositionMessage.prototype.getClassName = function() {
    return 'GameRolePlayArenaFightPropositionMessage';
};

module.exports.id = 6276;
module.exports.GameRolePlayArenaFightPropositionMessage = GameRolePlayArenaFightPropositionMessage;