var GameRolePlayMerchantInformations = function() {
  this.sellType = 0;
  this.options = [];
};



GameRolePlayMerchantInformations.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayMerchantInformations(output);
};

GameRolePlayMerchantInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayMerchantInformations(input);
};

GameRolePlayMerchantInformations.prototype.serializeAs_GameRolePlayMerchantInformations = function(output) {
  super.serializeAs_GameRolePlayNamedActorInformations(param1);
  if (this.sellType < 0) {
    throw new Error("Forbidden value (" + this.sellType + ") on element sellType.");
  } else {
    param1.writeByte(this.sellType);
    param1.writeShort(this.options.length);
    var _loc2_ = 0;
    while (_loc2_ < this.options.length) {
      param1.writeShort((this.options[_loc2_]).getTypeId());
      (this.options[_loc2_]).serialize(param1);
      _loc2_++;
    }
    return;
  }
};

GameRolePlayMerchantInformations.prototype.deserializeAs_GameRolePlayMerchantInformations = function(input) {
  var _loc4_ = 0;
  var _loc5_ = null;
  super.deserialize(param1);
  this.sellType = param1.readByte();
  if (this.sellType < 0) {
    throw new Error("Forbidden value (" + this.sellType + ") on element of GameRolePlayMerchantInformations.sellType.");
  } else {
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
      _loc4_ = param1.readUnsignedShort();
      _loc5_ = ProtocolTypeManager.getInstance(HumanOption, _loc4_);
      _loc5_.deserialize(param1);
      this.options.push(_loc5_);
      _loc3_++;
    }
    return;
  }
};

GameRolePlayMerchantInformations.prototype.getTypeId = function() {
  return 129;
};

GameRolePlayMerchantInformations.prototype.getClassName = function() {
  return 'GameRolePlayMerchantInformations';
};

module.exports.id = 129;
module.exports.class = GameRolePlayMerchantInformations;