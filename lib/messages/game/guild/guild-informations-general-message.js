var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GuildInformationsGeneralMessage = function() {
  this.enabled = false;
  this.abandonnedPaddock = false;
  this.level = 0;
  this.expLevelFloor = 0;
  this.experience = 0;
  this.expNextLevelFloor = 0;
  this.creationDate = 0;
  this.nbTotalMembers = 0;
  this.nbConnectedMembers = 0;
};

util.inherits(GuildInformationsGeneralMessage, BaseMessage);

GuildInformationsGeneralMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildInformationsGeneralMessage(output);
};

GuildInformationsGeneralMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildInformationsGeneralMessage(input);
};

GuildInformationsGeneralMessage.prototype.serializeAs_GuildInformationsGeneralMessage = function(output) {
  var _box0;
  _box0 = BooleanByteWrapper.setFlag(_box0, 0, this.enabled);
  _box0 = BooleanByteWrapper.setFlag(_box0, 1, this.abandonnedPaddock);
  output.writeByte(_box0);
  if ((((this.level < 0)) || ((this.level > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.level) + ") on element level.")));
  };
  output.writeByte(this.level);
  if ((((this.expLevelFloor < 0)) || ((this.expLevelFloor > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.expLevelFloor) + ") on element expLevelFloor.")));
  };
  output.writeVarLong(this.expLevelFloor);
  if ((((this.experience < 0)) || ((this.experience > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.experience) + ") on element experience.")));
  };
  output.writeVarLong(this.experience);
  if ((((this.expNextLevelFloor < 0)) || ((this.expNextLevelFloor > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.expNextLevelFloor) + ") on element expNextLevelFloor.")));
  };
  output.writeVarLong(this.expNextLevelFloor);
  if (this.creationDate < 0) {
    throw (new Error((("Forbidden value (" + this.creationDate) + ") on element creationDate.")));
  };
  output.writeInt(this.creationDate);
  if (this.nbTotalMembers < 0) {
    throw (new Error((("Forbidden value (" + this.nbTotalMembers) + ") on element nbTotalMembers.")));
  };
  output.writeVarShort(this.nbTotalMembers);
  if (this.nbConnectedMembers < 0) {
    throw (new Error((("Forbidden value (" + this.nbConnectedMembers) + ") on element nbConnectedMembers.")));
  };
  output.writeVarShort(this.nbConnectedMembers);
};

GuildInformationsGeneralMessage.prototype.deserializeAs_GuildInformationsGeneralMessage = function(input) {
  var _box0 = input.readByte();
  this.enabled = BooleanByteWrapper.getFlag(_box0, 0);
  this.abandonnedPaddock = BooleanByteWrapper.getFlag(_box0, 1);
  this.level = input.readUnsignedByte();
  if ((((this.level < 0)) || ((this.level > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.level) + ") on element of GuildInformationsGeneralMessage.level.")));
  };
  this.expLevelFloor = input.readVarUhLong();
  if ((((this.expLevelFloor < 0)) || ((this.expLevelFloor > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.expLevelFloor) + ") on element of GuildInformationsGeneralMessage.expLevelFloor.")));
  };
  this.experience = input.readVarUhLong();
  if ((((this.experience < 0)) || ((this.experience > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.experience) + ") on element of GuildInformationsGeneralMessage.experience.")));
  };
  this.expNextLevelFloor = input.readVarUhLong();
  if ((((this.expNextLevelFloor < 0)) || ((this.expNextLevelFloor > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.expNextLevelFloor) + ") on element of GuildInformationsGeneralMessage.expNextLevelFloor.")));
  };
  this.creationDate = input.readInt();
  if (this.creationDate < 0) {
    throw (new Error((("Forbidden value (" + this.creationDate) + ") on element of GuildInformationsGeneralMessage.creationDate.")));
  };
  this.nbTotalMembers = input.readVarUhShort();
  if (this.nbTotalMembers < 0) {
    throw (new Error((("Forbidden value (" + this.nbTotalMembers) + ") on element of GuildInformationsGeneralMessage.nbTotalMembers.")));
  };
  this.nbConnectedMembers = input.readVarUhShort();
  if (this.nbConnectedMembers < 0) {
    throw (new Error((("Forbidden value (" + this.nbConnectedMembers) + ") on element of GuildInformationsGeneralMessage.nbConnectedMembers.")));
  };
};

GuildInformationsGeneralMessage.prototype.getMessageId = function() {
  return 5557;
};

GuildInformationsGeneralMessage.prototype.getClassName = function() {
  return 'GuildInformationsGeneralMessage';
};

module.exports.id = 5557;
module.exports.class = GuildInformationsGeneralMessage;