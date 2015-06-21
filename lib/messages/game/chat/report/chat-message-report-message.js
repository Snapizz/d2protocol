var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ChatMessageReportMessage = module.exports = function() {
    this.senderName = "";
    this.content = "";
    this.timestamp = 0;
    this.channel = 0;
    this.fingerprint = "";
    this.reason = 0;

    return this;
};

require('util').inherits(ChatMessageReportMessage, d2com.NetworkMessage.class);

ChatMessageReportMessage.prototype.serialize = function(output) {
    this.serializeAs_ChatMessageReportMessage(output);
};

ChatMessageReportMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ChatMessageReportMessage(input);
};

ChatMessageReportMessage.prototype.serializeAs_ChatMessageReportMessage = function(param1) {
    param1.writeUTF(this.senderName);
    param1.writeUTF(this.content);
    if (this.timestamp < 0) {
        throw new Error("Forbidden value (" + this.timestamp + ") on element timestamp.");
    } else {
        param1.writeInt(this.timestamp);
        param1.writeByte(this.channel);
        param1.writeUTF(this.fingerprint);
        if (this.reason < 0) {
            throw new Error("Forbidden value (" + this.reason + ") on element reason.");
        } else {
            param1.writeByte(this.reason);
            return;
        }
    }
};

ChatMessageReportMessage.prototype.deserializeAs_ChatMessageReportMessage = function(param1) {
    this.senderName = param1.readUTF();
    this.content = param1.readUTF();
    this.timestamp = param1.readInt();
    if (this.timestamp < 0) {
        throw new Error("Forbidden value (" + this.timestamp + ") on element of ChatMessageReportMessage.timestamp.");
    } else {
        this.channel = param1.readByte();
        if (this.channel < 0) {
            throw new Error("Forbidden value (" + this.channel + ") on element of ChatMessageReportMessage.channel.");
        } else {
            this.fingerprint = param1.readUTF();
            this.reason = param1.readByte();
            if (this.reason < 0) {
                throw new Error("Forbidden value (" + this.reason + ") on element of ChatMessageReportMessage.reason.");
            } else {
                return;
            }
        }
    }
};

ChatMessageReportMessage.prototype.getMessageId = function() {
    return 821;
};

ChatMessageReportMessage.prototype.getClassName = function() {
    return 'ChatMessageReportMessage';
};

module.exports.id = 821;