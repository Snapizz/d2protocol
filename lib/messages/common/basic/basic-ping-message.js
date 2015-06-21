var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var BasicPingMessage = module.exports = function() {
    this.quiet = false;

    return this;
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