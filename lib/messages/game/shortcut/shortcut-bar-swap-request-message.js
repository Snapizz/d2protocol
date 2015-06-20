var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ShortcutBarSwapRequestMessage = function() {
  this.barType = 0;
  this.firstSlot = 0;
  this.secondSlot = 0;
};

util.inherits(ShortcutBarSwapRequestMessage, BaseMessage);

ShortcutBarSwapRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_ShortcutBarSwapRequestMessage(output);
};

ShortcutBarSwapRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ShortcutBarSwapRequestMessage(input);
};

ShortcutBarSwapRequestMessage.prototype.serializeAs_ShortcutBarSwapRequestMessage = function(param1) {
  param1.writeByte(this.barType);
  if (this.firstSlot < 0 || this.firstSlot > 99) {
    throw new Error("Forbidden value (" + this.firstSlot + ") on element firstSlot.");
  } else {
    param1.writeByte(this.firstSlot);
    if (this.secondSlot < 0 || this.secondSlot > 99) {
      throw new Error("Forbidden value (" + this.secondSlot + ") on element secondSlot.");
    } else {
      param1.writeByte(this.secondSlot);
      return;
    }
  }
};

ShortcutBarSwapRequestMessage.prototype.deserializeAs_ShortcutBarSwapRequestMessage = function(param1) {
  this.barType = param1.readByte();
  if (this.barType < 0) {
    throw new Error("Forbidden value (" + this.barType + ") on element of ShortcutBarSwapRequestMessage.barType.");
  } else {
    this.firstSlot = param1.readByte();
    if (this.firstSlot < 0 || this.firstSlot > 99) {
      throw new Error("Forbidden value (" + this.firstSlot + ") on element of ShortcutBarSwapRequestMessage.firstSlot.");
    } else {
      this.secondSlot = param1.readByte();
      if (this.secondSlot < 0 || this.secondSlot > 99) {
        throw new Error("Forbidden value (" + this.secondSlot + ") on element of ShortcutBarSwapRequestMessage.secondSlot.");
      } else {
        return;
      }
    }
  }
};

ShortcutBarSwapRequestMessage.prototype.getMessageId = function() {
  return 6230;
};

ShortcutBarSwapRequestMessage.prototype.getClassName = function() {
  return 'ShortcutBarSwapRequestMessage';
};

module.exports.id = 6230;
module.exports.class = ShortcutBarSwapRequestMessage;