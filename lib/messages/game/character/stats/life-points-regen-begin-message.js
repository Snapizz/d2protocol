var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

LifePointsRegenBeginMessage.prototype.serializeAs_LifePointsRegenBeginMessage = function(output) {
  if ((((this.regenRate < 0)) || ((this.regenRate > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.regenRate) + ") on element regenRate.")));
  };
  output.writeByte(this.regenRate);
};

LifePointsRegenBeginMessage.prototype.deserializeAs_LifePointsRegenBeginMessage = function(input) {
  this.regenRate = input.readUnsignedByte();
  if ((((this.regenRate < 0)) || ((this.regenRate > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.regenRate) + ") on element of LifePointsRegenBeginMessage.regenRate.")));
  };
};

LifePointsRegenBeginMessage.prototype.getMessageId = function() {
  return 5684;
};

LifePointsRegenBeginMessage.prototype.getClassName = function() {
  return 'LifePointsRegenBeginMessage';
};

module.exports.id = 5684;
module.exports.class = LifePointsRegenBeginMessage;