var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AcquaintanceServerListMessage = function() {
  this.servers = [];
};

util.inherits(AcquaintanceServerListMessage, BaseMessage);

AcquaintanceServerListMessage.prototype.serialize = function(output) {
  this.serializeAs_AcquaintanceServerListMessage(output);
};

AcquaintanceServerListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AcquaintanceServerListMessage(input);
};

AcquaintanceServerListMessage.prototype.serializeAs_AcquaintanceServerListMessage = function(output) {
  output.writeShort(this.servers.length);
  var _i1;
  while (_i1 < this.servers.length) {
    if (this.servers[_i1] < 0) {
      throw (new Error((("Forbidden value (" + this.servers[_i1]) + ") on element 1 (starting at 1) of servers.")));
    };
    output.writeVarShort(this.servers[_i1]);
    _i1++;
  };
};

AcquaintanceServerListMessage.prototype.deserializeAs_AcquaintanceServerListMessage = function(input) {
  var _val1;
  var _serversLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _serversLen) {
    _val1 = input.readVarUhShort();
    if (_val1 < 0) {
      throw (new Error((("Forbidden value (" + _val1) + ") on elements of servers.")));
    };
    this.servers.push(_val1);
    _i1++;
  };
};

AcquaintanceServerListMessage.prototype.getMessageId = function() {
  return 6142;
};

AcquaintanceServerListMessage.prototype.getClassName = function() {
  return 'AcquaintanceServerListMessage';
};

module.exports.id = 6142;
module.exports.class = AcquaintanceServerListMessage;