var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var BasicWhoAmIRequestMessage = function() {
    this.verbose = false;
};

require('util').inherits(BasicWhoAmIRequestMessage, d2com.NetworkMessage.class);

BasicWhoAmIRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_BasicWhoAmIRequestMessage(output);
};

BasicWhoAmIRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_BasicWhoAmIRequestMessage(input);
};

BasicWhoAmIRequestMessage.prototype.serializeAs_BasicWhoAmIRequestMessage = function(param1) {
    param1.writeBoolean(this.verbose);
};

BasicWhoAmIRequestMessage.prototype.deserializeAs_BasicWhoAmIRequestMessage = function(param1) {
    this.verbose = param1.readBoolean();
};

BasicWhoAmIRequestMessage.prototype.getMessageId = function() {
    return 5664;
};

BasicWhoAmIRequestMessage.prototype.getClassName = function() {
    return 'BasicWhoAmIRequestMessage';
};

module.exports.id = 5664;
module.exports.class = BasicWhoAmIRequestMessage;
module.exports.getInstance = function() {
    return new BasicWhoAmIRequestMessage;
};