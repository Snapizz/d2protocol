var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ObjectGroundListAddedMessage = function() {
  this.cells = [];
  this.referenceIds = [];
};

util.inherits(ObjectGroundListAddedMessage, BaseMessage);

ObjectGroundListAddedMessage.prototype.serialize = function(output) {
  this.serializeAs_ObjectGroundListAddedMessage(output);
};

ObjectGroundListAddedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectGroundListAddedMessage(input);
};

ObjectGroundListAddedMessage.prototype.serializeAs_ObjectGroundListAddedMessage = function(output) {
  output.writeShort(this.cells.length);
  var _i1;
  while (_i1 < this.cells.length) {
    if ((((this.cells[_i1] < 0)) || ((this.cells[_i1] > 559)))) {
      throw (new Error((("Forbidden value (" + this.cells[_i1]) + ") on element 1 (starting at 1) of cells.")));
    };
    output.writeVarShort(this.cells[_i1]);
    _i1++;
  };
  output.writeShort(this.referenceIds.length);
  var _i2;
  while (_i2 < this.referenceIds.length) {
    if (this.referenceIds[_i2] < 0) {
      throw (new Error((("Forbidden value (" + this.referenceIds[_i2]) + ") on element 2 (starting at 1) of referenceIds.")));
    };
    output.writeVarShort(this.referenceIds[_i2]);
    _i2++;
  };
};

ObjectGroundListAddedMessage.prototype.deserializeAs_ObjectGroundListAddedMessage = function(input) {
  var _val1;
  var _val2;
  var _cellsLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _cellsLen) {
    _val1 = input.readVarUhShort();
    if ((((_val1 < 0)) || ((_val1 > 559)))) {
      throw (new Error((("Forbidden value (" + _val1) + ") on elements of cells.")));
    };
    this.cells.push(_val1);
    _i1++;
  };
  var _referenceIdsLen = input.readUnsignedShort();
  var _i2;
  while (_i2 < _referenceIdsLen) {
    _val2 = input.readVarUhShort();
    if (_val2 < 0) {
      throw (new Error((("Forbidden value (" + _val2) + ") on elements of referenceIds.")));
    };
    this.referenceIds.push(_val2);
    _i2++;
  };
};

ObjectGroundListAddedMessage.prototype.getMessageId = function() {
  return 5925;
};

ObjectGroundListAddedMessage.prototype.getClassName = function() {
  return 'ObjectGroundListAddedMessage';
};

module.exports.id = 5925;
module.exports.class = ObjectGroundListAddedMessage;