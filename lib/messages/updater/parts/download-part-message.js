var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var DownloadPartMessage = module.exports = function() {
    this.id = "";

    return this;
};

require('util').inherits(DownloadPartMessage, d2com.NetworkMessage.class);

DownloadPartMessage.prototype.serialize = function(output) {
    this.serializeAs_DownloadPartMessage(output);
};

DownloadPartMessage.prototype.deserialize = function(input) {
    this.deserializeAs_DownloadPartMessage(input);
};

DownloadPartMessage.prototype.serializeAs_DownloadPartMessage = function(param1) {
    param1.writeUTF(this.id);
};

DownloadPartMessage.prototype.deserializeAs_DownloadPartMessage = function(param1) {
    this.id = param1.readUTF();
};

DownloadPartMessage.prototype.getMessageId = function() {
    return 1503;
};

DownloadPartMessage.prototype.getClassName = function() {
    return 'DownloadPartMessage';
};

module.exports.id = 1503;