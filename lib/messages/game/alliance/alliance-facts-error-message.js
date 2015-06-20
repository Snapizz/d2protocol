var d2com = require('d2com'),
  BaseMessage = require('./alliance-facts-error-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
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

AllianceFactsErrorMessage.prototype.serializeAs_AllianceFactsErrorMessage = function(param1) {
  if (this.allianceId < 0) {
    throw new Error("Forbidden value (" + this.allianceId + ") on element allianceId.");
  } else {
    param1.writeVarInt(this.allianceId);
    return;
  }
};

AllianceFactsErrorMessage.prototype.deserializeAs_AllianceFactsErrorMessage = function(param1) {
  this.allianceId = param1.readVarUhInt();
  if (this.allianceId < 0) {
    throw new Error("Forbidden value (" + this.allianceId + ") on element of AllianceFactsErrorMessage.allianceId.");
  } else {
    return;
  }
};

AllianceFactsErrorMessage.prototype.getMessageId = function() {
  return 6423;
};

AllianceFactsErrorMessage.prototype.getClassName = function() {
  return 'AllianceFactsErrorMessage';
};

module.exports.id = 6423;
module.exports.class = AllianceFactsErrorMessage;
module.exports.getInstance = function() {
  return new AllianceFactsErrorMessage();
};