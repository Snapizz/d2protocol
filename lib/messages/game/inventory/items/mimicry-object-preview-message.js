var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var MimicryObjectPreviewMessage = function() {
  this.result;
};

util.inherits(MimicryObjectPreviewMessage, BaseMessage);

MimicryObjectPreviewMessage.prototype.serialize = function(output) {
  this.serializeAs_MimicryObjectPreviewMessage(output);
};

MimicryObjectPreviewMessage.prototype.deserialize = function(input) {
  this.deserializeAs_MimicryObjectPreviewMessage(input);
};

MimicryObjectPreviewMessage.prototype.serializeAs_MimicryObjectPreviewMessage = function(output) {
  this.result.serializeAs_ObjectItem(output);
};

MimicryObjectPreviewMessage.prototype.deserializeAs_MimicryObjectPreviewMessage = function(input) {
  this.result = new ObjectItem();
  this.result.deserialize(input);
};

MimicryObjectPreviewMessage.prototype.getMessageId = function() {
  return 6458;
};

MimicryObjectPreviewMessage.prototype.getClassName = function() {
  return 'MimicryObjectPreviewMessage';
};

module.exports.id = 6458;
module.exports.class = MimicryObjectPreviewMessage;