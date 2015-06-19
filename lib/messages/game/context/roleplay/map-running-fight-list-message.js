var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var MapRunningFightListMessage = function() {
  this.fights = [];
};

util.inherits(MapRunningFightListMessage, BaseMessage);

MapRunningFightListMessage.prototype.serialize = function(output) {
  this.serializeAs_MapRunningFightListMessage(output);
};

MapRunningFightListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_MapRunningFightListMessage(input);
};

MapRunningFightListMessage.prototype.serializeAs_MapRunningFightListMessage = function(output) {
  output.writeShort(this.fights.length);
  var _i1;
  while (_i1 < this.fights.length) {
    (this.fights[_i1]).serializeAs_FightExternalInformations(output);
    _i1++;
  };
};

MapRunningFightListMessage.prototype.deserializeAs_MapRunningFightListMessage = function(input) {
  var _item1;
  var _fightsLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _fightsLen) {
    _item1 = new FightExternalInformations();
    _item1.deserialize(input);
    this.fights.push(_item1);
    _i1++;
  };
};

MapRunningFightListMessage.prototype.getMessageId = function() {
  return 5743;
};

MapRunningFightListMessage.prototype.getClassName = function() {
  return 'MapRunningFightListMessage';
};

module.exports.id = 5743;
module.exports.class = MapRunningFightListMessage;