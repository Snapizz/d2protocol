var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GuildFactsMessage = function() {
  this.infos;
  this.creationDate = 0;
  this.nbTaxCollectors = 0;
  this.enabled = false;
  this.members = [];
};

util.inherits(GuildFactsMessage, BaseMessage);

GuildFactsMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildFactsMessage(output);
};

GuildFactsMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildFactsMessage(input);
};

GuildFactsMessage.prototype.serializeAs_GuildFactsMessage = function(output) {
  output.writeShort(this.infos.getTypeId());
  this.infos.serialize(output);
  if (this.creationDate < 0) {
    throw (new Error((("Forbidden value (" + this.creationDate) + ") on element creationDate.")));
  };
  output.writeInt(this.creationDate);
  if (this.nbTaxCollectors < 0) {
    throw (new Error((("Forbidden value (" + this.nbTaxCollectors) + ") on element nbTaxCollectors.")));
  };
  output.writeVarShort(this.nbTaxCollectors);
  output.writeBoolean(this.enabled);
  output.writeShort(this.members.length);
  var _i5;
  while (_i5 < this.members.length) {
    (this.members[_i5]).serializeAs_CharacterMinimalInformations(output);
    _i5++;
  };
};

GuildFactsMessage.prototype.deserializeAs_GuildFactsMessage = function(input) {
  var _item5;
  var _id1 = input.readUnsignedShort();
  this.infos = ProtocolTypeManager.getInstance(GuildFactSheetInformations, _id1);
  this.infos.deserialize(input);
  this.creationDate = input.readInt();
  if (this.creationDate < 0) {
    throw (new Error((("Forbidden value (" + this.creationDate) + ") on element of GuildFactsMessage.creationDate.")));
  };
  this.nbTaxCollectors = input.readVarUhShort();
  if (this.nbTaxCollectors < 0) {
    throw (new Error((("Forbidden value (" + this.nbTaxCollectors) + ") on element of GuildFactsMessage.nbTaxCollectors.")));
  };
  this.enabled = input.readBoolean();
  var _membersLen = input.readUnsignedShort();
  var _i5;
  while (_i5 < _membersLen) {
    _item5 = new CharacterMinimalInformations();
    _item5.deserialize(input);
    this.members.push(_item5);
    _i5++;
  };
};

GuildFactsMessage.prototype.getMessageId = function() {
  return 6415;
};

GuildFactsMessage.prototype.getClassName = function() {
  return 'GuildFactsMessage';
};

module.exports.id = 6415;
module.exports.class = GuildFactsMessage;