var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameFightRemoveTeamMemberMessage = function() {
    this.fightId = 0;
    this.teamId = 2;
    this.charId = 0;
};

require('util').inherits(GameFightRemoveTeamMemberMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new GameFightRemoveTeamMemberMessage();
};

GameFightRemoveTeamMemberMessage.prototype.serialize = function(output) {
    this.serializeAs_GameFightRemoveTeamMemberMessage(output);
};

GameFightRemoveTeamMemberMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameFightRemoveTeamMemberMessage(input);
};

GameFightRemoveTeamMemberMessage.prototype.serializeAs_GameFightRemoveTeamMemberMessage = function(param1) {
    if (this.fightId < 0) {
        throw new Error("Forbidden value (" + this.fightId + ") on element fightId.");
    } else {
        param1.writeShort(this.fightId);
        param1.writeByte(this.teamId);
        param1.writeInt(this.charId);
        return;
    }
};

GameFightRemoveTeamMemberMessage.prototype.deserializeAs_GameFightRemoveTeamMemberMessage = function(param1) {
    this.fightId = param1.readShort();
    if (this.fightId < 0) {
        throw new Error("Forbidden value (" + this.fightId + ") on element of GameFightRemoveTeamMemberMessage.fightId.");
    } else {
        this.teamId = param1.readByte();
        if (this.teamId < 0) {
            throw new Error("Forbidden value (" + this.teamId + ") on element of GameFightRemoveTeamMemberMessage.teamId.");
        } else {
            this.charId = param1.readInt();
            return;
        }
    }
};

GameFightRemoveTeamMemberMessage.prototype.getMessageId = function() {
    return 711;
};

GameFightRemoveTeamMemberMessage.prototype.getClassName = function() {
    return 'GameFightRemoveTeamMemberMessage';
};

module.exports.id = 711;
module.exports.GameFightRemoveTeamMemberMessage = GameFightRemoveTeamMemberMessage;