var BaseMessage = require('./party-companion-base-informations.js').class,
  util = require('util');

var PartyCompanionMemberInformations = function() {
  this.initiative = 0;
  this.lifePoints = 0;
  this.maxLifePoints = 0;
  this.prospecting = 0;
  this.regenRate = 0;
};

util.inherits(PartyCompanionMemberInformations, BaseMessage);

PartyCompanionMemberInformations.prototype.serialize = function(output) {
  this.serializeAs_PartyCompanionMemberInformations(output);
};

PartyCompanionMemberInformations.prototype.deserialize = function(input) {
  this.deserializeAs_PartyCompanionMemberInformations(input);
};

PartyCompanionMemberInformations.prototype.serializeAs_PartyCompanionMemberInformations = function(output) {
  this.serializeAs_PartyCompanionBaseInformations(output);
  if (this.initiative < 0) {
    throw (new Error((("Forbidden value (" + this.initiative) + ") on element initiative.")));
  };
  output.writeVarShort(this.initiative);
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

PartyCompanionMemberInformations.prototype.deserializeAs_PartyCompanionMemberInformations = function(input) {
  this.deserialize(input);
  this.initiative = input.readVarUhShort();
  if (this.initiative < 0) {
    throw (new Error((("Forbidden value (" + this.initiative) + ") on element of PartyCompanionMemberInformations.initiative.")));
  };
  this.lifePoints = input.readVarUhInt();
  if (this.lifePoints < 0) {
    throw (new Error((("Forbidden value (" + this.lifePoints) + ") on element of PartyCompanionMemberInformations.lifePoints.")));
  };
  this.maxLifePoints = input.readVarUhInt();
  if (this.maxLifePoints < 0) {
    throw (new Error((("Forbidden value (" + this.maxLifePoints) + ") on element of PartyCompanionMemberInformations.maxLifePoints.")));
  };
  this.prospecting = input.readVarUhShort();
  if (this.prospecting < 0) {
    throw (new Error((("Forbidden value (" + this.prospecting) + ") on element of PartyCompanionMemberInformations.prospecting.")));
  };
  this.regenRate = input.readUnsignedByte();
  if ((((this.regenRate < 0)) || ((this.regenRate > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.regenRate) + ") on element of PartyCompanionMemberInformations.regenRate.")));
  };
};

PartyCompanionMemberInformations.prototype.getTypeId = function() {
  return 452;
};

PartyCompanionMemberInformations.prototype.getClassName = function() {
  return 'PartyCompanionMemberInformations';
};

module.exports.id = 452;
module.exports.class = PartyCompanionMemberInformations;