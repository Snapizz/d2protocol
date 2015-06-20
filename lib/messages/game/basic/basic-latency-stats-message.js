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

BasicLatencyStatsMessage.prototype.serializeAs_BasicLatencyStatsMessage = function(param1) {
  if (this.latency < 0 || this.latency > 65535) {
    throw new Error("Forbidden value (" + this.latency + ") on element latency.");
  } else {
    param1.writeShort(this.latency);
    if (this.sampleCount < 0) {
      throw new Error("Forbidden value (" + this.sampleCount + ") on element sampleCount.");
    } else {
      param1.writeVarShort(this.sampleCount);
      if (this.max < 0) {
        throw new Error("Forbidden value (" + this.max + ") on element max.");
      } else {
        param1.writeVarShort(this.max);
        return;
      }
    }
  }
};

BasicLatencyStatsMessage.prototype.deserializeAs_BasicLatencyStatsMessage = function(param1) {
  this.latency = param1.readUnsignedShort();
  if (this.latency < 0 || this.latency > 65535) {
    throw new Error("Forbidden value (" + this.latency + ") on element of BasicLatencyStatsMessage.latency.");
  } else {
    this.sampleCount = param1.readVarUhShort();
    if (this.sampleCount < 0) {
      throw new Error("Forbidden value (" + this.sampleCount + ") on element of BasicLatencyStatsMessage.sampleCount.");
    } else {
      this.max = param1.readVarUhShort();
      if (this.max < 0) {
        throw new Error("Forbidden value (" + this.max + ") on element of BasicLatencyStatsMessage.max.");
      } else {
        return;
      }
    }
  }
};

BasicLatencyStatsMessage.prototype.getMessageId = function() {
  return 5663;
};

BasicLatencyStatsMessage.prototype.getClassName = function() {
  return 'BasicLatencyStatsMessage';
};

module.exports.id = 5663;
module.exports.class = BasicLatencyStatsMessage;
module.exports.getInstance = function() {
  return new BasicLatencyStatsMessage();
};