var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var DungeonKeyRingMessage = function() {
  this.availables = [];
  this.unavailables = [];
};

util.inherits(DungeonKeyRingMessage, BaseMessage);

DungeonKeyRingMessage.prototype.serialize = function(output) {
  this.serializeAs_DungeonKeyRingMessage(output);
};

DungeonKeyRingMessage.prototype.deserialize = function(input) {
  this.deserializeAs_DungeonKeyRingMessage(input);
};

DungeonKeyRingMessage.prototype.serializeAs_DungeonKeyRingMessage = function(output) {
  output.writeShort(this.availables.length);
  var _i1 = 0;
  while (_i1 < this.availables.length) {
    if (this.availables[_i1] < 0) {
      throw (new Error((("Forbidden value (" + this.availables[_i1]) + ") on element 1 (starting at 1) of availables.")));
    };
    output.writeVarShort(this.availables[_i1]);
    _i1++;
  };
  output.writeShort(this.unavailables.length);
  var _i2 = 0;
  while (_i2 < this.unavailables.length) {
    if (this.unavailables[_i2] < 0) {
      throw (new Error((("Forbidden value (" + this.unavailables[_i2]) + ") on element 2 (starting at 1) of unavailables.")));
    };
    output.writeVarShort(this.unavailables[_i2]);
    _i2++;
  };
};

DungeonKeyRingMessage.prototype.deserializeAs_DungeonKeyRingMessage = function(input) {
  var _val1 = 0;
  var _val2 = 0;
  var _availablesLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _availablesLen) {
    _val1 = input.readVarUhShort();
    if (_val1 < 0) {
      throw (new Error((("Forbidden value (" + _val1) + ") on elements of availables.")));
    };
    this.availables.push(_val1);
    _i1++;
  };
  var _unavailablesLen = input.readUnsignedShort();
  var _i2 = 0;
  while (_i2 < _unavailablesLen) {
    _val2 = input.readVarUhShort();
    if (_val2 < 0) {
      throw (new Error((("Forbidden value (" + _val2) + ") on elements of unavailables.")));
    };
    this.unavailables.push(_val2);
    _i2++;
  };
};

DungeonKeyRingMessage.prototype.getMessageId = function() {
  return 6299;
};

DungeonKeyRingMessage.prototype.getClassName = function() {
  return 'DungeonKeyRingMessage';
};

module.exports.id = 6299;
module.exports.class = DungeonKeyRingMessage;