var d2com = require('d2com'),
  BaseMessage = require('./abstract-party-event-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PartyUpdateLightMessage = function() {
  this.id = 0;
  this.lifePoints = 0;
  this.maxLifePoints = 0;
  this.prospecting = 0;
  this.regenRate = 0;
};

util.inherits(PartyUpdateLightMessage, BaseMessage);

PartyUpdateLightMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyUpdateLightMessage(output);
};

PartyUpdateLightMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyUpdateLightMessage(input);
};

PartyUpdateLightMessage.prototype.serializeAs_PartyUpdateLightMessage = function(output) {
  this.serializeAs_AbstractPartyEventMessage(output);
  if (this.id < 0) {
    throw (new Error((("Forbidden value (" + this.id) + ") on element id.")));
  };
  output.writeVarInt(this.id);
  if (this.lifePoints < 0) {
    throw (new Error((("Forbidden value (" + this.lifePoints) + ") on element lifePoints.")));
  };
  output.writeVarInt(this.lifePoints);
  if (this.maxLifePoints < 0) {
    throw (new Error((("Forbidden value (" + this.maxLifePoints) + ") on element maxLifePoints.")));
  };
  output.writeVarInt(this.maxLifePoints);
  if (this.prospecting < 0) {
    throw (new Error((("Forbidden value (" + this.prospecting) + ") on element prospecting.")));
  };
  output.writeVarShort(this.prospecting);
  if ((((this.regenRate < 0)) || ((this.regenRate > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.regenRate) + ") on element regenRate.")));
  };
  output.writeByte(this.regenRate);
};

PartyUpdateLightMessage.prototype.deserializeAs_PartyUpdateLightMessage = function(input) {
  this.deserialize(input);
  this.id = input.readVarUhInt();
  if (this.id < 0) {
    throw (new Error((("Forbidden value (" + this.id) + ") on element of PartyUpdateLightMessage.id.")));
  };
  this.lifePoints = input.readVarUhInt();
  if (this.lifePoints < 0) {
    throw (new Error((("Forbidden value (" + this.lifePoints) + ") on element of PartyUpdateLightMessage.lifePoints.")));
  };
  this.maxLifePoints = input.readVarUhInt();
  if (this.maxLifePoints < 0) {
    throw (new Error((("Forbidden value (" + this.maxLifePoints) + ") on element of PartyUpdateLightMessage.maxLifePoints.")));
  };
  this.prospecting = input.readVarUhShort();
  if (this.prospecting < 0) {
    throw (new Error((("Forbidden value (" + this.prospecting) + ") on element of PartyUpdateLightMessage.prospecting.")));
  };
  this.regenRate = input.readUnsignedByte();
  if ((((this.regenRate < 0)) || ((this.regenRate > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.regenRate) + ") on element of PartyUpdateLightMessage.regenRate.")));
  };
};

PartyUpdateLightMessage.prototype.getMessageId = function() {
  return 6054;
};

PartyUpdateLightMessage.prototype.getClassName = function() {
  return 'PartyUpdateLightMessage';
};

module.exports.id = 6054;
module.exports.class = PartyUpdateLightMessage;