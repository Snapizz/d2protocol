var d2com = require('d2com'),
  BaseMessage = require('./compass-update-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var CompassUpdatePvpSeekMessage = function() {
  this.memberId = 0;
  this.memberName = "";
};

util.inherits(CompassUpdatePvpSeekMessage, BaseMessage);

CompassUpdatePvpSeekMessage.prototype.serialize = function(output) {
  this.serializeAs_CompassUpdatePvpSeekMessage(output);
};

CompassUpdatePvpSeekMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CompassUpdatePvpSeekMessage(input);
};

CompassUpdatePvpSeekMessage.prototype.serializeAs_CompassUpdatePvpSeekMessage = function(output) {
  this.serializeAs_CompassUpdateMessage(output);
  if (this.memberId < 0) {
    throw (new Error((("Forbidden value (" + this.memberId) + ") on element memberId.")));
  };
  output.writeVarInt(this.memberId);
  output.writeUTF(this.memberName);
};

CompassUpdatePvpSeekMessage.prototype.deserializeAs_CompassUpdatePvpSeekMessage = function(input) {
  this.deserialize(input);
  this.memberId = input.readVarUhInt();
  if (this.memberId < 0) {
    throw (new Error((("Forbidden value (" + this.memberId) + ") on element of CompassUpdatePvpSeekMessage.memberId.")));
  };
  this.memberName = input.readUTF();
};

CompassUpdatePvpSeekMessage.prototype.getMessageId = function() {
  return 6013;
};

CompassUpdatePvpSeekMessage.prototype.getClassName = function() {
  return 'CompassUpdatePvpSeekMessage';
};

module.exports.id = 6013;
module.exports.class = CompassUpdatePvpSeekMessage;