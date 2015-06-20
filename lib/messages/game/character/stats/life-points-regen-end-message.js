var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var LifePointsRegenEndMessage = function() {
  this.lifePointsGained = 0;
};

util.inherits(LifePointsRegenEndMessage, BaseMessage);

LifePointsRegenEndMessage.prototype.serialize = function(output) {
  this.serializeAs_LifePointsRegenEndMessage(output);
};

LifePointsRegenEndMessage.prototype.deserialize = function(input) {
  this.deserializeAs_LifePointsRegenEndMessage(input);
};

LifePointsRegenEndMessage.prototype.serializeAs_LifePointsRegenEndMessage = function(param1) {
  this.serializeAs_UpdateLifePointsMessage(param1);
  if (this.lifePointsGained < 0) {
    throw new Error("Forbidden value (" + this.lifePointsGained + ") on element lifePointsGained.");
  } else {
    param1.writeVarInt(this.lifePointsGained);
    return;
  }
};

LifePointsRegenEndMessage.prototype.deserializeAs_LifePointsRegenEndMessage = function(param1) {
  this.deserialize(param1);
  this.lifePointsGained = param1.readVarUhInt();
  if (this.lifePointsGained < 0) {
    throw new Error("Forbidden value (" + this.lifePointsGained + ") on element of LifePointsRegenEndMessage.lifePointsGained.");
  } else {
    return;
  }
};

LifePointsRegenEndMessage.prototype.getMessageId = function() {
  return 5686;
};

LifePointsRegenEndMessage.prototype.getClassName = function() {
  return 'LifePointsRegenEndMessage';
};

module.exports.id = 5686;
module.exports.class = LifePointsRegenEndMessage;
module.exports.getInstance = function() {
  return new LifePointsRegenEndMessage();
};