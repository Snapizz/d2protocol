var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameFightStartMessage = module.exports = function() {


    return this;
};

require('util').inherits(GameFightStartMessage, d2com.NetworkMessage.class);

GameFightStartMessage.prototype.serialize = function(output) {
    this.serializeAs_GameFightStartMessage(output);
};

GameFightStartMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameFightStartMessage(input);
};

GameFightStartMessage.prototype.serializeAs_GameFightStartMessage = function(param1) {

};

GameFightStartMessage.prototype.deserializeAs_GameFightStartMessage = function(param1) {

};

GameFightStartMessage.prototype.getMessageId = function() {
    return 712;
};

GameFightStartMessage.prototype.getClassName = function() {
    return 'GameFightStartMessage';
};

module.exports.id = 712;