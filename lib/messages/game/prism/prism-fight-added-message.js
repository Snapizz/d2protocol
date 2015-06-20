var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PrismFightAddedMessage = function() {
  this.fight;
};

util.inherits(PrismFightAddedMessage, BaseMessage);

PrismFightAddedMessage.prototype.serialize = function(output) {
  this.serializeAs_PrismFightAddedMessage(output);
};

PrismFightAddedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PrismFightAddedMessage(input);
};

PrismFightAddedMessage.prototype.serializeAs_PrismFightAddedMessage = function(output) {
  this.fight.serializeAs_PrismFightersInformation(param1);
};

PrismFightAddedMessage.prototype.deserializeAs_PrismFightAddedMessage = function(input) {
  this.fight = new PrismFightersInformation();
  this.fight.deserialize(param1);
};

PrismFightAddedMessage.prototype.getMessageId = function() {
  return 6452;
};

PrismFightAddedMessage.prototype.getClassName = function() {
  return 'PrismFightAddedMessage';
};

module.exports.id = 6452;
module.exports.class = PrismFightAddedMessage;