var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var KrosmasterPlayingStatusMessage = function() {
  this.playing = false;
};

util.inherits(KrosmasterPlayingStatusMessage, BaseMessage);

KrosmasterPlayingStatusMessage.prototype.serialize = function(output) {
  this.serializeAs_KrosmasterPlayingStatusMessage(output);
};

KrosmasterPlayingStatusMessage.prototype.deserialize = function(input) {
  this.deserializeAs_KrosmasterPlayingStatusMessage(input);
};

KrosmasterPlayingStatusMessage.prototype.serializeAs_KrosmasterPlayingStatusMessage = function(output) {
  param1.writeBoolean(this.playing);
};

KrosmasterPlayingStatusMessage.prototype.deserializeAs_KrosmasterPlayingStatusMessage = function(input) {
  this.playing = param1.readBoolean();
};

KrosmasterPlayingStatusMessage.prototype.getMessageId = function() {
  return 6347;
};

KrosmasterPlayingStatusMessage.prototype.getClassName = function() {
  return 'KrosmasterPlayingStatusMessage';
};

module.exports.id = 6347;
module.exports.class = KrosmasterPlayingStatusMessage;