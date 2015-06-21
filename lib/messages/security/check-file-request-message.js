var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var CheckFileRequestMessage = module.exports = function() {
    this.filename = "";
    this.type = 0;

    return this;
};

require('util').inherits(CheckFileRequestMessage, d2com.NetworkMessage.class);

CheckFileRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_CheckFileRequestMessage(output);
};

CheckFileRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_CheckFileRequestMessage(input);
};

CheckFileRequestMessage.prototype.serializeAs_CheckFileRequestMessage = function(param1) {
    param1.writeUTF(this.filename);
    param1.writeByte(this.type);
};

CheckFileRequestMessage.prototype.deserializeAs_CheckFileRequestMessage = function(param1) {
    this.filename = param1.readUTF();
    this.type = param1.readByte();
    if (this.type < 0) {
        throw new Error("Forbidden value (" + this.type + ") on element of CheckFileRequestMessage.type.");
    } else {
        return;
    }
};

CheckFileRequestMessage.prototype.getMessageId = function() {
    return 6154;
};

CheckFileRequestMessage.prototype.getClassName = function() {
    return 'CheckFileRequestMessage';
};

module.exports.id = 6154;