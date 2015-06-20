var GameRolePlayGroupMonsterWaveInformations = function() {
  this.nbWaves = 0;
  this.alternatives = [];
};



GameRolePlayGroupMonsterWaveInformations.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayGroupMonsterWaveInformations(output);
};

GameRolePlayGroupMonsterWaveInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayGroupMonsterWaveInformations(input);
};

GameRolePlayGroupMonsterWaveInformations.prototype.serializeAs_GameRolePlayGroupMonsterWaveInformations = function(param1) {
  this.serializeAs_GameRolePlayGroupMonsterInformations(param1);
  if (this.nbWaves < 0) {
    throw new Error("Forbidden value (" + this.nbWaves + ") on element nbWaves.");
  } else {
    param1.writeByte(this.nbWaves);
    param1.writeShort(this.alternatives.length);
    var _loc2_ = 0;
    while (_loc2_ < this.alternatives.length) {
      param1.writeShort((this.alternatives[_loc2_]).getTypeId());
      (this.alternatives[_loc2_]).serialize(param1);
      _loc2_++;
    }
    return;
  }
};

GameRolePlayGroupMonsterWaveInformations.prototype.deserializeAs_GameRolePlayGroupMonsterWaveInformations = function(param1) {
  var _loc4_ = 0;
  var _loc5_ = null;
  super.deserialize(param1);
  this.nbWaves = param1.readByte();
  if (this.nbWaves < 0) {
    throw new Error("Forbidden value (" + this.nbWaves + ") on element of GameRolePlayGroupMonsterWaveInformations.nbWaves.");
  } else {
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
      _loc4_ = param1.readUnsignedShort();
      _loc5_ = ProtocolTypeManager.getInstance(GroupMonsterStaticInformations, _loc4_);
      _loc5_.deserialize(param1);
      this.alternatives.push(_loc5_);
      _loc3_++;
    }
    return;
  }
};

GameRolePlayGroupMonsterWaveInformations.prototype.getTypeId = function() {
  return 464;
};

GameRolePlayGroupMonsterWaveInformations.prototype.getClassName = function() {
  return 'GameRolePlayGroupMonsterWaveInformations';
};

module.exports.id = 464;
module.exports.class = GameRolePlayGroupMonsterWaveInformations;
module.exports.getInstance = function() {
  return new GameRolePlayGroupMonsterWaveInformations();
};