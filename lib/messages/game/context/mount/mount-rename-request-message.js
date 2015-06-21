var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var MountRenameRequestMessage = function() {
    this.name = "";
    this.mountId = 0;
};

require('util').inherits(MountRenameRequestMessage, d2com.NetworkMessage.class);

MountRenameRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_MountRenameRequestMessage(output);
};

MountRenameRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_MountRenameRequestMessage(input);
};

MountRenameRequestMessage.prototype.serializeAs_MountRenameRequestMessage = function(param1) {
    param1.writeUTF(this.name);
    param1.writeVarInt(this.mountId);
};

MountRenameRequestMessage.prototype.deserializeAs_MountRenameRequestMessage = function(param1) {
    this.name = param1.readUTF();
    this.mountId = param1.readVarInt();
};

MountRenameRequestMessage.prototype.getMessageId = function() {
    return 5987;
};

MountRenameRequestMessage.prototype.getClassName = function() {
    return 'MountRenameRequestMessage';
};

module.exports.id = 5987;
module.exports.class = MountRenameRequestMessage;
module.exports.getInstance = function() {
    return new MountRenameRequestMessage;
};