var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var MountReleaseRequestMessage = module.exports = function() {


    return this;
};

require('util').inherits(MountReleaseRequestMessage, d2com.NetworkMessage.class);

MountReleaseRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_MountReleaseRequestMessage(output);
};

MountReleaseRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_MountReleaseRequestMessage(input);
};

MountReleaseRequestMessage.prototype.serializeAs_MountReleaseRequestMessage = function(param1) {

};

MountReleaseRequestMessage.prototype.deserializeAs_MountReleaseRequestMessage = function(param1) {

};

MountReleaseRequestMessage.prototype.getMessageId = function() {
    return 5980;
};

MountReleaseRequestMessage.prototype.getClassName = function() {
    return 'MountReleaseRequestMessage';
};

module.exports.id = 5980;