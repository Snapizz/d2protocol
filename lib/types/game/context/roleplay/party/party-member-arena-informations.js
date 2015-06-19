var BaseMessage = require('./party-member-informations.js').class,
  util = require('util');

var PartyMemberArenaInformations = function() {
  this.rank = 0;
};

util.inherits(PartyMemberArenaInformations, BaseMessage);

PartyMemberArenaInformations.prototype.serialize = function(output) {
  this.serializeAs_PartyMemberArenaInformations(output);
};

PartyMemberArenaInformations.prototype.deserialize = function(input) {
  this.deserializeAs_PartyMemberArenaInformations(input);
};

PartyMemberArenaInformations.prototype.serializeAs_PartyMemberArenaInformations = function(output) {
  this.serializeAs_PartyMemberInformations(output);
  if ((((this.rank < 0)) || ((this.rank > 2300)))) {
    throw (new Error((("Forbidden value (" + this.rank) + ") on element rank.")));
  };
  output.writeVarShort(this.rank);
};

PartyMemberArenaInformations.prototype.deserializeAs_PartyMemberArenaInformations = function(input) {
  this.deserialize(input);
  this.rank = input.readVarUhShort();
  if ((((this.rank < 0)) || ((this.rank > 2300)))) {
    throw (new Error((("Forbidden value (" + this.rank) + ") on element of PartyMemberArenaInformations.rank.")));
  };
};

PartyMemberArenaInformations.prototype.getTypeId = function() {
  return 391;
};

PartyMemberArenaInformations.prototype.getClassName = function() {
  return 'PartyMemberArenaInformations';
};

module.exports.id = 391;
module.exports.class = PartyMemberArenaInformations;