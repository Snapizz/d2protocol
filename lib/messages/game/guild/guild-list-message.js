var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var GuildListMessage = function() {
  this.guilds = [];
};

util.inherits(GuildListMessage, BaseMessage);

GuildListMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildListMessage(output);
};

GuildListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildListMessage(input);
};

GuildListMessage.prototype.serializeAs_GuildListMessage = function(param1) {
  param1.writeShort(this.guilds.length);
  var _loc2_ = 0;
  while (_loc2_ < this.guilds.length) {
    (this.guilds[_loc2_]).serializeAs_GuildInformations(param1);
    _loc2_++;
  }
};

GuildListMessage.prototype.deserializeAs_GuildListMessage = function(param1) {
  var _loc4_ = null;
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = new GuildInformations();
    _loc4_.deserialize(param1);
    this.guilds.push(_loc4_);
    _loc3_++;
  }
};

GuildListMessage.prototype.getMessageId = function() {
  return 6413;
};

GuildListMessage.prototype.getClassName = function() {
  return 'GuildListMessage';
};

module.exports.id = 6413;
module.exports.class = GuildListMessage;
module.exports.getInstance = function() {
  return new GuildListMessage();
};