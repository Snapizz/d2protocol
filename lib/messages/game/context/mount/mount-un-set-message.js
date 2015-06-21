var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var MountUnSetMessage = function() {

};

require('util').inherits(MountUnSetMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new MountUnSetMessage();
};

MountUnSetMessage.prototype.serialize = function(output) {
    this.serializeAs_MountUnSetMessage(output);
};

MountUnSetMessage.prototype.deserialize = function(input) {
    this.deserializeAs_MountUnSetMessage(input);
};

MountUnSetMessage.prototype.serializeAs_MountUnSetMessage = function(param1) {

};

MountUnSetMessage.prototype.deserializeAs_MountUnSetMessage = function(param1) {

};

MountUnSetMessage.prototype.getMessageId = function() {
    return 5982;
};

MountUnSetMessage.prototype.getClassName = function() {
    return 'MountUnSetMessage';
};

module.exports.id = 5982;
module.exports.MountUnSetMessage = MountUnSetMessage;