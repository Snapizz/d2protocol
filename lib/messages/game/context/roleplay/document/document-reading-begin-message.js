var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

DocumentReadingBeginMessage.prototype.serializeAs_DocumentReadingBeginMessage = function(output) {
  if (this.documentId < 0) {
    throw (new Error((("Forbidden value (" + this.documentId) + ") on element documentId.")));
  };
  output.writeVarShort(this.documentId);
};

DocumentReadingBeginMessage.prototype.deserializeAs_DocumentReadingBeginMessage = function(input) {
  this.documentId = input.readVarUhShort();
  if (this.documentId < 0) {
    throw (new Error((("Forbidden value (" + this.documentId) + ") on element of DocumentReadingBeginMessage.documentId.")));
  };
};

DocumentReadingBeginMessage.prototype.getMessageId = function() {
  return 5675;
};

DocumentReadingBeginMessage.prototype.getClassName = function() {
  return 'DocumentReadingBeginMessage';
};

module.exports.id = 5675;
module.exports.class = DocumentReadingBeginMessage;