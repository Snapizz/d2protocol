var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameContextCreateErrorMessage = module.exports = function() {


    return this;
};

require('util').inherits(GameContextCreateErrorMessage, d2com.NetworkMessage.class);

GameContextCreateErrorMessage.prototype.serialize = function(output) {
    this.serializeAs_GameContextCreateErrorMessage(output);
};

GameContextCreateErrorMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameContextCreateErrorMessage(input);
};

GameContextCreateErrorMessage.prototype.serializeAs_GameContextCreateErrorMessage = function(param1) {

};

GameContextCreateErrorMessage.prototype.deserializeAs_GameContextCreateErrorMessage = function(param1) {

};

GameContextCreateErrorMessage.prototype.getMessageId = function() {
    return 6024;
};

GameContextCreateErrorMessage.prototype.getClassName = function() {
    return 'GameContextCreateErrorMessage';
};

module.exports.id = 6024;