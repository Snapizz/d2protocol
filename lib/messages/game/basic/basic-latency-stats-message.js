var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var BasicLatencyStatsMessage = function() {
  this.latency = 0;
  this.sampleCount = 0;
  this.max = 0;
};

util.inherits(BasicLatencyStatsMessage, BaseMessage);

BasicLatencyStatsMessage.prototype.serialize = function(output) {
  this.serializeAs_BasicLatencyStatsMessage(output);
};

BasicLatencyStatsMessage.prototype.deserialize = function(input) {
  this.deserializeAs_BasicLatencyStatsMessage(input);
};

BasicLatencyStatsMessage.prototype.serializeAs_BasicLatencyStatsMessage = function(output) {
  if ((((this.latency < 0)) || ((this.latency > 0xFFFF)))) {
    throw (new Error((("Forbidden value (" + this.latency) + ") on element latency.")));
  };
  output.writeShort(this.latency);
  if (this.sampleCount < 0) {
    throw (new Error((("Forbidden value (" + this.sampleCount) + ") on element sampleCount.")));
  };
  output.writeVarShort(this.sampleCount);
  if (this.max < 0) {
    throw (new Error((("Forbidden value (" + this.max) + ") on element max.")));
  };
  output.writeVarShort(this.max);
};

BasicLatencyStatsMessage.prototype.deserializeAs_BasicLatencyStatsMessage = function(input) {
  this.latency = input.readUnsignedShort();
  if ((((this.latency < 0)) || ((this.latency > 0xFFFF)))) {
    throw (new Error((("Forbidden value (" + this.latency) + ") on element of BasicLatencyStatsMessage.latency.")));
  };
  this.sampleCount = input.readVarUhShort();
  if (this.sampleCount < 0) {
    throw (new Error((("Forbidden value (" + this.sampleCount) + ") on element of BasicLatencyStatsMessage.sampleCount.")));
  };
  this.max = input.readVarUhShort();
  if (this.max < 0) {
    throw (new Error((("Forbidden value (" + this.max) + ") on element of BasicLatencyStatsMessage.max.")));
  };
};

BasicLatencyStatsMessage.prototype.getMessageId = function() {
  return 5663;
};

BasicLatencyStatsMessage.prototype.getClassName = function() {
  return 'BasicLatencyStatsMessage';
};

module.exports.id = 5663;
module.exports.class = BasicLatencyStatsMessage;