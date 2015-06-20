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
  param1.writeShort(this.aliases.length);
  var _loc2_ = 0;
  while (_loc2_ < this.aliases.length) {
    param1.writeUTF(this.aliases[_loc2_]);
    _loc2_++;
  }
  param1.writeShort(this.args.length);
  var _loc3_ = 0;
  while (_loc3_ < this.args.length) {
    param1.writeUTF(this.args[_loc3_]);
    _loc3_++;
  }
  param1.writeShort(this.descriptions.length);
  var _loc4_ = 0;
  while (_loc4_ < this.descriptions.length) {
    param1.writeUTF(this.descriptions[_loc4_]);
    _loc4_++;
  }
};

ConsoleCommandsListMessage.prototype.deserializeAs_ConsoleCommandsListMessage = function(input) {
  var _loc8_ = null;
  var _loc9_ = null;
  var _loc10_ = null;
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc8_ = param1.readUTF();
    this.aliases.push(_loc8_);
    _loc3_++;
  }
  var _loc4_ = param1.readUnsignedShort();
  var _loc5_ = 0;
  while (_loc5_ < _loc4_) {
    _loc9_ = param1.readUTF();
    this.args.push(_loc9_);
    _loc5_++;
  }
  var _loc6_ = param1.readUnsignedShort();
  var _loc7_ = 0;
  while (_loc7_ < _loc6_) {
    _loc10_ = param1.readUTF();
    this.descriptions.push(_loc10_);
    _loc7_++;
  }
};

ConsoleCommandsListMessage.prototype.getMessageId = function() {
  return 6127;
};

ConsoleCommandsListMessage.prototype.getClassName = function() {
  return 'ConsoleCommandsListMessage';
};

module.exports.id = 6127;
module.exports.class = ConsoleCommandsListMessage;