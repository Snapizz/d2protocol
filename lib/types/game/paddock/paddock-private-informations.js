var PaddockPrivateInformations = function() {
  this.guildInfo;
};



PaddockPrivateInformations.prototype.serialize = function(output) {
  this.serializeAs_PaddockPrivateInformations(output);
};

PaddockPrivateInformations.prototype.deserialize = function(input) {
  this.deserializeAs_PaddockPrivateInformations(input);
};

PaddockPrivateInformations.prototype.serializeAs_PaddockPrivateInformations = function(output) {
  super.serializeAs_PaddockAbandonnedInformations(param1);
  this.guildInfo.serializeAs_GuildInformations(param1);
};

PaddockPrivateInformations.prototype.deserializeAs_PaddockPrivateInformations = function(input) {
  super.deserialize(param1);
  this.guildInfo = new GuildInformations();
  this.guildInfo.deserialize(param1);
};

PaddockPrivateInformations.prototype.getTypeId = function() {
  return 131;
};

PaddockPrivateInformations.prototype.getClassName = function() {
  return 'PaddockPrivateInformations';
};

module.exports.id = 131;
module.exports.class = PaddockPrivateInformations;