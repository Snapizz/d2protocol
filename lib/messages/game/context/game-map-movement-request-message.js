var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameMapMovementRequestMessage = function() {
  this.keyMovements = [];
  this.mapId = 0;
};

util.inherits(GameMapMovementRequestMessage, BaseMessage);

GameMapMovementRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_GameMapMovementRequestMessage(output);
};

GameMapMovementRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameMapMovementRequestMessage(input);
};

GameMapMovementRequestMessage.prototype.serializeAs_GameMapMovementRequestMessage = function(output) {
  output.writeShort(this.keyMovements.length);
  var _i1;
  while (_i1 < this.keyMovements.length) {
    if (this.keyMovements[_i1] < 0) {
      throw (new Error((("Forbidden value (" + this.keyMovements[_i1]) + ") on element 1 (starting at 1) of keyMovements.")));
    };
    output.writeShort(this.keyMovements[_i1]);
    _i1++;
  };
  if (this.mapId < 0) {
    throw (new Error((("Forbidden value (" + this.mapId) + ") on element mapId.")));
  };
  output.writeInt(this.mapId);
};

GameMapMovementRequestMessage.prototype.deserializeAs_GameMapMovementRequestMessage = function(input) {
  var _val1;
  var _keyMovementsLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _keyMovementsLen) {
    _val1 = input.readShort();
    if (_val1 < 0) {
      throw (new Error((("Forbidden value (" + _val1) + ") on elements of keyMovements.")));
    };
    this.keyMovements.push(_val1);
    _i1++;
  };
  this.mapId = input.readInt();
  if (this.mapId < 0) {
    throw (new Error((("Forbidden value (" + this.mapId) + ") on element of GameMapMovementRequestMessage.mapId.")));
  };
};

GameMapMovementRequestMessage.prototype.getMessageId = function() {
  return 950;
};

GameMapMovementRequestMessage.prototype.getClassName = function() {
  return 'GameMapMovementRequestMessage';
};

module.exports.id = 950;
module.exports.class = GameMapMovementRequestMessage;