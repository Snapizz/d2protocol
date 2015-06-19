var d2com = require('d2com'),
  BaseMessage = require('./update-life-points-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
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

LifePointsRegenEndMessage.prototype.serializeAs_LifePointsRegenEndMessage = function(output) {
  this.serializeAs_UpdateLifePointsMessage(output);
  if (this.lifePointsGained < 0) {
    throw (new Error((("Forbidden value (" + this.lifePointsGained) + ") on element lifePointsGained.")));
  };
  output.writeVarInt(this.lifePointsGained);
};

LifePointsRegenEndMessage.prototype.deserializeAs_LifePointsRegenEndMessage = function(input) {
  this.deserialize(input);
  this.lifePointsGained = input.readVarUhInt();
  if (this.lifePointsGained < 0) {
    throw (new Error((("Forbidden value (" + this.lifePointsGained) + ") on element of LifePointsRegenEndMessage.lifePointsGained.")));
  };
};

LifePointsRegenEndMessage.prototype.getMessageId = function() {
  return 5686;
};

LifePointsRegenEndMessage.prototype.getClassName = function() {
  return 'LifePointsRegenEndMessage';
};

module.exports.id = 5686;
module.exports.class = LifePointsRegenEndMessage;