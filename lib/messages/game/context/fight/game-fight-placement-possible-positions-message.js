var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameFightPlacementPossiblePositionsMessage = function() {
  this.positionsForChallengers = [];
  this.positionsForDefenders = [];
  this.teamNumber = 2;
};

util.inherits(GameFightPlacementPossiblePositionsMessage, BaseMessage);

GameFightPlacementPossiblePositionsMessage.prototype.serialize = function(output) {
  this.serializeAs_GameFightPlacementPossiblePositionsMessage(output);
};

GameFightPlacementPossiblePositionsMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightPlacementPossiblePositionsMessage(input);
};

GameFightPlacementPossiblePositionsMessage.prototype.serializeAs_GameFightPlacementPossiblePositionsMessage = function(output) {
  output.writeShort(this.positionsForChallengers.length);
  var _i1;
  while (_i1 < this.positionsForChallengers.length) {
    if ((((this.positionsForChallengers[_i1] < 0)) || ((this.positionsForChallengers[_i1] > 559)))) {
      throw (new Error((("Forbidden value (" + this.positionsForChallengers[_i1]) + ") on element 1 (starting at 1) of positionsForChallengers.")));
    };
    output.writeVarShort(this.positionsForChallengers[_i1]);
    _i1++;
  };
  output.writeShort(this.positionsForDefenders.length);
  var _i2;
  while (_i2 < this.positionsForDefenders.length) {
    if ((((this.positionsForDefenders[_i2] < 0)) || ((this.positionsForDefenders[_i2] > 559)))) {
      throw (new Error((("Forbidden value (" + this.positionsForDefenders[_i2]) + ") on element 2 (starting at 1) of positionsForDefenders.")));
    };
    output.writeVarShort(this.positionsForDefenders[_i2]);
    _i2++;
  };
  output.writeByte(this.teamNumber);
};

GameFightPlacementPossiblePositionsMessage.prototype.deserializeAs_GameFightPlacementPossiblePositionsMessage = function(input) {
  var _val1;
  var _val2;
  var _positionsForChallengersLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _positionsForChallengersLen) {
    _val1 = input.readVarUhShort();
    if ((((_val1 < 0)) || ((_val1 > 559)))) {
      throw (new Error((("Forbidden value (" + _val1) + ") on elements of positionsForChallengers.")));
    };
    this.positionsForChallengers.push(_val1);
    _i1++;
  };
  var _positionsForDefendersLen = input.readUnsignedShort();
  var _i2;
  while (_i2 < _positionsForDefendersLen) {
    _val2 = input.readVarUhShort();
    if ((((_val2 < 0)) || ((_val2 > 559)))) {
      throw (new Error((("Forbidden value (" + _val2) + ") on elements of positionsForDefenders.")));
    };
    this.positionsForDefenders.push(_val2);
    _i2++;
  };
  this.teamNumber = input.readByte();
  if (this.teamNumber < 0) {
    throw (new Error((("Forbidden value (" + this.teamNumber) + ") on element of GameFightPlacementPossiblePositionsMessage.teamNumber.")));
  };
};

GameFightPlacementPossiblePositionsMessage.prototype.getMessageId = function() {
  return 703;
};

GameFightPlacementPossiblePositionsMessage.prototype.getClassName = function() {
  return 'GameFightPlacementPossiblePositionsMessage';
};

module.exports.id = 703;
module.exports.class = GameFightPlacementPossiblePositionsMessage;