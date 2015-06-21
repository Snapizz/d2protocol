var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var HelloGameMessage = module.exports = function() {


    return this;
};

require('util').inherits(HelloGameMessage, d2com.NetworkMessage.class);

HelloGameMessage.prototype.serialize = function(output) {
    this.serializeAs_HelloGameMessage(output);
};

HelloGameMessage.prototype.deserialize = function(input) {
    this.deserializeAs_HelloGameMessage(input);
};

HelloGameMessage.prototype.serializeAs_HelloGameMessage = function(param1) {

};

HelloGameMessage.prototype.deserializeAs_HelloGameMessage = function(param1) {

};

HelloGameMessage.prototype.getMessageId = function() {
    return 101;
};

HelloGameMessage.prototype.getClassName = function() {
    return 'HelloGameMessage';
};

module.exports.id = 101;