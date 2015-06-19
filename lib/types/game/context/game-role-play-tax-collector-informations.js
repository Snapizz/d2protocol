var BaseMessage = require('./roleplay/game-role-play-actor-informations.js').class,
  util = require('util');

var GameRolePlayTaxCollectorInformations = function() {
  this.identification;
  this.guildLevel = 0;
  this.taxCollectorAttack = 0;
};

util.inherits(GameRolePlayTaxCollectorInformations, BaseMessage);

GameRolePlayTaxCollectorInformations.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayTaxCollectorInformations(output);
};

GameRolePlayTaxCollectorInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayTaxCollectorInformations(input);
};

GameRolePlayTaxCollectorInformations.prototype.serializeAs_GameRolePlayTaxCollectorInformations = function(output) {
  this.serializeAs_GameRolePlayActorInformations(output);
  output.writeShort(this.identification.getTypeId());
  this.identification.serialize(output);
  if ((((this.guildLevel < 0)) || ((this.guildLevel > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.guildLevel) + ") on element guildLevel.")));
  };
  output.writeByte(this.guildLevel);
  output.writeInt(this.taxCollectorAttack);
};

GameRolePlayTaxCollectorInformations.prototype.deserializeAs_GameRolePlayTaxCollectorInformations = function(input) {
  this.deserialize(input);
  var _id1 = input.readUnsignedShort();
  this.identification = ProtocolTypeManager.getInstance(TaxCollectorStaticInformations, _id1);
  this.identification.deserialize(input);
  this.guildLevel = input.readUnsignedByte();
  if ((((this.guildLevel < 0)) || ((this.guildLevel > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.guildLevel) + ") on element of GameRolePlayTaxCollectorInformations.guildLevel.")));
  };
  this.taxCollectorAttack = input.readInt();
};

GameRolePlayTaxCollectorInformations.prototype.getTypeId = function() {
  return 148;
};

GameRolePlayTaxCollectorInformations.prototype.getClassName = function() {
  return 'GameRolePlayTaxCollectorInformations';
};

module.exports.id = 148;
module.exports.class = GameRolePlayTaxCollectorInformations;