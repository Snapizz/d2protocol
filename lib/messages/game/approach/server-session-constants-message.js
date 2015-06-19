var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ServerSessionConstantsMessage = function() {
  this.variables = [];
};

util.inherits(ServerSessionConstantsMessage, BaseMessage);

ServerSessionConstantsMessage.prototype.serialize = function(output) {
  this.serializeAs_ServerSessionConstantsMessage(output);
};

ServerSessionConstantsMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ServerSessionConstantsMessage(input);
};

ServerSessionConstantsMessage.prototype.serializeAs_ServerSessionConstantsMessage = function(output) {
  output.writeShort(this.variables.length);
  var _i1;
  while (_i1 < this.variables.length) {
    output.writeShort((this.variables[_i1]).getTypeId());
    (this.variables[_i1]).serialize(output);
    _i1++;
  };
};

ServerSessionConstantsMessage.prototype.deserializeAs_ServerSessionConstantsMessage = function(input) {
  var _id1;
  var _item1;
  var _variablesLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _variablesLen) {
    _id1 = input.readUnsignedShort();
    _item1 = ProtocolTypeManager.getInstance(ServerSessionConstant, _id1);
    _item1.deserialize(input);
    this.variables.push(_item1);
    _i1++;
  };
};

ServerSessionConstantsMessage.prototype.getMessageId = function() {
  return 6434;
};

ServerSessionConstantsMessage.prototype.getClassName = function() {
  return 'ServerSessionConstantsMessage';
};

module.exports.id = 6434;
module.exports.class = ServerSessionConstantsMessage;