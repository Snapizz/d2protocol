var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameRolePlayArenaUnregisterMessage = function() {

};

require('util').inherits(GameRolePlayArenaUnregisterMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new GameRolePlayArenaUnregisterMessage();
};

GameRolePlayArenaUnregisterMessage.prototype.serialize = function(output) {
    this.serializeAs_GameRolePlayArenaUnregisterMessage(output);
};

GameRolePlayArenaUnregisterMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameRolePlayArenaUnregisterMessage(input);
};

GameRolePlayArenaUnregisterMessage.prototype.serializeAs_GameRolePlayArenaUnregisterMessage = function(param1) {

};

GameRolePlayArenaUnregisterMessage.prototype.deserializeAs_GameRolePlayArenaUnregisterMessage = function(param1) {

};

GameRolePlayArenaUnregisterMessage.prototype.getMessageId = function() {
    return 6282;
};

GameRolePlayArenaUnregisterMessage.prototype.getClassName = function() {
    return 'GameRolePlayArenaUnregisterMessage';
};

module.exports.id = 6282;
module.exports.GameRolePlayArenaUnregisterMessage = GameRolePlayArenaUnregisterMessage;