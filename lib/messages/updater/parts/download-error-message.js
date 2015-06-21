var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var DownloadErrorMessage = module.exports = function() {
    this.errorId = 0;
    this.message = "";
    this.helpUrl = "";

    return this;
};

require('util').inherits(DownloadErrorMessage, d2com.NetworkMessage.class);

DownloadErrorMessage.prototype.serialize = function(output) {
    this.serializeAs_DownloadErrorMessage(output);
};

DownloadErrorMessage.prototype.deserialize = function(input) {
    this.deserializeAs_DownloadErrorMessage(input);
};

DownloadErrorMessage.prototype.serializeAs_DownloadErrorMessage = function(param1) {
    param1.writeByte(this.errorId);
    param1.writeUTF(this.message);
    param1.writeUTF(this.helpUrl);
};

DownloadErrorMessage.prototype.deserializeAs_DownloadErrorMessage = function(param1) {
    this.errorId = param1.readByte();
    if (this.errorId < 0) {
        throw new Error("Forbidden value (" + this.errorId + ") on element of DownloadErrorMessage.errorId.");
    } else {
        this.message = param1.readUTF();
        this.helpUrl = param1.readUTF();
        return;
    }
};

DownloadErrorMessage.prototype.getMessageId = function() {
    return 1513;
};

DownloadErrorMessage.prototype.getClassName = function() {
    return 'DownloadErrorMessage';
};

module.exports.id = 1513;