var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameDataPlayFarmObjectAnimationMessage = function() {
  this.cellId = [];
};

util.inherits(GameDataPlayFarmObjectAnimationMessage, BaseMessage);

GameDataPlayFarmObjectAnimationMessage.prototype.serialize = function(output) {
  this.serializeAs_GameDataPlayFarmObjectAnimationMessage(output);
};

GameDataPlayFarmObjectAnimationMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameDataPlayFarmObjectAnimationMessage(input);
};

GameDataPlayFarmObjectAnimationMessage.prototype.serializeAs_GameDataPlayFarmObjectAnimationMessage = function(output) {
  output.writeShort(this.cellId.length);
  var _i1 = 0;
  while (_i1 < this.cellId.length) {
    if ((((this.cellId[_i1] < 0)) || ((this.cellId[_i1] > 559)))) {
      throw (new Error((("Forbidden value (" + this.cellId[_i1]) + ") on element 1 (starting at 1) of cellId.")));
    };
    output.writeVarShort(this.cellId[_i1]);
    _i1++;
  };
};

GameDataPlayFarmObjectAnimationMessage.prototype.deserializeAs_GameDataPlayFarmObjectAnimationMessage = function(input) {
  var _val1 = 0;
  var _cellIdLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _cellIdLen) {
    _val1 = input.readVarUhShort();
    if ((((_val1 < 0)) || ((_val1 > 559)))) {
      throw (new Error((("Forbidden value (" + _val1) + ") on elements of cellId.")));
    };
    this.cellId.push(_val1);
    _i1++;
  };
};

GameDataPlayFarmObjectAnimationMessage.prototype.getMessageId = function() {
  return 6026;
};

GameDataPlayFarmObjectAnimationMessage.prototype.getClassName = function() {
  return 'GameDataPlayFarmObjectAnimationMessage';
};

module.exports.id = 6026;
module.exports.class = GameDataPlayFarmObjectAnimationMessage;