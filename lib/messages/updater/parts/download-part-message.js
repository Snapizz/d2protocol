var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var DownloadPartMessage = function() {
  this.id = "";
};

util.inherits(DownloadPartMessage, BaseMessage);

DownloadPartMessage.prototype.serialize = function(output) {
  this.serializeAs_DownloadPartMessage(output);
};

DownloadPartMessage.prototype.deserialize = function(input) {
  this.deserializeAs_DownloadPartMessage(input);
};

DownloadPartMessage.prototype.serializeAs_DownloadPartMessage = function(output) {
  output.writeUTF(this.id);
};

DownloadPartMessage.prototype.deserializeAs_DownloadPartMessage = function(input) {
  this.id = input.readUTF();
};

DownloadPartMessage.prototype.getMessageId = function() {
  return 1503;
};

DownloadPartMessage.prototype.getClassName = function() {
  return 'DownloadPartMessage';
};

module.exports.id = 1503;
module.exports.class = DownloadPartMessage;