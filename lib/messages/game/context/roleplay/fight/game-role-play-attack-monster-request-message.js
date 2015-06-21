var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameRolePlayAttackMonsterRequestMessage = function() {
    this.monsterGroupId = 0;
};

require('util').inherits(GameRolePlayAttackMonsterRequestMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new GameRolePlayAttackMonsterRequestMessage();
};

GameRolePlayAttackMonsterRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_GameRolePlayAttackMonsterRequestMessage(output);
};

GameRolePlayAttackMonsterRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameRolePlayAttackMonsterRequestMessage(input);
};

GameRolePlayAttackMonsterRequestMessage.prototype.serializeAs_GameRolePlayAttackMonsterRequestMessage = function(param1) {
    param1.writeInt(this.monsterGroupId);
};

GameRolePlayAttackMonsterRequestMessage.prototype.deserializeAs_GameRolePlayAttackMonsterRequestMessage = function(param1) {
    this.monsterGroupId = param1.readInt();
};

GameRolePlayAttackMonsterRequestMessage.prototype.getMessageId = function() {
    return 6191;
};

GameRolePlayAttackMonsterRequestMessage.prototype.getClassName = function() {
    return 'GameRolePlayAttackMonsterRequestMessage';
};

module.exports.id = 6191;
module.exports.GameRolePlayAttackMonsterRequestMessage = GameRolePlayAttackMonsterRequestMessage;