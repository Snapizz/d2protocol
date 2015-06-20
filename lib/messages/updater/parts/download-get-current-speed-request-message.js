var d2com = require('d2com'),
  BaseMessage = require('./download-get-current-speed-request-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var DownloadGetCurrentSpeedRequestMessage = function() {

};

util.inherits(DownloadGetCurrentSpeedRequestMessage, BaseMessage);

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
  return new DownloadGetCurrentSpeedRequestMessage();
};