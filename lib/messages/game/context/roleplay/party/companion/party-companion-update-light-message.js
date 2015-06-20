var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var PartyCompanionUpdateLightMessage = function() {
  this.indexId = 0;
};

util.inherits(PartyCompanionUpdateLightMessage, BaseMessage);

PartyCompanionUpdateLightMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyCompanionUpdateLightMessage(output);
};

PartyCompanionUpdateLightMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyCompanionUpdateLightMessage(input);
};

PartyCompanionUpdateLightMessage.prototype.serializeAs_PartyCompanionUpdateLightMessage = function(param1) {
  this.serializeAs_PartyUpdateLightMessage(param1);
  if (this.indexId < 0) {
    throw new Error("Forbidden value (" + this.indexId + ") on element indexId.");
  } else {
    param1.writeByte(this.indexId);
    return;
  }
};

PartyCompanionUpdateLightMessage.prototype.deserializeAs_PartyCompanionUpdateLightMessage = function(param1) {
  this.deserialize(param1);
  this.indexId = param1.readByte();
  if (this.indexId < 0) {
    throw new Error("Forbidden value (" + this.indexId + ") on element of PartyCompanionUpdateLightMessage.indexId.");
  } else {
    return;
  }
};

PartyCompanionUpdateLightMessage.prototype.getMessageId = function() {
  return 6472;
};

PartyCompanionUpdateLightMessage.prototype.getClassName = function() {
  return 'PartyCompanionUpdateLightMessage';
};

module.exports.id = 6472;
module.exports.class = PartyCompanionUpdateLightMessage;
module.exports.getInstance = function() {
  return new PartyCompanionUpdateLightMessage();
};