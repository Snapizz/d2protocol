var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameFightTurnFinishMessage = function() {

};

require('util').inherits(GameFightTurnFinishMessage, d2com.NetworkMessage.class);

GameFightTurnFinishMessage.prototype.serialize = function(output) {
    this.serializeAs_GameFightTurnFinishMessage(output);
};

GameFightTurnFinishMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameFightTurnFinishMessage(input);
};

GameFightTurnFinishMessage.prototype.serializeAs_GameFightTurnFinishMessage = function(param1) {

};

GameFightTurnFinishMessage.prototype.deserializeAs_GameFightTurnFinishMessage = function(param1) {

};

GameFightTurnFinishMessage.prototype.getMessageId = function() {
    return 718;
};

GameFightTurnFinishMessage.prototype.getClassName = function() {
    return 'GameFightTurnFinishMessage';
};

module.exports.id = 718;
module.exports.class = GameFightTurnFinishMessage;
module.exports.getInstance = function() {
    return new GameFightTurnFinishMessage;
};