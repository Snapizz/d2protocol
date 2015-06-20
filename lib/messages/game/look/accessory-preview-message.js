var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AccessoryPreviewMessage = function() {
  this.look;
};

util.inherits(AccessoryPreviewMessage, BaseMessage);

AccessoryPreviewMessage.prototype.serialize = function(output) {
  this.serializeAs_AccessoryPreviewMessage(output);
};

AccessoryPreviewMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AccessoryPreviewMessage(input);
};

AccessoryPreviewMessage.prototype.serializeAs_AccessoryPreviewMessage = function(output) {
  this.look.serializeAs_EntityLook(param1);
};

AccessoryPreviewMessage.prototype.deserializeAs_AccessoryPreviewMessage = function(input) {
  this.look = new EntityLook();
  this.look.deserialize(param1);
};

AccessoryPreviewMessage.prototype.getMessageId = function() {
  return 6517;
};

AccessoryPreviewMessage.prototype.getClassName = function() {
  return 'AccessoryPreviewMessage';
};

module.exports.id = 6517;
module.exports.class = AccessoryPreviewMessage;