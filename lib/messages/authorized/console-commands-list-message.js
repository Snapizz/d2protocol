var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ConsoleCommandsListMessage = function() {
  this.aliases = [];
  this.args = [];
  this.descriptions = [];
};

util.inherits(ConsoleCommandsListMessage, BaseMessage);

ConsoleCommandsListMessage.prototype.serialize = function(output) {
  this.serializeAs_ConsoleCommandsListMessage(output);
};

ConsoleCommandsListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ConsoleCommandsListMessage(input);
};

ConsoleCommandsListMessage.prototype.serializeAs_ConsoleCommandsListMessage = function(output) {
  output.writeShort(this.aliases.length);
  var _i1;
  while (_i1 < this.aliases.length) {
    output.writeUTF(this.aliases[_i1]);
    _i1++;
  };
  output.writeShort(this.args.length);
  var _i2;
  while (_i2 < this.args.length) {
    output.writeUTF(this.args[_i2]);
    _i2++;
  };
  output.writeShort(this.descriptions.length);
  var _i3;
  while (_i3 < this.descriptions.length) {
    output.writeUTF(this.descriptions[_i3]);
    _i3++;
  };
};

ConsoleCommandsListMessage.prototype.deserializeAs_ConsoleCommandsListMessage = function(input) {
  var _val1;
  var _val2;
  var _val3;
  var _aliasesLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _aliasesLen) {
    _val1 = input.readUTF();
    this.aliases.push(_val1);
    _i1++;
  };
  var _argsLen = input.readUnsignedShort();
  var _i2;
  while (_i2 < _argsLen) {
    _val2 = input.readUTF();
    this.args.push(_val2);
    _i2++;
  };
  var _descriptionsLen = input.readUnsignedShort();
  var _i3;
  while (_i3 < _descriptionsLen) {
    _val3 = input.readUTF();
    this.descriptions.push(_val3);
    _i3++;
  };
};

ConsoleCommandsListMessage.prototype.getMessageId = function() {
  return 6127;
};

ConsoleCommandsListMessage.prototype.getClassName = function() {
  return 'ConsoleCommandsListMessage';
};

module.exports.id = 6127;
module.exports.class = ConsoleCommandsListMessage;