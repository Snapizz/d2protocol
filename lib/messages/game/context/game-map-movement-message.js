var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameMapMovementMessage = function() {
  this.keyMovements = [];
  this.actorId = 0;
};

util.inherits(GameMapMovementMessage, BaseMessage);

GameMapMovementMessage.prototype.serialize = function(output) {
  this.serializeAs_GameMapMovementMessage(output);
};

GameMapMovementMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameMapMovementMessage(input);
};

GameMapMovementMessage.prototype.serializeAs_GameMapMovementMessage = function(output) {
  output.writeShort(this.keyMovements.length);
  var _i1;
  while (_i1 < this.keyMovements.length) {
    if (this.keyMovements[_i1] < 0) {
      throw (new Error((("Forbidden value (" + this.keyMovements[_i1]) + ") on element 1 (starting at 1) of keyMovements.")));
    };
    output.writeShort(this.keyMovements[_i1]);
    _i1++;
  };
  output.writeInt(this.actorId);
};

GameMapMovementMessage.prototype.deserializeAs_GameMapMovementMessage = function(input) {
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
  this.actorId = input.readInt();
};

GameMapMovementMessage.prototype.getMessageId = function() {
  return 951;
};

GameMapMovementMessage.prototype.getClassName = function() {
  return 'GameMapMovementMessage';
};

module.exports.id = 951;
module.exports.class = GameMapMovementMessage;