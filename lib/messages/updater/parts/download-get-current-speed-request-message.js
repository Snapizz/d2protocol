var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var DownloadGetCurrentSpeedRequestMessage = function() {

};

require('util').inherits(DownloadGetCurrentSpeedRequestMessage, d2com.NetworkMessage.class);

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
module.exports.class = DownloadGetCurrentSpeedRequestMessage;
module.exports.getInstance = function() {
    return new DownloadGetCurrentSpeedRequestMessage;
};