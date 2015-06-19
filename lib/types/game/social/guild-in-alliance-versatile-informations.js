var BaseMessage = require('./guild-versatile-informations.js').class,
  util = require('util');

var GuildInAllianceVersatileInformations = function() {
  this.allianceId = 0;
};

util.inherits(GuildInAllianceVersatileInformations, BaseMessage);

GuildInAllianceVersatileInformations.prototype.serialize = function(output) {
  this.serializeAs_GuildInAllianceVersatileInformations(output);
};

GuildInAllianceVersatileInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GuildInAllianceVersatileInformations(input);
};

GuildInAllianceVersatileInformations.prototype.serializeAs_GuildInAllianceVersatileInformations = function(output) {
  this.serializeAs_GuildVersatileInformations(output);
  if (this.allianceId < 0) {
    throw (new Error((("Forbidden value (" + this.allianceId) + ") on element allianceId.")));
  };
  output.writeVarInt(this.allianceId);
};

GuildInAllianceVersatileInformations.prototype.deserializeAs_GuildInAllianceVersatileInformations = function(input) {
  this.deserialize(input);
  this.allianceId = input.readVarUhInt();
  if (this.allianceId < 0) {
    throw (new Error((("Forbidden value (" + this.allianceId) + ") on element of GuildInAllianceVersatileInformations.allianceId.")));
  };
};

GuildInAllianceVersatileInformations.prototype.getTypeId = function() {
  return 437;
};

GuildInAllianceVersatileInformations.prototype.getClassName = function() {
  return 'GuildInAllianceVersatileInformations';
};

module.exports.id = 437;
module.exports.class = GuildInAllianceVersatileInformations;