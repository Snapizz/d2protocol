var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var UpdateLifePointsMessage = function() {
  this.lifePoints = 0;
  this.maxLifePoints = 0;
};

util.inherits(UpdateLifePointsMessage, BaseMessage);

UpdateLifePointsMessage.prototype.serialize = function(output) {
  this.serializeAs_UpdateLifePointsMessage(output);
};

UpdateLifePointsMessage.prototype.deserialize = function(input) {
  this.deserializeAs_UpdateLifePointsMessage(input);
};

UpdateLifePointsMessage.prototype.serializeAs_UpdateLifePointsMessage = function(param1) {
  if (this.lifePoints < 0) {
    throw new Error("Forbidden value (" + this.lifePoints + ") on element lifePoints.");
  } else {
    param1.writeVarInt(this.lifePoints);
    if (this.maxLifePoints < 0) {
      throw new Error("Forbidden value (" + this.maxLifePoints + ") on element maxLifePoints.");
    } else {
      param1.writeVarInt(this.maxLifePoints);
      return;
    }
  }
};

UpdateLifePointsMessage.prototype.deserializeAs_UpdateLifePointsMessage = function(param1) {
  this.lifePoints = param1.readVarUhInt();
  if (this.lifePoints < 0) {
    throw new Error("Forbidden value (" + this.lifePoints + ") on element of UpdateLifePointsMessage.lifePoints.");
  } else {
    this.maxLifePoints = param1.readVarUhInt();
    if (this.maxLifePoints < 0) {
      throw new Error("Forbidden value (" + this.maxLifePoints + ") on element of UpdateLifePointsMessage.maxLifePoints.");
    } else {
      return;
    }
  }
};

UpdateLifePointsMessage.prototype.getMessageId = function() {
  return 5658;
};

UpdateLifePointsMessage.prototype.getClassName = function() {
  return 'UpdateLifePointsMessage';
};

module.exports.id = 5658;
module.exports.class = UpdateLifePointsMessage;