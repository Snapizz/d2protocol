var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameContextQuitMessage = function() {

};

require('util').inherits(GameContextQuitMessage, d2com.NetworkMessage.class);

GameContextQuitMessage.prototype.serialize = function(output) {
    this.serializeAs_GameContextQuitMessage(output);
};

GameContextQuitMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameContextQuitMessage(input);
};

GameContextQuitMessage.prototype.serializeAs_GameContextQuitMessage = function(param1) {

};

GameContextQuitMessage.prototype.deserializeAs_GameContextQuitMessage = function(param1) {

};

GameContextQuitMessage.prototype.getMessageId = function() {
    return 255;
};

GameContextQuitMessage.prototype.getClassName = function() {
    return 'GameContextQuitMessage';
};

module.exports.id = 255;
module.exports.class = GameContextQuitMessage;
module.exports.getInstance = function() {
    return new GameContextQuitMessage;
};