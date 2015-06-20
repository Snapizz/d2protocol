var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var BasicGuildInformations = require('../../../../../types/game/context/roleplay/basic-guild-informations.js').class;

var TaxCollectorDialogQuestionBasicMessage = function() {
  this.guildInfo = new BasicGuildInformations();
};

util.inherits(TaxCollectorDialogQuestionBasicMessage, BaseMessage);

TaxCollectorDialogQuestionBasicMessage.prototype.serialize = function(output) {
  this.serializeAs_TaxCollectorDialogQuestionBasicMessage(output);
};

TaxCollectorDialogQuestionBasicMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TaxCollectorDialogQuestionBasicMessage(input);
};

TaxCollectorDialogQuestionBasicMessage.prototype.serializeAs_TaxCollectorDialogQuestionBasicMessage = function(param1) {
  this.guildInfo.serializeAs_BasicGuildInformations(param1);
};

TaxCollectorDialogQuestionBasicMessage.prototype.deserializeAs_TaxCollectorDialogQuestionBasicMessage = function(param1) {
  this.guildInfo = new BasicGuildInformations();
  this.guildInfo.deserialize(param1);
};

TaxCollectorDialogQuestionBasicMessage.prototype.getMessageId = function() {
  return 5619;
};

TaxCollectorDialogQuestionBasicMessage.prototype.getClassName = function() {
  return 'TaxCollectorDialogQuestionBasicMessage';
};

module.exports.id = 5619;
module.exports.class = TaxCollectorDialogQuestionBasicMessage;
module.exports.getInstance = function() {
  return new TaxCollectorDialogQuestionBasicMessage();
};