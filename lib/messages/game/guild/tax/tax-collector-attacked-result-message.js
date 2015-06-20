var d2com = require('d2com'),
  BaseMessage = require('./tax-collector-attacked-result-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');

var TaxCollectorBasicInformations = require('../../../../types/game/guild/tax/tax-collector-basic-informations.js').class;
var BasicGuildInformations = require('../../../../types/game/context/roleplay/basic-guild-informations.js').class;

var TaxCollectorAttackedResultMessage = function() {
  this.deadOrAlive = false;
  this.basicInfos = new TaxCollectorBasicInformations();
  this.guild = new BasicGuildInformations();
};

util.inherits(TaxCollectorAttackedResultMessage, BaseMessage);

TaxCollectorAttackedResultMessage.prototype.serialize = function(output) {
  this.serializeAs_TaxCollectorAttackedResultMessage(output);
};

TaxCollectorAttackedResultMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TaxCollectorAttackedResultMessage(input);
};

TaxCollectorAttackedResultMessage.prototype.serializeAs_TaxCollectorAttackedResultMessage = function(param1) {
  param1.writeBoolean(this.deadOrAlive);
  this.basicInfos.serializeAs_TaxCollectorBasicInformations(param1);
  this.guild.serializeAs_BasicGuildInformations(param1);
};

TaxCollectorAttackedResultMessage.prototype.deserializeAs_TaxCollectorAttackedResultMessage = function(param1) {
  this.deadOrAlive = param1.readBoolean();
  this.basicInfos = new TaxCollectorBasicInformations();
  this.basicInfos.deserialize(param1);
  this.guild = new BasicGuildInformations();
  this.guild.deserialize(param1);
};

TaxCollectorAttackedResultMessage.prototype.getMessageId = function() {
  return 5635;
};

TaxCollectorAttackedResultMessage.prototype.getClassName = function() {
  return 'TaxCollectorAttackedResultMessage';
};

module.exports.id = 5635;
module.exports.class = TaxCollectorAttackedResultMessage;
module.exports.getInstance = function() {
  return new TaxCollectorAttackedResultMessage();
};