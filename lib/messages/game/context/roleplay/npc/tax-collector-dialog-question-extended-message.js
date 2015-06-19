var d2com = require('d2com'),
  BaseMessage = require('./tax-collector-dialog-question-basic-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var TaxCollectorDialogQuestionExtendedMessage = function() {
  this.maxPods = 0;
  this.prospecting = 0;
  this.wisdom = 0;
  this.taxCollectorsCount = 0;
  this.taxCollectorAttack = 0;
  this.kamas = 0;
  this.experience = 0;
  this.pods = 0;
  this.itemsValue = 0;
};

util.inherits(TaxCollectorDialogQuestionExtendedMessage, BaseMessage);

TaxCollectorDialogQuestionExtendedMessage.prototype.serialize = function(output) {
  this.serializeAs_TaxCollectorDialogQuestionExtendedMessage(output);
};

TaxCollectorDialogQuestionExtendedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TaxCollectorDialogQuestionExtendedMessage(input);
};

TaxCollectorDialogQuestionExtendedMessage.prototype.serializeAs_TaxCollectorDialogQuestionExtendedMessage = function(output) {
  this.serializeAs_TaxCollectorDialogQuestionBasicMessage(output);
  if (this.maxPods < 0) {
    throw (new Error((("Forbidden value (" + this.maxPods) + ") on element maxPods.")));
  };
  output.writeVarShort(this.maxPods);
  if (this.prospecting < 0) {
    throw (new Error((("Forbidden value (" + this.prospecting) + ") on element prospecting.")));
  };
  output.writeVarShort(this.prospecting);
  if (this.wisdom < 0) {
    throw (new Error((("Forbidden value (" + this.wisdom) + ") on element wisdom.")));
  };
  output.writeVarShort(this.wisdom);
  if (this.taxCollectorsCount < 0) {
    throw (new Error((("Forbidden value (" + this.taxCollectorsCount) + ") on element taxCollectorsCount.")));
  };
  output.writeByte(this.taxCollectorsCount);
  output.writeInt(this.taxCollectorAttack);
  if (this.kamas < 0) {
    throw (new Error((("Forbidden value (" + this.kamas) + ") on element kamas.")));
  };
  output.writeVarInt(this.kamas);
  if ((((this.experience < 0)) || ((this.experience > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.experience) + ") on element experience.")));
  };
  output.writeVarLong(this.experience);
  if (this.pods < 0) {
    throw (new Error((("Forbidden value (" + this.pods) + ") on element pods.")));
  };
  output.writeVarInt(this.pods);
  if (this.itemsValue < 0) {
    throw (new Error((("Forbidden value (" + this.itemsValue) + ") on element itemsValue.")));
  };
  output.writeVarInt(this.itemsValue);
};

TaxCollectorDialogQuestionExtendedMessage.prototype.deserializeAs_TaxCollectorDialogQuestionExtendedMessage = function(input) {
  this.deserialize(input);
  this.maxPods = input.readVarUhShort();
  if (this.maxPods < 0) {
    throw (new Error((("Forbidden value (" + this.maxPods) + ") on element of TaxCollectorDialogQuestionExtendedMessage.maxPods.")));
  };
  this.prospecting = input.readVarUhShort();
  if (this.prospecting < 0) {
    throw (new Error((("Forbidden value (" + this.prospecting) + ") on element of TaxCollectorDialogQuestionExtendedMessage.prospecting.")));
  };
  this.wisdom = input.readVarUhShort();
  if (this.wisdom < 0) {
    throw (new Error((("Forbidden value (" + this.wisdom) + ") on element of TaxCollectorDialogQuestionExtendedMessage.wisdom.")));
  };
  this.taxCollectorsCount = input.readByte();
  if (this.taxCollectorsCount < 0) {
    throw (new Error((("Forbidden value (" + this.taxCollectorsCount) + ") on element of TaxCollectorDialogQuestionExtendedMessage.taxCollectorsCount.")));
  };
  this.taxCollectorAttack = input.readInt();
  this.kamas = input.readVarUhInt();
  if (this.kamas < 0) {
    throw (new Error((("Forbidden value (" + this.kamas) + ") on element of TaxCollectorDialogQuestionExtendedMessage.kamas.")));
  };
  this.experience = input.readVarUhLong();
  if ((((this.experience < 0)) || ((this.experience > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.experience) + ") on element of TaxCollectorDialogQuestionExtendedMessage.experience.")));
  };
  this.pods = input.readVarUhInt();
  if (this.pods < 0) {
    throw (new Error((("Forbidden value (" + this.pods) + ") on element of TaxCollectorDialogQuestionExtendedMessage.pods.")));
  };
  this.itemsValue = input.readVarUhInt();
  if (this.itemsValue < 0) {
    throw (new Error((("Forbidden value (" + this.itemsValue) + ") on element of TaxCollectorDialogQuestionExtendedMessage.itemsValue.")));
  };
};

TaxCollectorDialogQuestionExtendedMessage.prototype.getMessageId = function() {
  return 5615;
};

TaxCollectorDialogQuestionExtendedMessage.prototype.getClassName = function() {
  return 'TaxCollectorDialogQuestionExtendedMessage';
};

module.exports.id = 5615;
module.exports.class = TaxCollectorDialogQuestionExtendedMessage;