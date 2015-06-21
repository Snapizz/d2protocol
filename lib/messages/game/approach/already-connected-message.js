var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var AlreadyConnectedMessage = function() {

};

require('util').inherits(AlreadyConnectedMessage, d2com.NetworkMessage.class);

AlreadyConnectedMessage.prototype.serialize = function(output) {
    this.serializeAs_AlreadyConnectedMessage(output);
};

AlreadyConnectedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_AlreadyConnectedMessage(input);
};

AlreadyConnectedMessage.prototype.serializeAs_AlreadyConnectedMessage = function(param1) {

};

AlreadyConnectedMessage.prototype.deserializeAs_AlreadyConnectedMessage = function(param1) {

};

AlreadyConnectedMessage.prototype.getMessageId = function() {
    return 109;
};

AlreadyConnectedMessage.prototype.getClassName = function() {
    return 'AlreadyConnectedMessage';
};

module.exports.id = 109;
module.exports.class = AlreadyConnectedMessage;
module.exports.getInstance = function() {
    return new AlreadyConnectedMessage;
};