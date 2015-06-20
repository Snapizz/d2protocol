var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var DownloadSetSpeedRequestMessage = function() {
  this.downloadSpeed = 0;
};

util.inherits(DownloadSetSpeedRequestMessage, BaseMessage);

DownloadSetSpeedRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_DownloadSetSpeedRequestMessage(output);
};

DownloadSetSpeedRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_DownloadSetSpeedRequestMessage(input);
};

DownloadSetSpeedRequestMessage.prototype.serializeAs_DownloadSetSpeedRequestMessage = function(param1) {
  if (this.downloadSpeed < 1 || this.downloadSpeed > 10) {
    throw new Error("Forbidden value (" + this.downloadSpeed + ") on element downloadSpeed.");
  } else {
    param1.writeByte(this.downloadSpeed);
    return;
  }
};

DownloadSetSpeedRequestMessage.prototype.deserializeAs_DownloadSetSpeedRequestMessage = function(param1) {
  this.downloadSpeed = param1.readByte();
  if (this.downloadSpeed < 1 || this.downloadSpeed > 10) {
    throw new Error("Forbidden value (" + this.downloadSpeed + ") on element of DownloadSetSpeedRequestMessage.downloadSpeed.");
  } else {
    return;
  }
};

DownloadSetSpeedRequestMessage.prototype.getMessageId = function() {
  return 1512;
};

DownloadSetSpeedRequestMessage.prototype.getClassName = function() {
  return 'DownloadSetSpeedRequestMessage';
};

module.exports.id = 1512;
module.exports.class = DownloadSetSpeedRequestMessage;