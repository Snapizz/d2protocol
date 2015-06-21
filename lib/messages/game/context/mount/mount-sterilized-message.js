var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var MountSterilizedMessage = function() {
    this.mountId = 0;
};

require('util').inherits(MountSterilizedMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new MountSterilizedMessage();
};

MountSterilizedMessage.prototype.serialize = function(output) {
    this.serializeAs_MountSterilizedMessage(output);
};

MountSterilizedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_MountSterilizedMessage(input);
};

MountSterilizedMessage.prototype.serializeAs_MountSterilizedMessage = function(param1) {
    param1.writeVarInt(this.mountId);
};

MountSterilizedMessage.prototype.deserializeAs_MountSterilizedMessage = function(param1) {
    this.mountId = param1.readVarInt();
};

MountSterilizedMessage.prototype.getMessageId = function() {
    return 5977;
};

MountSterilizedMessage.prototype.getClassName = function() {
    return 'MountSterilizedMessage';
};

module.exports.id = 5977;
module.exports.MountSterilizedMessage = MountSterilizedMessage;