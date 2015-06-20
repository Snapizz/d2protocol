var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var MapRunningFightDetailsMessage = function() {
  this.fightId = 0;
  this.attackers = [];
  this.defenders = [];
};

util.inherits(MapRunningFightDetailsMessage, BaseMessage);

MapRunningFightDetailsMessage.prototype.serialize = function(output) {
  this.serializeAs_MapRunningFightDetailsMessage(output);
};

MapRunningFightDetailsMessage.prototype.deserialize = function(input) {
  this.deserializeAs_MapRunningFightDetailsMessage(input);
};

MapRunningFightDetailsMessage.prototype.serializeAs_MapRunningFightDetailsMessage = function(output) {
  if (this.fightId < 0) {
    throw (new Error((("Forbidden value (" + this.fightId) + ") on element fightId.")));
  };
  output.writeInt(this.fightId);
  output.writeShort(this.attackers.length);
  var _i2 = 0;
  while (_i2 < this.attackers.length) {
    output.writeShort((this.attackers[_i2]).getTypeId());
    (this.attackers[_i2]).serialize(output);
    _i2++;
  };
  output.writeShort(this.defenders.length);
  var _i3 = 0;
  while (_i3 < this.defenders.length) {
    output.writeShort((this.defenders[_i3]).getTypeId());
    (this.defenders[_i3]).serialize(output);
    _i3++;
  };
};

MapRunningFightDetailsMessage.prototype.deserializeAs_MapRunningFightDetailsMessage = function(input) {
  var _id2 = 0;
  var _item2;
  var _id3 = 0;
  var _item3;
  this.fightId = input.readInt();
  if (this.fightId < 0) {
    throw (new Error((("Forbidden value (" + this.fightId) + ") on element of MapRunningFightDetailsMessage.fightId.")));
  };
  var _attackersLen = input.readUnsignedShort();
  var _i2 = 0;
  while (_i2 < _attackersLen) {
    _id2 = input.readUnsignedShort();
    _item2 = ProtocolTypeManager.getInstance(GameFightFighterLightInformations, _id2);
    _item2.deserialize(input);
    this.attackers.push(_item2);
    _i2++;
  };
  var _defendersLen = input.readUnsignedShort();
  var _i3 = 0;
  while (_i3 < _defendersLen) {
    _id3 = input.readUnsignedShort();
    _item3 = ProtocolTypeManager.getInstance(GameFightFighterLightInformations, _id3);
    _item3.deserialize(input);
    this.defenders.push(_item3);
    _i3++;
  };
};

MapRunningFightDetailsMessage.prototype.getMessageId = function() {
  return 5751;
};

MapRunningFightDetailsMessage.prototype.getClassName = function() {
  return 'MapRunningFightDetailsMessage';
};

module.exports.id = 5751;
module.exports.class = MapRunningFightDetailsMessage;