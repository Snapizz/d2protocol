var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var MountInformationInPaddockRequestMessage = module.exports = function() {
    this.mapRideId = 0;

    return this;
};

require('util').inherits(MountInformationInPaddockRequestMessage, d2com.NetworkMessage.class);

MountInformationInPaddockRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_MountInformationInPaddockRequestMessage(output);
};

MountInformationInPaddockRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_MountInformationInPaddockRequestMessage(input);
};

MountInformationInPaddockRequestMessage.prototype.serializeAs_MountInformationInPaddockRequestMessage = function(param1) {
    param1.writeVarInt(this.mapRideId);
};

MountInformationInPaddockRequestMessage.prototype.deserializeAs_MountInformationInPaddockRequestMessage = function(param1) {
    this.mapRideId = param1.readVarInt();
};

MountInformationInPaddockRequestMessage.prototype.getMessageId = function() {
    return 5975;
};

MountInformationInPaddockRequestMessage.prototype.getClassName = function() {
    return 'MountInformationInPaddockRequestMessage';
};

module.exports.id = 5975;