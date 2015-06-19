var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var TitlesAndOrnamentsListMessage = function() {
  this.titles = [];
  this.ornaments = [];
  this.activeTitle = 0;
  this.activeOrnament = 0;
};

util.inherits(TitlesAndOrnamentsListMessage, BaseMessage);

TitlesAndOrnamentsListMessage.prototype.serialize = function(output) {
  this.serializeAs_TitlesAndOrnamentsListMessage(output);
};

TitlesAndOrnamentsListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TitlesAndOrnamentsListMessage(input);
};

TitlesAndOrnamentsListMessage.prototype.serializeAs_TitlesAndOrnamentsListMessage = function(output) {
  output.writeShort(this.titles.length);
  var _i1;
  while (_i1 < this.titles.length) {
    if (this.titles[_i1] < 0) {
      throw (new Error((("Forbidden value (" + this.titles[_i1]) + ") on element 1 (starting at 1) of titles.")));
    };
    output.writeVarShort(this.titles[_i1]);
    _i1++;
  };
  output.writeShort(this.ornaments.length);
  var _i2;
  while (_i2 < this.ornaments.length) {
    if (this.ornaments[_i2] < 0) {
      throw (new Error((("Forbidden value (" + this.ornaments[_i2]) + ") on element 2 (starting at 1) of ornaments.")));
    };
    output.writeVarShort(this.ornaments[_i2]);
    _i2++;
  };
  if (this.activeTitle < 0) {
    throw (new Error((("Forbidden value (" + this.activeTitle) + ") on element activeTitle.")));
  };
  output.writeVarShort(this.activeTitle);
  if (this.activeOrnament < 0) {
    throw (new Error((("Forbidden value (" + this.activeOrnament) + ") on element activeOrnament.")));
  };
  output.writeVarShort(this.activeOrnament);
};

TitlesAndOrnamentsListMessage.prototype.deserializeAs_TitlesAndOrnamentsListMessage = function(input) {
  var _val1;
  var _val2;
  var _titlesLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _titlesLen) {
    _val1 = input.readVarUhShort();
    if (_val1 < 0) {
      throw (new Error((("Forbidden value (" + _val1) + ") on elements of titles.")));
    };
    this.titles.push(_val1);
    _i1++;
  };
  var _ornamentsLen = input.readUnsignedShort();
  var _i2;
  while (_i2 < _ornamentsLen) {
    _val2 = input.readVarUhShort();
    if (_val2 < 0) {
      throw (new Error((("Forbidden value (" + _val2) + ") on elements of ornaments.")));
    };
    this.ornaments.push(_val2);
    _i2++;
  };
  this.activeTitle = input.readVarUhShort();
  if (this.activeTitle < 0) {
    throw (new Error((("Forbidden value (" + this.activeTitle) + ") on element of TitlesAndOrnamentsListMessage.activeTitle.")));
  };
  this.activeOrnament = input.readVarUhShort();
  if (this.activeOrnament < 0) {
    throw (new Error((("Forbidden value (" + this.activeOrnament) + ") on element of TitlesAndOrnamentsListMessage.activeOrnament.")));
  };
};

TitlesAndOrnamentsListMessage.prototype.getMessageId = function() {
  return 6367;
};

TitlesAndOrnamentsListMessage.prototype.getClassName = function() {
  return 'TitlesAndOrnamentsListMessage';
};

module.exports.id = 6367;
module.exports.class = TitlesAndOrnamentsListMessage;