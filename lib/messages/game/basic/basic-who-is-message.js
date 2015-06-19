var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var BasicWhoIsMessage = function() {
  this.self = false;
  this.position = -1;
  this.accountNickname = "";
  this.accountId = 0;
  this.playerName = "";
  this.playerId = 0;
  this.areaId = 0;
  this.socialGroups = [];
  this.verbose = false;
  this.playerState = 99;
};

util.inherits(BasicWhoIsMessage, BaseMessage);

BasicWhoIsMessage.prototype.serialize = function(output) {
  this.serializeAs_BasicWhoIsMessage(output);
};

BasicWhoIsMessage.prototype.deserialize = function(input) {
  this.deserializeAs_BasicWhoIsMessage(input);
};

BasicWhoIsMessage.prototype.serializeAs_BasicWhoIsMessage = function(output) {
  var _box0;
  _box0 = BooleanByteWrapper.setFlag(_box0, 0, this.self);
  _box0 = BooleanByteWrapper.setFlag(_box0, 1, this.verbose);
  output.writeByte(_box0);
  output.writeByte(this.position);
  output.writeUTF(this.accountNickname);
  if (this.accountId < 0) {
    throw (new Error((("Forbidden value (" + this.accountId) + ") on element accountId.")));
  };
  output.writeInt(this.accountId);
  output.writeUTF(this.playerName);
  if (this.playerId < 0) {
    throw (new Error((("Forbidden value (" + this.playerId) + ") on element playerId.")));
  };
  output.writeVarInt(this.playerId);
  output.writeShort(this.areaId);
  output.writeShort(this.socialGroups.length);
  var _i8;
  while (_i8 < this.socialGroups.length) {
    output.writeShort((this.socialGroups[_i8]).getTypeId());
    (this.socialGroups[_i8]).serialize(output);
    _i8++;
  };
  output.writeByte(this.playerState);
};

BasicWhoIsMessage.prototype.deserializeAs_BasicWhoIsMessage = function(input) {
  var _id8;
  var _item8;
  var _box0 = input.readByte();
  this.self = BooleanByteWrapper.getFlag(_box0, 0);
  this.verbose = BooleanByteWrapper.getFlag(_box0, 1);
  this.position = input.readByte();
  this.accountNickname = input.readUTF();
  this.accountId = input.readInt();
  if (this.accountId < 0) {
    throw (new Error((("Forbidden value (" + this.accountId) + ") on element of BasicWhoIsMessage.accountId.")));
  };
  this.playerName = input.readUTF();
  this.playerId = input.readVarUhInt();
  if (this.playerId < 0) {
    throw (new Error((("Forbidden value (" + this.playerId) + ") on element of BasicWhoIsMessage.playerId.")));
  };
  this.areaId = input.readShort();
  var _socialGroupsLen = input.readUnsignedShort();
  var _i8;
  while (_i8 < _socialGroupsLen) {
    _id8 = input.readUnsignedShort();
    _item8 = ProtocolTypeManager.getInstance(AbstractSocialGroupInfos, _id8);
    _item8.deserialize(input);
    this.socialGroups.push(_item8);
    _i8++;
  };
  this.playerState = input.readByte();
  if (this.playerState < 0) {
    throw (new Error((("Forbidden value (" + this.playerState) + ") on element of BasicWhoIsMessage.playerState.")));
  };
};

BasicWhoIsMessage.prototype.getMessageId = function() {
  return 180;
};

BasicWhoIsMessage.prototype.getClassName = function() {
  return 'BasicWhoIsMessage';
};

module.exports.id = 180;
module.exports.class = BasicWhoIsMessage;