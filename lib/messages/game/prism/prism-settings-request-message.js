var d2com = require('d2com'),
  BaseMessage = require('./prism-settings-request-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var PrismSettingsRequestMessage = function() {
  this.subAreaId = 0;
  this.startDefenseTime = 0;
};

util.inherits(PrismSettingsRequestMessage, BaseMessage);

PrismSettingsRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_PrismSettingsRequestMessage(output);
};

PrismSettingsRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PrismSettingsRequestMessage(input);
};

PrismSettingsRequestMessage.prototype.serializeAs_PrismSettingsRequestMessage = function(param1) {
  if (this.subAreaId < 0) {
    throw new Error("Forbidden value (" + this.subAreaId + ") on element subAreaId.");
  } else {
    param1.writeVarShort(this.subAreaId);
    if (this.startDefenseTime < 0) {
      throw new Error("Forbidden value (" + this.startDefenseTime + ") on element startDefenseTime.");
    } else {
      param1.writeByte(this.startDefenseTime);
      return;
    }
  }
};

PrismSettingsRequestMessage.prototype.deserializeAs_PrismSettingsRequestMessage = function(param1) {
  this.subAreaId = param1.readVarUhShort();
  if (this.subAreaId < 0) {
    throw new Error("Forbidden value (" + this.subAreaId + ") on element of PrismSettingsRequestMessage.subAreaId.");
  } else {
    this.startDefenseTime = param1.readByte();
    if (this.startDefenseTime < 0) {
      throw new Error("Forbidden value (" + this.startDefenseTime + ") on element of PrismSettingsRequestMessage.startDefenseTime.");
    } else {
      return;
    }
  }
};

PrismSettingsRequestMessage.prototype.getMessageId = function() {
  return 6437;
};

PrismSettingsRequestMessage.prototype.getClassName = function() {
  return 'PrismSettingsRequestMessage';
};

module.exports.id = 6437;
module.exports.class = PrismSettingsRequestMessage;
module.exports.getInstance = function() {
  return new PrismSettingsRequestMessage();
};