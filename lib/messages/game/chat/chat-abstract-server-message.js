var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ChatAbstractServerMessage = module.exports = function() {
    this.channel = 0;
    this.content = "";
    this.timestamp = 0;
    this.fingerprint = "";

    return this;
};

require('util').inherits(ChatAbstractServerMessage, d2com.NetworkMessage.class);

ChatAbstractServerMessage.prototype.serialize = function(output) {
    this.serializeAs_ChatAbstractServerMessage(output);
};

ChatAbstractServerMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ChatAbstractServerMessage(input);
};

ChatAbstractServerMessage.prototype.serializeAs_ChatAbstractServerMessage = function(param1) {
    param1.writeByte(this.channel);
    param1.writeUTF(this.content);
    if (this.timestamp < 0) {
        throw new Error("Forbidden value (" + this.timestamp + ") on element timestamp.");
    } else {
        param1.writeInt(this.timestamp);
        param1.writeUTF(this.fingerprint);
        return;
    }
};

ChatAbstractServerMessage.prototype.deserializeAs_ChatAbstractServerMessage = function(param1) {
    this.channel = param1.readByte();
    if (this.channel < 0) {
        throw new Error("Forbidden value (" + this.channel + ") on element of ChatAbstractServerMessage.channel.");
    } else {
        this.content = param1.readUTF();
        this.timestamp = param1.readInt();
        if (this.timestamp < 0) {
            throw new Error("Forbidden value (" + this.timestamp + ") on element of ChatAbstractServerMessage.timestamp.");
        } else {
            this.fingerprint = param1.readUTF();
            return;
        }
    }
};

ChatAbstractServerMessage.prototype.getMessageId = function() {
    return 880;
};

ChatAbstractServerMessage.prototype.getClassName = function() {
    return 'ChatAbstractServerMessage';
};

module.exports.id = 880;