var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var CharacterReportMessage = function() {
  this.reportedId = 0;
  this.reason = 0;
};

util.inherits(CharacterReportMessage, BaseMessage);

CharacterReportMessage.prototype.serialize = function(output) {
  this.serializeAs_CharacterReportMessage(output);
};

CharacterReportMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterReportMessage(input);
};

CharacterReportMessage.prototype.serializeAs_CharacterReportMessage = function(output) {
  if (this.reportedId < 0) {
    throw (new Error((("Forbidden value (" + this.reportedId) + ") on element reportedId.")));
  };
  output.writeVarInt(this.reportedId);
  if (this.reason < 0) {
    throw (new Error((("Forbidden value (" + this.reason) + ") on element reason.")));
  };
  output.writeByte(this.reason);
};

CharacterReportMessage.prototype.deserializeAs_CharacterReportMessage = function(input) {
  this.reportedId = input.readVarUhInt();
  if (this.reportedId < 0) {
    throw (new Error((("Forbidden value (" + this.reportedId) + ") on element of CharacterReportMessage.reportedId.")));
  };
  this.reason = input.readByte();
  if (this.reason < 0) {
    throw (new Error((("Forbidden value (" + this.reason) + ") on element of CharacterReportMessage.reason.")));
  };
};

CharacterReportMessage.prototype.getMessageId = function() {
  return 6079;
};

CharacterReportMessage.prototype.getClassName = function() {
  return 'CharacterReportMessage';
};

module.exports.id = 6079;
module.exports.class = CharacterReportMessage;