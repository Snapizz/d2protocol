var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var TaxCollectorAttackedResultMessage = function() {
  this.deadOrAlive = false;
  this.basicInfos;
  this.guild;
};

util.inherits(TaxCollectorAttackedResultMessage, BaseMessage);

TaxCollectorAttackedResultMessage.prototype.serialize = function(output) {
  this.serializeAs_TaxCollectorAttackedResultMessage(output);
};

TaxCollectorAttackedResultMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TaxCollectorAttackedResultMessage(input);
};

TaxCollectorAttackedResultMessage.prototype.serializeAs_TaxCollectorAttackedResultMessage = function(output) {
  output.writeBoolean(this.deadOrAlive);
  this.basicInfos.serializeAs_TaxCollectorBasicInformations(output);
  this.guild.serializeAs_BasicGuildInformations(output);
};

TaxCollectorAttackedResultMessage.prototype.deserializeAs_TaxCollectorAttackedResultMessage = function(input) {
  this.deadOrAlive = input.readBoolean();
  this.basicInfos = new TaxCollectorBasicInformations();
  this.basicInfos.deserialize(input);
  this.guild = new BasicGuildInformations();
  this.guild.deserialize(input);
};

TaxCollectorAttackedResultMessage.prototype.getMessageId = function() {
  return 5635;
};

TaxCollectorAttackedResultMessage.prototype.getClassName = function() {
  return 'TaxCollectorAttackedResultMessage';
};

module.exports.id = 5635;
module.exports.class = TaxCollectorAttackedResultMessage;