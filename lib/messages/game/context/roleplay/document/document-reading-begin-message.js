var d2com = require('d2com'),
  BaseMessage = require('./document-reading-begin-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var DocumentReadingBeginMessage = function() {
  this.documentId = 0;
};

util.inherits(DocumentReadingBeginMessage, BaseMessage);

DocumentReadingBeginMessage.prototype.serialize = function(output) {
  this.serializeAs_DocumentReadingBeginMessage(output);
};

DocumentReadingBeginMessage.prototype.deserialize = function(input) {
  this.deserializeAs_DocumentReadingBeginMessage(input);
};

DocumentReadingBeginMessage.prototype.serializeAs_DocumentReadingBeginMessage = function(param1) {
  if (this.documentId < 0) {
    throw new Error("Forbidden value (" + this.documentId + ") on element documentId.");
  } else {
    param1.writeVarShort(this.documentId);
    return;
  }
};

DocumentReadingBeginMessage.prototype.deserializeAs_DocumentReadingBeginMessage = function(param1) {
  this.documentId = param1.readVarUhShort();
  if (this.documentId < 0) {
    throw new Error("Forbidden value (" + this.documentId + ") on element of DocumentReadingBeginMessage.documentId.");
  } else {
    return;
  }
};

DocumentReadingBeginMessage.prototype.getMessageId = function() {
  return 5675;
};

DocumentReadingBeginMessage.prototype.getClassName = function() {
  return 'DocumentReadingBeginMessage';
};

module.exports.id = 5675;
module.exports.class = DocumentReadingBeginMessage;
module.exports.getInstance = function() {
  return new DocumentReadingBeginMessage();
};