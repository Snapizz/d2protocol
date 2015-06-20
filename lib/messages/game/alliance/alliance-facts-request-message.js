var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AllianceFactsRequestMessage = function() {
  this.allianceId = 0;
};

util.inherits(AllianceFactsRequestMessage, BaseMessage);

AllianceFactsRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_AllianceFactsRequestMessage(output);
};

AllianceFactsRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AllianceFactsRequestMessage(input);
};

AllianceFactsRequestMessage.prototype.serializeAs_AllianceFactsRequestMessage = function(param1) {
  if (this.allianceId < 0) {
    throw new Error("Forbidden value (" + this.allianceId + ") on element allianceId.");
  } else {
    param1.writeVarInt(this.allianceId);
    return;
  }
};

AllianceFactsRequestMessage.prototype.deserializeAs_AllianceFactsRequestMessage = function(param1) {
  this.allianceId = param1.readVarUhInt();
  if (this.allianceId < 0) {
    throw new Error("Forbidden value (" + this.allianceId + ") on element of AllianceFactsRequestMessage.allianceId.");
  } else {
    return;
  }
};

AllianceFactsRequestMessage.prototype.getMessageId = function() {
  return 6409;
};

AllianceFactsRequestMessage.prototype.getClassName = function() {
  return 'AllianceFactsRequestMessage';
};

module.exports.id = 6409;
module.exports.class = AllianceFactsRequestMessage;