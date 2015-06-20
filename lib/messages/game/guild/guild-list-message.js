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

GuildListMessage.prototype.serializeAs_GuildListMessage = function(output) {
  output.writeShort(this.guilds.length);
  var _i1 = 0;
  while (_i1 < this.guilds.length) {
    (this.guilds[_i1]).serializeAs_GuildInformations(output);
    _i1++;
  };
};

GuildListMessage.prototype.deserializeAs_GuildListMessage = function(input) {
  var _item1;
  var _guildsLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _guildsLen) {
    _item1 = new GuildInformations();
    _item1.deserialize(input);
    this.guilds.push(_item1);
    _i1++;
  };
};

GuildListMessage.prototype.getMessageId = function() {
  return 6413;
};

GuildListMessage.prototype.getClassName = function() {
  return 'GuildListMessage';
};

module.exports.id = 6413;
module.exports.class = GuildListMessage;