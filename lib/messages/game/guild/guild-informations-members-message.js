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
  output.writeShort(this.members.length);
  var _i1;
  while (_i1 < this.members.length) {
    (this.members[_i1]).serializeAs_GuildMember(output);
    _i1++;
  };
};

GuildInformationsMembersMessage.prototype.deserializeAs_GuildInformationsMembersMessage = function(input) {
  var _item1;
  var _membersLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _membersLen) {
    _item1 = new GuildMember();
    _item1.deserialize(input);
    this.members.push(_item1);
    _i1++;
  };
};

GuildInformationsMembersMessage.prototype.getMessageId = function() {
  return 5558;
};

GuildInformationsMembersMessage.prototype.getClassName = function() {
  return 'GuildInformationsMembersMessage';
};

module.exports.id = 5558;
module.exports.class = GuildInformationsMembersMessage;