var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameActionFightVanishMessage = module.exports = function() {
    this.targetId = 0;

    return this;
};

require('util').inherits(GameActionFightVanishMessage, require('../abstract-game-action-message.js'));

GameActionFightVanishMessage.prototype.serialize = function(output) {
    this.serializeAs_GameActionFightVanishMessage(output);
};

GameActionFightVanishMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameActionFightVanishMessage(input);
};

GameActionFightVanishMessage.prototype.serializeAs_GameActionFightVanishMessage = function(param1) {
    this.serializeAs_AbstractGameActionMessage(param1);
    param1.writeInt(this.targetId);
};

GameActionFightVanishMessage.prototype.deserializeAs_GameActionFightVanishMessage = function(param1) {
    this.deserializeAs_AbstractGameActionMessage(param1);
    this.targetId = param1.readInt();
};

GameActionFightVanishMessage.prototype.getMessageId = function() {
    return 6217;
};

GameActionFightVanishMessage.prototype.getClassName = function() {
    return 'GameActionFightVanishMessage';
};

module.exports.id = 6217;