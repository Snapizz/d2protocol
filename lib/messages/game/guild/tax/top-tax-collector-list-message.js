var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var TopTaxCollectorListMessage = function() {
  this.isDungeon = false;
};

util.inherits(TopTaxCollectorListMessage, BaseMessage);

TopTaxCollectorListMessage.prototype.serialize = function(output) {
  this.serializeAs_TopTaxCollectorListMessage(output);
};

TopTaxCollectorListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TopTaxCollectorListMessage(input);
};

TopTaxCollectorListMessage.prototype.serializeAs_TopTaxCollectorListMessage = function(param1) {
  this.serializeAs_AbstractTaxCollectorListMessage(param1);
  param1.writeBoolean(this.isDungeon);
};

TopTaxCollectorListMessage.prototype.deserializeAs_TopTaxCollectorListMessage = function(param1) {
  this.deserialize(param1);
  this.isDungeon = param1.readBoolean();
};

TopTaxCollectorListMessage.prototype.getMessageId = function() {
  return 6565;
};

TopTaxCollectorListMessage.prototype.getClassName = function() {
  return 'TopTaxCollectorListMessage';
};

module.exports.id = 6565;
module.exports.class = TopTaxCollectorListMessage;
module.exports.getInstance = function() {
  return new TopTaxCollectorListMessage();
};