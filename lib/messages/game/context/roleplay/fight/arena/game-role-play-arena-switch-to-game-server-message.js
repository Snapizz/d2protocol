var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameRolePlayArenaSwitchToGameServerMessage = function() {

};

require('util').inherits(GameRolePlayArenaSwitchToGameServerMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new GameRolePlayArenaSwitchToGameServerMessage();
};

GameRolePlayArenaSwitchToGameServerMessage.prototype.serialize = function(output) {
    this.serializeAs_GameRolePlayArenaSwitchToGameServerMessage(output);
};

GameRolePlayArenaSwitchToGameServerMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameRolePlayArenaSwitchToGameServerMessage(input);
};

GameRolePlayArenaSwitchToGameServerMessage.prototype.serializeAs_GameRolePlayArenaSwitchToGameServerMessage = function(param1) {

};

GameRolePlayArenaSwitchToGameServerMessage.prototype.deserializeAs_GameRolePlayArenaSwitchToGameServerMessage = function(param1) {

};

GameRolePlayArenaSwitchToGameServerMessage.prototype.getMessageId = function() {
    return 6574;
};

GameRolePlayArenaSwitchToGameServerMessage.prototype.getClassName = function() {
    return 'GameRolePlayArenaSwitchToGameServerMessage';
};

module.exports.id = 6574;
module.exports.GameRolePlayArenaSwitchToGameServerMessage = GameRolePlayArenaSwitchToGameServerMessage;