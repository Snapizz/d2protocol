var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var DownloadCurrentSpeedMessage = function() {
  this.downloadSpeed = 0;
};

util.inherits(DownloadCurrentSpeedMessage, BaseMessage);

DownloadCurrentSpeedMessage.prototype.serialize = function(output) {
  this.serializeAs_DownloadCurrentSpeedMessage(output);
};

DownloadCurrentSpeedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_DownloadCurrentSpeedMessage(input);
};

DownloadCurrentSpeedMessage.prototype.serializeAs_DownloadCurrentSpeedMessage = function(output) {
  if ((((this.downloadSpeed < 1)) || ((this.downloadSpeed > 10)))) {
    throw (new Error((("Forbidden value (" + this.downloadSpeed) + ") on element downloadSpeed.")));
  };
  output.writeByte(this.downloadSpeed);
};

DownloadCurrentSpeedMessage.prototype.deserializeAs_DownloadCurrentSpeedMessage = function(input) {
  this.downloadSpeed = input.readByte();
  if ((((this.downloadSpeed < 1)) || ((this.downloadSpeed > 10)))) {
    throw (new Error((("Forbidden value (" + this.downloadSpeed) + ") on element of DownloadCurrentSpeedMessage.downloadSpeed.")));
  };
};

DownloadCurrentSpeedMessage.prototype.getMessageId = function() {
  return 1511;
};

DownloadCurrentSpeedMessage.prototype.getClassName = function() {
  return 'DownloadCurrentSpeedMessage';
};

module.exports.id = 1511;
module.exports.class = DownloadCurrentSpeedMessage;