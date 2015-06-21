var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var MountClientData = require('../../../../types/game/mount/mount-client-data.js').class;

var MountDataMessage = module.exports = function() {
    this.mountData = new MountClientData();

    return this;
};

require('util').inherits(MountDataMessage, d2com.NetworkMessage.class);

MountDataMessage.prototype.serialize = function(output) {
    this.serializeAs_MountDataMessage(output);
};

MountDataMessage.prototype.deserialize = function(input) {
    this.deserializeAs_MountDataMessage(input);
};

MountDataMessage.prototype.serializeAs_MountDataMessage = function(param1) {
    this.mountData.serializeAs_MountClientData(param1);
};

MountDataMessage.prototype.deserializeAs_MountDataMessage = function(param1) {
    this.mountData = new MountClientData();
    this.mountData.deserialize(param1);
};

MountDataMessage.prototype.getMessageId = function() {
    return 5973;
};

MountDataMessage.prototype.getClassName = function() {
    return 'MountDataMessage';
};

module.exports.id = 5973;