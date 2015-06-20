var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ChallengeTargetsListMessage = function() {
  this.targetIds = [];
  this.targetCells = [];
};

util.inherits(ChallengeTargetsListMessage, BaseMessage);

ChallengeTargetsListMessage.prototype.serialize = function(output) {
  this.serializeAs_ChallengeTargetsListMessage(output);
};

ChallengeTargetsListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ChallengeTargetsListMessage(input);
};

ChallengeTargetsListMessage.prototype.serializeAs_ChallengeTargetsListMessage = function(output) {
  output.writeShort(this.targetIds.length);
  var _i1 = 0;
  while (_i1 < this.targetIds.length) {
    output.writeInt(this.targetIds[_i1]);
    _i1++;
  };
  output.writeShort(this.targetCells.length);
  var _i2 = 0;
  while (_i2 < this.targetCells.length) {
    if ((((this.targetCells[_i2] < -1)) || ((this.targetCells[_i2] > 559)))) {
      throw (new Error((("Forbidden value (" + this.targetCells[_i2]) + ") on element 2 (starting at 1) of targetCells.")));
    };
    output.writeShort(this.targetCells[_i2]);
    _i2++;
  };
};

ChallengeTargetsListMessage.prototype.deserializeAs_ChallengeTargetsListMessage = function(input) {
  var _val1 = 0;
  var _val2 = 0;
  var _targetIdsLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _targetIdsLen) {
    _val1 = input.readInt();
    this.targetIds.push(_val1);
    _i1++;
  };
  var _targetCellsLen = input.readUnsignedShort();
  var _i2 = 0;
  while (_i2 < _targetCellsLen) {
    _val2 = input.readShort();
    if ((((_val2 < -1)) || ((_val2 > 559)))) {
      throw (new Error((("Forbidden value (" + _val2) + ") on elements of targetCells.")));
    };
    this.targetCells.push(_val2);
    _i2++;
  };
};

ChallengeTargetsListMessage.prototype.getMessageId = function() {
  return 5613;
};

ChallengeTargetsListMessage.prototype.getClassName = function() {
  return 'ChallengeTargetsListMessage';
};

module.exports.id = 5613;
module.exports.class = ChallengeTargetsListMessage;