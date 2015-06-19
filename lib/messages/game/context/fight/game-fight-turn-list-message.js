var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameFightTurnListMessage = function() {
  this.ids = [];
  this.deadsIds = [];
};

util.inherits(GameFightTurnListMessage, BaseMessage);

GameFightTurnListMessage.prototype.serialize = function(output) {
  this.serializeAs_GameFightTurnListMessage(output);
};

GameFightTurnListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightTurnListMessage(input);
};

GameFightTurnListMessage.prototype.serializeAs_GameFightTurnListMessage = function(output) {
  output.writeShort(this.ids.length);
  var _i1;
  while (_i1 < this.ids.length) {
    output.writeInt(this.ids[_i1]);
    _i1++;
  };
  output.writeShort(this.deadsIds.length);
  var _i2;
  while (_i2 < this.deadsIds.length) {
    output.writeInt(this.deadsIds[_i2]);
    _i2++;
  };
};

GameFightTurnListMessage.prototype.deserializeAs_GameFightTurnListMessage = function(input) {
  var _val1;
  var _val2;
  var _idsLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _idsLen) {
    _val1 = input.readInt();
    this.ids.push(_val1);
    _i1++;
  };
  var _deadsIdsLen = input.readUnsignedShort();
  var _i2;
  while (_i2 < _deadsIdsLen) {
    _val2 = input.readInt();
    this.deadsIds.push(_val2);
    _i2++;
  };
};

GameFightTurnListMessage.prototype.getMessageId = function() {
  return 713;
};

GameFightTurnListMessage.prototype.getClassName = function() {
  return 'GameFightTurnListMessage';
};

module.exports.id = 713;
module.exports.class = GameFightTurnListMessage;