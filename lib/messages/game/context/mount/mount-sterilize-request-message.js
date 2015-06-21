var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var MountSterilizeRequestMessage = function() {

};

require('util').inherits(MountSterilizeRequestMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new MountSterilizeRequestMessage();
};

MountSterilizeRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_MountSterilizeRequestMessage(output);
};

MountSterilizeRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_MountSterilizeRequestMessage(input);
};

MountSterilizeRequestMessage.prototype.serializeAs_MountSterilizeRequestMessage = function(param1) {

};

MountSterilizeRequestMessage.prototype.deserializeAs_MountSterilizeRequestMessage = function(param1) {

};

MountSterilizeRequestMessage.prototype.getMessageId = function() {
    return 5962;
};

MountSterilizeRequestMessage.prototype.getClassName = function() {
    return 'MountSterilizeRequestMessage';
};

module.exports.id = 5962;
module.exports.MountSterilizeRequestMessage = MountSterilizeRequestMessage;