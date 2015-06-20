var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

GuildVersatileInfoListMessage.prototype.serializeAs_GuildVersatileInfoListMessage = function(output) {
  output.writeShort(this.guilds.length);
  var _i1 = 0;
  while (_i1 < this.guilds.length) {
    output.writeShort((this.guilds[_i1]).getTypeId());
    (this.guilds[_i1]).serialize(output);
    _i1++;
  };
};

GuildVersatileInfoListMessage.prototype.deserializeAs_GuildVersatileInfoListMessage = function(input) {
  var _id1 = 0;
  var _item1;
  var _guildsLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _guildsLen) {
    _id1 = input.readUnsignedShort();
    _item1 = ProtocolTypeManager.getInstance(GuildVersatileInformations, _id1);
    _item1.deserialize(input);
    this.guilds.push(_item1);
    _i1++;
  };
};

GuildVersatileInfoListMessage.prototype.getMessageId = function() {
  return 6435;
};

GuildVersatileInfoListMessage.prototype.getClassName = function() {
  return 'GuildVersatileInfoListMessage';
};

module.exports.id = 6435;
module.exports.class = GuildVersatileInfoListMessage;