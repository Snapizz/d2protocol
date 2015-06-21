var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var MountUnSetMessage = function() {

};

require('util').inherits(MountUnSetMessage, d2com.NetworkMessage.class);

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
module.exports.class = MountUnSetMessage;
module.exports.getInstance = function() {
    return new MountUnSetMessage;
};