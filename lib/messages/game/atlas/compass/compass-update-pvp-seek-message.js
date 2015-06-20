var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
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

CompassUpdatePvpSeekMessage.prototype.serializeAs_CompassUpdatePvpSeekMessage = function(param1) {
  this.serializeAs_CompassUpdateMessage(param1);
  if (this.memberId < 0) {
    throw new Error("Forbidden value (" + this.memberId + ") on element memberId.");
  } else {
    param1.writeVarInt(this.memberId);
    param1.writeUTF(this.memberName);
    return;
  }
};

CompassUpdatePvpSeekMessage.prototype.deserializeAs_CompassUpdatePvpSeekMessage = function(param1) {
  this.deserialize(param1);
  this.memberId = param1.readVarUhInt();
  if (this.memberId < 0) {
    throw new Error("Forbidden value (" + this.memberId + ") on element of CompassUpdatePvpSeekMessage.memberId.");
  } else {
    this.memberName = param1.readUTF();
    return;
  }
};

CompassUpdatePvpSeekMessage.prototype.getMessageId = function() {
  return 6013;
};

CompassUpdatePvpSeekMessage.prototype.getClassName = function() {
  return 'CompassUpdatePvpSeekMessage';
};

module.exports.id = 6013;
module.exports.class = CompassUpdatePvpSeekMessage;