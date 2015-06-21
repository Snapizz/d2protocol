var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var BasicWhoAmIRequestMessage = module.exports = function() {
    this.verbose = false;

    return this;
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