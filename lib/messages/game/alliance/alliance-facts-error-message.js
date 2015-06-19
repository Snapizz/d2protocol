var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AllianceFactsErrorMessage = function() {
  this.allianceId = 0;
};

util.inherits(AllianceFactsErrorMessage, BaseMessage);

AllianceFactsErrorMessage.prototype.serialize = function(output) {
  this.serializeAs_AllianceFactsErrorMessage(output);
};

AllianceFactsErrorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AllianceFactsErrorMessage(input);
};

AllianceFactsErrorMessage.prototype.serializeAs_AllianceFactsErrorMessage = function(output) {
  if (this.allianceId < 0) {
    throw (new Error((("Forbidden value (" + this.allianceId) + ") on element allianceId.")));
  };
  output.writeVarInt(this.allianceId);
};

AllianceFactsErrorMessage.prototype.deserializeAs_AllianceFactsErrorMessage = function(input) {
  this.allianceId = input.readVarUhInt();
  if (this.allianceId < 0) {
    throw (new Error((("Forbidden value (" + this.allianceId) + ") on element of AllianceFactsErrorMessage.allianceId.")));
  };
};

AllianceFactsErrorMessage.prototype.getMessageId = function() {
  return 6423;
};

AllianceFactsErrorMessage.prototype.getClassName = function() {
  return 'AllianceFactsErrorMessage';
};

module.exports.id = 6423;
module.exports.class = AllianceFactsErrorMessage;