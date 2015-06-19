var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeStartOkJobIndexMessage = function() {
  this.jobs = [];
};

util.inherits(ExchangeStartOkJobIndexMessage, BaseMessage);

ExchangeStartOkJobIndexMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeStartOkJobIndexMessage(output);
};

ExchangeStartOkJobIndexMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeStartOkJobIndexMessage(input);
};

ExchangeStartOkJobIndexMessage.prototype.serializeAs_ExchangeStartOkJobIndexMessage = function(output) {
  output.writeShort(this.jobs.length);
  var _i1;
  while (_i1 < this.jobs.length) {
    if (this.jobs[_i1] < 0) {
      throw (new Error((("Forbidden value (" + this.jobs[_i1]) + ") on element 1 (starting at 1) of jobs.")));
    };
    output.writeVarInt(this.jobs[_i1]);
    _i1++;
  };
};

ExchangeStartOkJobIndexMessage.prototype.deserializeAs_ExchangeStartOkJobIndexMessage = function(input) {
  var _val1;
  var _jobsLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _jobsLen) {
    _val1 = input.readVarUhInt();
    if (_val1 < 0) {
      throw (new Error((("Forbidden value (" + _val1) + ") on elements of jobs.")));
    };
    this.jobs.push(_val1);
    _i1++;
  };
};

ExchangeStartOkJobIndexMessage.prototype.getMessageId = function() {
  return 5819;
};

ExchangeStartOkJobIndexMessage.prototype.getClassName = function() {
  return 'ExchangeStartOkJobIndexMessage';
};

module.exports.id = 5819;
module.exports.class = ExchangeStartOkJobIndexMessage;