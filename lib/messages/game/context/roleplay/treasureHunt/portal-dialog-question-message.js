var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PortalDialogQuestionMessage = function() {
  this.availableUseLeft = 0;
  this.closeDate = 0;
};

util.inherits(PortalDialogQuestionMessage, BaseMessage);

PortalDialogQuestionMessage.prototype.serialize = function(output) {
  this.serializeAs_PortalDialogQuestionMessage(output);
};

PortalDialogQuestionMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PortalDialogQuestionMessage(input);
};

PortalDialogQuestionMessage.prototype.serializeAs_PortalDialogQuestionMessage = function(output) {
  if (this.availableUseLeft < 0) {
    throw (new Error((("Forbidden value (" + this.availableUseLeft) + ") on element availableUseLeft.")));
  };
  output.writeInt(this.availableUseLeft);
  if (this.closeDate < 0) {
    throw (new Error((("Forbidden value (" + this.closeDate) + ") on element closeDate.")));
  };
  output.writeInt(this.closeDate);
};

PortalDialogQuestionMessage.prototype.deserializeAs_PortalDialogQuestionMessage = function(input) {
  this.availableUseLeft = input.readInt();
  if (this.availableUseLeft < 0) {
    throw (new Error((("Forbidden value (" + this.availableUseLeft) + ") on element of PortalDialogQuestionMessage.availableUseLeft.")));
  };
  this.closeDate = input.readInt();
  if (this.closeDate < 0) {
    throw (new Error((("Forbidden value (" + this.closeDate) + ") on element of PortalDialogQuestionMessage.closeDate.")));
  };
};

PortalDialogQuestionMessage.prototype.getMessageId = function() {
  return 6495;
};

PortalDialogQuestionMessage.prototype.getClassName = function() {
  return 'PortalDialogQuestionMessage';
};

module.exports.id = 6495;
module.exports.class = PortalDialogQuestionMessage;