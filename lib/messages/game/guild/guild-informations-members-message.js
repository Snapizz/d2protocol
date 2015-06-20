var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GuildInformationsMembersMessage = function() {
  this.members = [];
};

util.inherits(GuildInformationsMembersMessage, BaseMessage);

GuildInformationsMembersMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildInformationsMembersMessage(output);
};

GuildInformationsMembersMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildInformationsMembersMessage(input);
};

GuildInformationsMembersMessage.prototype.serializeAs_GuildInformationsMembersMessage = function(output) {
  param1.writeShort(this.members.length);
  var _loc2_ = 0;
  while (_loc2_ < this.members.length) {
    (this.members[_loc2_]).serializeAs_GuildMember(param1);
    _loc2_++;
  }
};

GuildInformationsMembersMessage.prototype.deserializeAs_GuildInformationsMembersMessage = function(input) {
  var _loc4_ = null;
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = new GuildMember();
    _loc4_.deserialize(param1);
    this.members.push(_loc4_);
    _loc3_++;
  }
};

GuildInformationsMembersMessage.prototype.getMessageId = function() {
  return 5558;
};

GuildInformationsMembersMessage.prototype.getClassName = function() {
  return 'GuildInformationsMembersMessage';
};

module.exports.id = 5558;
module.exports.class = GuildInformationsMembersMessage;