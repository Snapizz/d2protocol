var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var StartupActionsListMessage = function() {
  this.actions = [];
};

util.inherits(StartupActionsListMessage, BaseMessage);

StartupActionsListMessage.prototype.serialize = function(output) {
  this.serializeAs_StartupActionsListMessage(output);
};

StartupActionsListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_StartupActionsListMessage(input);
};

StartupActionsListMessage.prototype.serializeAs_StartupActionsListMessage = function(output) {
  output.writeShort(this.actions.length);
  var _i1 = 0;
  while (_i1 < this.actions.length) {
    (this.actions[_i1]).serializeAs_StartupActionAddObject(output);
    _i1++;
  };
};

StartupActionsListMessage.prototype.deserializeAs_StartupActionsListMessage = function(input) {
  var _item1;
  var _actionsLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _actionsLen) {
    _item1 = new StartupActionAddObject();
    _item1.deserialize(input);
    this.actions.push(_item1);
    _i1++;
  };
};

StartupActionsListMessage.prototype.getMessageId = function() {
  return 1301;
};

StartupActionsListMessage.prototype.getClassName = function() {
  return 'StartupActionsListMessage';
};

module.exports.id = 1301;
module.exports.class = StartupActionsListMessage;