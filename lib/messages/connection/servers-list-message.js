var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ServersListMessage = function() {
  this.servers = [];
};

util.inherits(ServersListMessage, BaseMessage);

ServersListMessage.prototype.serialize = function(output) {
  this.serializeAs_ServersListMessage(output);
};

ServersListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ServersListMessage(input);
};

ServersListMessage.prototype.serializeAs_ServersListMessage = function(output) {
  output.writeShort(this.servers.length);
  var _i1;
  while (_i1 < this.servers.length) {
    (this.servers[_i1]).serializeAs_GameServerInformations(output);
    _i1++;
  };
};

ServersListMessage.prototype.deserializeAs_ServersListMessage = function(input) {
  var _item1;
  var _serversLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _serversLen) {
    _item1 = new GameServerInformations();
    _item1.deserialize(input);
    this.servers.push(_item1);
    _i1++;
  };
};

ServersListMessage.prototype.getMessageId = function() {
  return 30;
};

ServersListMessage.prototype.getClassName = function() {
  return 'ServersListMessage';
};

module.exports.id = 30;
module.exports.class = ServersListMessage;