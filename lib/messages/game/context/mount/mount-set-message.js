var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var MountClientData = require('../../../../types/game/mount/mount-client-data.js').class;

var MountSetMessage = function() {
    this.mountData = new MountClientData();
};

require('util').inherits(MountSetMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new MountSetMessage();
};

MountSetMessage.prototype.serialize = function(output) {
    this.serializeAs_MountSetMessage(output);
};

MountSetMessage.prototype.deserialize = function(input) {
    this.deserializeAs_MountSetMessage(input);
};

MountSetMessage.prototype.serializeAs_MountSetMessage = function(param1) {
    this.mountData.serializeAs_MountClientData(param1);
};

MountSetMessage.prototype.deserializeAs_MountSetMessage = function(param1) {
    this.mountData = new MountClientData();
    this.mountData.deserialize(param1);
};

MountSetMessage.prototype.getMessageId = function() {
    return 5968;
};

MountSetMessage.prototype.getClassName = function() {
    return 'MountSetMessage';
};

module.exports.id = 5968;
module.exports.MountSetMessage = MountSetMessage;