var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ComicReadingBeginMessage = function() {
  this.comicId = 0;
};

util.inherits(ComicReadingBeginMessage, BaseMessage);

ComicReadingBeginMessage.prototype.serialize = function(output) {
  this.serializeAs_ComicReadingBeginMessage(output);
};

ComicReadingBeginMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ComicReadingBeginMessage(input);
};

ComicReadingBeginMessage.prototype.serializeAs_ComicReadingBeginMessage = function(output) {
  if (this.comicId < 0) {
    throw new Error("Forbidden value (" + this.comicId + ") on element comicId.");
  } else {
    param1.writeVarShort(this.comicId);
    return;
  }
};

ComicReadingBeginMessage.prototype.deserializeAs_ComicReadingBeginMessage = function(input) {
  this.comicId = param1.readVarUhShort();
  if (this.comicId < 0) {
    throw new Error("Forbidden value (" + this.comicId + ") on element of ComicReadingBeginMessage.comicId.");
  } else {
    return;
  }
};

ComicReadingBeginMessage.prototype.getMessageId = function() {
  return 6536;
};

ComicReadingBeginMessage.prototype.getClassName = function() {
  return 'ComicReadingBeginMessage';
};

module.exports.id = 6536;
module.exports.class = ComicReadingBeginMessage;