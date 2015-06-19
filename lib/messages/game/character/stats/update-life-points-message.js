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

UpdateLifePointsMessage.prototype.serializeAs_UpdateLifePointsMessage = function(output) {
  if (this.lifePoints < 0) {
    throw (new Error((("Forbidden value (" + this.lifePoints) + ") on element lifePoints.")));
  };
  output.writeVarInt(this.lifePoints);
  if (this.maxLifePoints < 0) {
    throw (new Error((("Forbidden value (" + this.maxLifePoints) + ") on element maxLifePoints.")));
  };
  output.writeVarInt(this.maxLifePoints);
};

UpdateLifePointsMessage.prototype.deserializeAs_UpdateLifePointsMessage = function(input) {
  this.lifePoints = input.readVarUhInt();
  if (this.lifePoints < 0) {
    throw (new Error((("Forbidden value (" + this.lifePoints) + ") on element of UpdateLifePointsMessage.lifePoints.")));
  };
  this.maxLifePoints = input.readVarUhInt();
  if (this.maxLifePoints < 0) {
    throw (new Error((("Forbidden value (" + this.maxLifePoints) + ") on element of UpdateLifePointsMessage.maxLifePoints.")));
  };
};

UpdateLifePointsMessage.prototype.getMessageId = function() {
  return 5658;
};

UpdateLifePointsMessage.prototype.getClassName = function() {
  return 'UpdateLifePointsMessage';
};

module.exports.id = 5658;
module.exports.class = UpdateLifePointsMessage;