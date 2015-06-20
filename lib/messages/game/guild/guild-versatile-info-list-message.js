var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var GuildVersatileInfoListMessage = function() {
  this.guilds = [];
};

util.inherits(GuildVersatileInfoListMessage, BaseMessage);

GuildVersatileInfoListMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildVersatileInfoListMessage(output);
};

GuildVersatileInfoListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildVersatileInfoListMessage(input);
};

GuildVersatileInfoListMessage.prototype.serializeAs_GuildVersatileInfoListMessage = function(param1) {
  param1.writeShort(this.guilds.length);
  var _loc2_ = 0;
  while (_loc2_ < this.guilds.length) {
    param1.writeShort((this.guilds[_loc2_]).getTypeId());
    (this.guilds[_loc2_]).serialize(param1);
    _loc2_++;
  }
};

GuildVersatileInfoListMessage.prototype.deserializeAs_GuildVersatileInfoListMessage = function(param1) {
  var _loc4_ = 0;
  var _loc5_ = null;
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = param1.readUnsignedShort();
    _loc5_ = ProtocolTypeManager.getInstance(GuildVersatileInformations, _loc4_);
    _loc5_.deserialize(param1);
    this.guilds.push(_loc5_);
    _loc3_++;
  }
};

GuildVersatileInfoListMessage.prototype.getMessageId = function() {
  return 6435;
};

GuildVersatileInfoListMessage.prototype.getClassName = function() {
  return 'GuildVersatileInfoListMessage';
};

module.exports.id = 6435;
module.exports.class = GuildVersatileInfoListMessage;
module.exports.getInstance = function() {
  return new GuildVersatileInfoListMessage();
};