var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ObjectItem = require('../../../../types/game/data/items/object-item.js');

var MimicryObjectPreviewMessage = function() {
  this.result = new ObjectItem();
};

util.inherits(MimicryObjectPreviewMessage, BaseMessage);

MimicryObjectPreviewMessage.prototype.serialize = function(output) {
  this.serializeAs_MimicryObjectPreviewMessage(output);
};

MimicryObjectPreviewMessage.prototype.deserialize = function(input) {
  this.deserializeAs_MimicryObjectPreviewMessage(input);
};

MimicryObjectPreviewMessage.prototype.serializeAs_MimicryObjectPreviewMessage = function(param1) {
  this.result.serializeAs_ObjectItem(param1);
};

MimicryObjectPreviewMessage.prototype.deserializeAs_MimicryObjectPreviewMessage = function(param1) {
  this.result = new ObjectItem();
  this.result.deserialize(param1);
};

MimicryObjectPreviewMessage.prototype.getMessageId = function() {
  return 6458;
};

MimicryObjectPreviewMessage.prototype.getClassName = function() {
  return 'MimicryObjectPreviewMessage';
};

module.exports.id = 6458;
module.exports.class = MimicryObjectPreviewMessage;
module.exports.getInstance = function() {
  return new MimicryObjectPreviewMessage();
};