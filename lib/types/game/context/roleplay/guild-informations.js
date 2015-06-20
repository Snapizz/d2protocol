var GuildInformations = function() {
  this.guildEmblem;
};



GuildInformations.prototype.serialize = function(output) {
  this.serializeAs_GuildInformations(output);
};

GuildInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GuildInformations(input);
};

GuildInformations.prototype.serializeAs_GuildInformations = function(param1) {
  this.serializeAs_BasicGuildInformations(param1);
  this.guildEmblem.serializeAs_GuildEmblem(param1);
};

GuildInformations.prototype.deserializeAs_GuildInformations = function(param1) {
  super.deserialize(param1);
  this.guildEmblem = new GuildEmblem();
  this.guildEmblem.deserialize(param1);
};

GuildInformations.prototype.getTypeId = function() {
  return 127;
};

GuildInformations.prototype.getClassName = function() {
  return 'GuildInformations';
};

module.exports.id = 127;
module.exports.class = GuildInformations;
module.exports.getInstance = function() {
  return new GuildInformations();
};