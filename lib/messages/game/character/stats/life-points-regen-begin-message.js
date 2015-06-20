var d2com = require('d2com'),
  BaseMessage = require('./life-points-regen-begin-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var LifePointsRegenBeginMessage = function() {
  this.regenRate = 0;
};

util.inherits(LifePointsRegenBeginMessage, BaseMessage);

LifePointsRegenBeginMessage.prototype.serialize = function(output) {
  this.serializeAs_LifePointsRegenBeginMessage(output);
};

LifePointsRegenBeginMessage.prototype.deserialize = function(input) {
  this.deserializeAs_LifePointsRegenBeginMessage(input);
};

LifePointsRegenBeginMessage.prototype.serializeAs_LifePointsRegenBeginMessage = function(param1) {
  if (this.regenRate < 0 || this.regenRate > 255) {
    throw new Error("Forbidden value (" + this.regenRate + ") on element regenRate.");
  } else {
    param1.writeByte(this.regenRate);
    return;
  }
};

LifePointsRegenBeginMessage.prototype.deserializeAs_LifePointsRegenBeginMessage = function(param1) {
  this.regenRate = param1.readUnsignedByte();
  if (this.regenRate < 0 || this.regenRate > 255) {
    throw new Error("Forbidden value (" + this.regenRate + ") on element of LifePointsRegenBeginMessage.regenRate.");
  } else {
    return;
  }
};

LifePointsRegenBeginMessage.prototype.getMessageId = function() {
  return 5684;
};

LifePointsRegenBeginMessage.prototype.getClassName = function() {
  return 'LifePointsRegenBeginMessage';
};

module.exports.id = 5684;
module.exports.class = LifePointsRegenBeginMessage;
module.exports.getInstance = function() {
  return new LifePointsRegenBeginMessage();
};