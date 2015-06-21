var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var BasicPongMessage = function() {
    this.quiet = false;
};

require('util').inherits(BasicPongMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new BasicPongMessage();
};

BasicPongMessage.prototype.serialize = function(output) {
    this.serializeAs_BasicPongMessage(output);
};

BasicPongMessage.prototype.deserialize = function(input) {
    this.deserializeAs_BasicPongMessage(input);
};

BasicPongMessage.prototype.serializeAs_BasicPongMessage = function(param1) {
    param1.writeBoolean(this.quiet);
};

BasicPongMessage.prototype.deserializeAs_BasicPongMessage = function(param1) {
    this.quiet = param1.readBoolean();
};

BasicPongMessage.prototype.getMessageId = function() {
    return 183;
};

BasicPongMessage.prototype.getClassName = function() {
    return 'BasicPongMessage';
};

module.exports.id = 183;
module.exports.BasicPongMessage = BasicPongMessage;