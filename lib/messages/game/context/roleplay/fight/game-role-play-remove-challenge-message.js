var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameRolePlayRemoveChallengeMessage = function() {
    this.fightId = 0;
};

require('util').inherits(GameRolePlayRemoveChallengeMessage, d2com.NetworkMessage.class);

GameRolePlayRemoveChallengeMessage.prototype.serialize = function(output) {
    this.serializeAs_GameRolePlayRemoveChallengeMessage(output);
};

GameRolePlayRemoveChallengeMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameRolePlayRemoveChallengeMessage(input);
};

GameRolePlayRemoveChallengeMessage.prototype.serializeAs_GameRolePlayRemoveChallengeMessage = function(param1) {
    param1.writeInt(this.fightId);
};

GameRolePlayRemoveChallengeMessage.prototype.deserializeAs_GameRolePlayRemoveChallengeMessage = function(param1) {
    this.fightId = param1.readInt();
};

GameRolePlayRemoveChallengeMessage.prototype.getMessageId = function() {
    return 300;
};

GameRolePlayRemoveChallengeMessage.prototype.getClassName = function() {
    return 'GameRolePlayRemoveChallengeMessage';
};

module.exports.id = 300;
module.exports.class = GameRolePlayRemoveChallengeMessage;
module.exports.getInstance = function() {
    return new GameRolePlayRemoveChallengeMessage;
};