var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameContextDestroyMessage = module.exports = function() {


    return this;
};

require('util').inherits(GameContextDestroyMessage, d2com.NetworkMessage.class);

GameContextDestroyMessage.prototype.serialize = function(output) {
    this.serializeAs_GameContextDestroyMessage(output);
};

GameContextDestroyMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameContextDestroyMessage(input);
};

GameContextDestroyMessage.prototype.serializeAs_GameContextDestroyMessage = function(param1) {

};

GameContextDestroyMessage.prototype.deserializeAs_GameContextDestroyMessage = function(param1) {

};

GameContextDestroyMessage.prototype.getMessageId = function() {
    return 201;
};

GameContextDestroyMessage.prototype.getClassName = function() {
    return 'GameContextDestroyMessage';
};

module.exports.id = 201;