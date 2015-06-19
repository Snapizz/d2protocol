var d2com = require('d2com'),
  BaseMessage = require('../party-update-light-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
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

PartyCompanionUpdateLightMessage.prototype.serializeAs_PartyCompanionUpdateLightMessage = function(output) {
  this.serializeAs_PartyUpdateLightMessage(output);
  if (this.indexId < 0) {
    throw (new Error((("Forbidden value (" + this.indexId) + ") on element indexId.")));
  };
  output.writeByte(this.indexId);
};

PartyCompanionUpdateLightMessage.prototype.deserializeAs_PartyCompanionUpdateLightMessage = function(input) {
  this.deserialize(input);
  this.indexId = input.readByte();
  if (this.indexId < 0) {
    throw (new Error((("Forbidden value (" + this.indexId) + ") on element of PartyCompanionUpdateLightMessage.indexId.")));
  };
};

PartyCompanionUpdateLightMessage.prototype.getMessageId = function() {
  return 6472;
};

PartyCompanionUpdateLightMessage.prototype.getClassName = function() {
  return 'PartyCompanionUpdateLightMessage';
};

module.exports.id = 6472;
module.exports.class = PartyCompanionUpdateLightMessage;