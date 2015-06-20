var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');

var EntityLook = require('../../../types/game/look/entity-look.js').class;

var AccessoryPreviewMessage = function() {
  this.look = new EntityLook();
};

util.inherits(AccessoryPreviewMessage, BaseMessage);

AccessoryPreviewMessage.prototype.serialize = function(output) {
  this.serializeAs_AccessoryPreviewMessage(output);
};

AccessoryPreviewMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AccessoryPreviewMessage(input);
};

AccessoryPreviewMessage.prototype.serializeAs_AccessoryPreviewMessage = function(param1) {
  this.look.serializeAs_EntityLook(param1);
};

AccessoryPreviewMessage.prototype.deserializeAs_AccessoryPreviewMessage = function(param1) {
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
module.exports.getInstance = function() {
  return new AccessoryPreviewMessage();
};