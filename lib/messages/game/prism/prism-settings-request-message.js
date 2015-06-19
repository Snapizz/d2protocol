var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

PrismSettingsRequestMessage.prototype.serializeAs_PrismSettingsRequestMessage = function(output) {
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element subAreaId.")));
  };
  output.writeVarShort(this.subAreaId);
  if (this.startDefenseTime < 0) {
    throw (new Error((("Forbidden value (" + this.startDefenseTime) + ") on element startDefenseTime.")));
  };
  output.writeByte(this.startDefenseTime);
};

PrismSettingsRequestMessage.prototype.deserializeAs_PrismSettingsRequestMessage = function(input) {
  this.subAreaId = input.readVarUhShort();
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element of PrismSettingsRequestMessage.subAreaId.")));
  };
  this.startDefenseTime = input.readByte();
  if (this.startDefenseTime < 0) {
    throw (new Error((("Forbidden value (" + this.startDefenseTime) + ") on element of PrismSettingsRequestMessage.startDefenseTime.")));
  };
};

PrismSettingsRequestMessage.prototype.getMessageId = function() {
  return 6437;
};

PrismSettingsRequestMessage.prototype.getClassName = function() {
  return 'PrismSettingsRequestMessage';
};

module.exports.id = 6437;
module.exports.class = PrismSettingsRequestMessage;