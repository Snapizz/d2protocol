var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var DownloadGetCurrentSpeedRequestMessage = function() {

};

require('util').inherits(DownloadGetCurrentSpeedRequestMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new DownloadGetCurrentSpeedRequestMessage();
};

DownloadGetCurrentSpeedRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_DownloadGetCurrentSpeedRequestMessage(output);
};

DownloadGetCurrentSpeedRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_DownloadGetCurrentSpeedRequestMessage(input);
};

DownloadGetCurrentSpeedRequestMessage.prototype.serializeAs_DownloadGetCurrentSpeedRequestMessage = function(param1) {

};

DownloadGetCurrentSpeedRequestMessage.prototype.deserializeAs_DownloadGetCurrentSpeedRequestMessage = function(param1) {

};

DownloadGetCurrentSpeedRequestMessage.prototype.getMessageId = function() {
    return 1510;
};

DownloadGetCurrentSpeedRequestMessage.prototype.getClassName = function() {
    return 'DownloadGetCurrentSpeedRequestMessage';
};

module.exports.id = 1510;
module.exports.DownloadGetCurrentSpeedRequestMessage = DownloadGetCurrentSpeedRequestMessage;