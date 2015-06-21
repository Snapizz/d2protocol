var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var MountToggleRidingRequestMessage = function() {

};

require('util').inherits(MountToggleRidingRequestMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new MountToggleRidingRequestMessage();
};

MountToggleRidingRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_MountToggleRidingRequestMessage(output);
};

MountToggleRidingRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_MountToggleRidingRequestMessage(input);
};

MountToggleRidingRequestMessage.prototype.serializeAs_MountToggleRidingRequestMessage = function(param1) {

};

MountToggleRidingRequestMessage.prototype.deserializeAs_MountToggleRidingRequestMessage = function(param1) {

};

MountToggleRidingRequestMessage.prototype.getMessageId = function() {
    return 5976;
};

MountToggleRidingRequestMessage.prototype.getClassName = function() {
    return 'MountToggleRidingRequestMessage';
};

module.exports.id = 5976;
module.exports.MountToggleRidingRequestMessage = MountToggleRidingRequestMessage;