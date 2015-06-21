var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameContextCreateRequestMessage = function() {

};

require('util').inherits(GameContextCreateRequestMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new GameContextCreateRequestMessage();
};

GameContextCreateRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_GameContextCreateRequestMessage(output);
};

GameContextCreateRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameContextCreateRequestMessage(input);
};

GameContextCreateRequestMessage.prototype.serializeAs_GameContextCreateRequestMessage = function(param1) {

};

GameContextCreateRequestMessage.prototype.deserializeAs_GameContextCreateRequestMessage = function(param1) {

};

GameContextCreateRequestMessage.prototype.getMessageId = function() {
    return 250;
};

GameContextCreateRequestMessage.prototype.getClassName = function() {
    return 'GameContextCreateRequestMessage';
};

module.exports.id = 250;
module.exports.GameContextCreateRequestMessage = GameContextCreateRequestMessage;