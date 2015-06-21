var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameRolePlayFreeSoulRequestMessage = module.exports = function() {


    return this;
};

require('util').inherits(GameRolePlayFreeSoulRequestMessage, d2com.NetworkMessage.class);

GameRolePlayFreeSoulRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_GameRolePlayFreeSoulRequestMessage(output);
};

GameRolePlayFreeSoulRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameRolePlayFreeSoulRequestMessage(input);
};

GameRolePlayFreeSoulRequestMessage.prototype.serializeAs_GameRolePlayFreeSoulRequestMessage = function(param1) {

};

GameRolePlayFreeSoulRequestMessage.prototype.deserializeAs_GameRolePlayFreeSoulRequestMessage = function(param1) {

};

GameRolePlayFreeSoulRequestMessage.prototype.getMessageId = function() {
    return 745;
};

GameRolePlayFreeSoulRequestMessage.prototype.getClassName = function() {
    return 'GameRolePlayFreeSoulRequestMessage';
};

module.exports.id = 745;