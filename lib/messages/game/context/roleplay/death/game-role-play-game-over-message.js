var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameRolePlayGameOverMessage = function() {

};

require('util').inherits(GameRolePlayGameOverMessage, d2com.NetworkMessage.class);

GameRolePlayGameOverMessage.prototype.serialize = function(output) {
    this.serializeAs_GameRolePlayGameOverMessage(output);
};

GameRolePlayGameOverMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameRolePlayGameOverMessage(input);
};

GameRolePlayGameOverMessage.prototype.serializeAs_GameRolePlayGameOverMessage = function(param1) {

};

GameRolePlayGameOverMessage.prototype.deserializeAs_GameRolePlayGameOverMessage = function(param1) {

};

GameRolePlayGameOverMessage.prototype.getMessageId = function() {
    return 746;
};

GameRolePlayGameOverMessage.prototype.getClassName = function() {
    return 'GameRolePlayGameOverMessage';
};

module.exports.id = 746;
module.exports.class = GameRolePlayGameOverMessage;
module.exports.getInstance = function() {
    return new GameRolePlayGameOverMessage;
};