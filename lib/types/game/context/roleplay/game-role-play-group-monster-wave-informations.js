var BaseMessage = require('./game-role-play-group-monster-informations.js').class,
  util = require('util');

var GameRolePlayGroupMonsterWaveInformations = function() {
  this.nbWaves = 0;
  this.alternatives = [];
};

util.inherits(GameRolePlayGroupMonsterWaveInformations, BaseMessage);

GameRolePlayGroupMonsterWaveInformations.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayGroupMonsterWaveInformations(output);
};

GameRolePlayGroupMonsterWaveInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayGroupMonsterWaveInformations(input);
};

GameRolePlayGroupMonsterWaveInformations.prototype.serializeAs_GameRolePlayGroupMonsterWaveInformations = function(output) {
  this.serializeAs_GameRolePlayGroupMonsterInformations(output);
  if (this.nbWaves < 0) {
    throw (new Error((("Forbidden value (" + this.nbWaves) + ") on element nbWaves.")));
  };
  output.writeByte(this.nbWaves);
  output.writeShort(this.alternatives.length);
  var _i2;
  while (_i2 < this.alternatives.length) {
    output.writeShort((this.alternatives[_i2]).getTypeId());
    (this.alternatives[_i2]).serialize(output);
    _i2++;
  };
};

GameRolePlayGroupMonsterWaveInformations.prototype.deserializeAs_GameRolePlayGroupMonsterWaveInformations = function(input) {
  var _id2;
  var _item2;
  this.deserialize(input);
  this.nbWaves = input.readByte();
  if (this.nbWaves < 0) {
    throw (new Error((("Forbidden value (" + this.nbWaves) + ") on element of GameRolePlayGroupMonsterWaveInformations.nbWaves.")));
  };
  var _alternativesLen = input.readUnsignedShort();
  var _i2;
  while (_i2 < _alternativesLen) {
    _id2 = input.readUnsignedShort();
    _item2 = ProtocolTypeManager.getInstance(GroupMonsterStaticInformations, _id2);
    _item2.deserialize(input);
    this.alternatives.push(_item2);
    _i2++;
  };
};

GameRolePlayGroupMonsterWaveInformations.prototype.getTypeId = function() {
  return 464;
};

GameRolePlayGroupMonsterWaveInformations.prototype.getClassName = function() {
  return 'GameRolePlayGroupMonsterWaveInformations';
};

module.exports.id = 464;
module.exports.class = GameRolePlayGroupMonsterWaveInformations;