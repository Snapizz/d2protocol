var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var MountRenamedMessage = function() {
    this.mountId = 0;
    this.name = "";
};

require('util').inherits(MountRenamedMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new MountRenamedMessage();
};

MountRenamedMessage.prototype.serialize = function(output) {
    this.serializeAs_MountRenamedMessage(output);
};

MountRenamedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_MountRenamedMessage(input);
};

MountRenamedMessage.prototype.serializeAs_MountRenamedMessage = function(param1) {
    param1.writeVarInt(this.mountId);
    param1.writeUTF(this.name);
};

MountRenamedMessage.prototype.deserializeAs_MountRenamedMessage = function(param1) {
    this.mountId = param1.readVarInt();
    this.name = param1.readUTF();
};

MountRenamedMessage.prototype.getMessageId = function() {
    return 5983;
};

MountRenamedMessage.prototype.getClassName = function() {
    return 'MountRenamedMessage';
};

module.exports.id = 5983;
module.exports.MountRenamedMessage = MountRenamedMessage;