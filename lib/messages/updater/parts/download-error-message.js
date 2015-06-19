var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var DownloadErrorMessage = function() {
  this.errorId = 0;
  this.message = "";
  this.helpUrl = "";
};

util.inherits(DownloadErrorMessage, BaseMessage);

DownloadErrorMessage.prototype.serialize = function(output) {
  this.serializeAs_DownloadErrorMessage(output);
};

DownloadErrorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_DownloadErrorMessage(input);
};

DownloadErrorMessage.prototype.serializeAs_DownloadErrorMessage = function(output) {
  output.writeByte(this.errorId);
  output.writeUTF(this.message);
  output.writeUTF(this.helpUrl);
};

DownloadErrorMessage.prototype.deserializeAs_DownloadErrorMessage = function(input) {
  this.errorId = input.readByte();
  if (this.errorId < 0) {
    throw (new Error((("Forbidden value (" + this.errorId) + ") on element of DownloadErrorMessage.errorId.")));
  };
  this.message = input.readUTF();
  this.helpUrl = input.readUTF();
};

DownloadErrorMessage.prototype.getMessageId = function() {
  return 1513;
};

DownloadErrorMessage.prototype.getClassName = function() {
  return 'DownloadErrorMessage';
};

module.exports.id = 1513;
module.exports.class = DownloadErrorMessage;