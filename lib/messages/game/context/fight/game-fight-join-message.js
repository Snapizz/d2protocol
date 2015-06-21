var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameFightJoinMessage = function() {
    this.canBeCancelled = false;
    this.canSayReady = false;
    this.isFightStarted = false;
    this.timeMaxBeforeFightStart = 0;
    this.fightType = 0;
};

require('util').inherits(GameFightJoinMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new GameFightJoinMessage();
};

GameFightJoinMessage.prototype.serialize = function(output) {
    this.serializeAs_GameFightJoinMessage(output);
};

GameFightJoinMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameFightJoinMessage(input);
};

GameFightJoinMessage.prototype.serializeAs_GameFightJoinMessage = function(param1) {
    var _loc2_ = 0;
    _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.canBeCancelled);
    _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.canSayReady);
    _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 2, this.isFightStarted);
    param1.writeByte(_loc2_);
    if (this.timeMaxBeforeFightStart < 0) {
        throw new Error("Forbidden value (" + this.timeMaxBeforeFightStart + ") on element timeMaxBeforeFightStart.");
    } else {
        param1.writeShort(this.timeMaxBeforeFightStart);
        param1.writeByte(this.fightType);
        return;
    }
};

GameFightJoinMessage.prototype.deserializeAs_GameFightJoinMessage = function(param1) {
    var _loc2_ = param1.readByte();
    this.canBeCancelled = BooleanByteWrapper.getFlag(_loc2_, 0);
    this.canSayReady = BooleanByteWrapper.getFlag(_loc2_, 1);
    this.isFightStarted = BooleanByteWrapper.getFlag(_loc2_, 2);
    this.timeMaxBeforeFightStart = param1.readShort();
    if (this.timeMaxBeforeFightStart < 0) {
        throw new Error("Forbidden value (" + this.timeMaxBeforeFightStart + ") on element of GameFightJoinMessage.timeMaxBeforeFightStart.");
    } else {
        this.fightType = param1.readByte();
        if (this.fightType < 0) {
            throw new Error("Forbidden value (" + this.fightType + ") on element of GameFightJoinMessage.fightType.");
        } else {
            return;
        }
    }
};

GameFightJoinMessage.prototype.getMessageId = function() {
    return 702;
};

GameFightJoinMessage.prototype.getClassName = function() {
    return 'GameFightJoinMessage';
};

module.exports.id = 702;
module.exports.GameFightJoinMessage = GameFightJoinMessage;