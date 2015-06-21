var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var BasicPingMessage = function() {
    this.quiet = false;
};

require('util').inherits(BasicPingMessage, d2com.NetworkMessage.class);

BasicPingMessage.prototype.serialize = function(output) {
    this.serializeAs_BasicPingMessage(output);
};

BasicPingMessage.prototype.deserialize = function(input) {
    this.deserializeAs_BasicPingMessage(input);
};

BasicPingMessage.prototype.serializeAs_BasicPingMessage = function(param1) {
    param1.writeBoolean(this.quiet);
};

BasicPingMessage.prototype.deserializeAs_BasicPingMessage = function(param1) {
    this.quiet = param1.readBoolean();
};

BasicPingMessage.prototype.getMessageId = function() {
    return 182;
};

BasicPingMessage.prototype.getClassName = function() {
    return 'BasicPingMessage';
};

module.exports.id = 182;
module.exports.class = BasicPingMessage;
module.exports.getInstance = function() {
    return new BasicPingMessage;
};