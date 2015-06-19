var BaseMessage = require('./game-role-play-named-actor-informations.js').class,
  util = require('util');

var GameRolePlayMerchantInformations = function() {
  this.sellType = 0;
  this.options = [];
};

util.inherits(GameRolePlayMerchantInformations, BaseMessage);

GameRolePlayMerchantInformations.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayMerchantInformations(output);
};

GameRolePlayMerchantInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayMerchantInformations(input);
};

GameRolePlayMerchantInformations.prototype.serializeAs_GameRolePlayMerchantInformations = function(output) {
  this.serializeAs_GameRolePlayNamedActorInformations(output);
  if (this.sellType < 0) {
    throw (new Error((("Forbidden value (" + this.sellType) + ") on element sellType.")));
  };
  output.writeByte(this.sellType);
  output.writeShort(this.options.length);
  var _i2;
  while (_i2 < this.options.length) {
    output.writeShort((this.options[_i2]).getTypeId());
    (this.options[_i2]).serialize(output);
    _i2++;
  };
};

GameRolePlayMerchantInformations.prototype.deserializeAs_GameRolePlayMerchantInformations = function(input) {
  var _id2;
  var _item2;
  this.deserialize(input);
  this.sellType = input.readByte();
  if (this.sellType < 0) {
    throw (new Error((("Forbidden value (" + this.sellType) + ") on element of GameRolePlayMerchantInformations.sellType.")));
  };
  var _optionsLen = input.readUnsignedShort();
  var _i2;
  while (_i2 < _optionsLen) {
    _id2 = input.readUnsignedShort();
    _item2 = ProtocolTypeManager.getInstance(HumanOption, _id2);
    _item2.deserialize(input);
    this.options.push(_item2);
    _i2++;
  };
};

GameRolePlayMerchantInformations.prototype.getTypeId = function() {
  return 129;
};

GameRolePlayMerchantInformations.prototype.getClassName = function() {
  return 'GameRolePlayMerchantInformations';
};

module.exports.id = 129;
module.exports.class = GameRolePlayMerchantInformations;