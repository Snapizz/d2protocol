var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameRolePlayArenaUnregisterMessage = function() {

};

require('util').inherits(GameRolePlayArenaUnregisterMessage, d2com.NetworkMessage.class);

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
module.exports.class = GameRolePlayArenaUnregisterMessage;
module.exports.getInstance = function() {
    return new GameRolePlayArenaUnregisterMessage;
};