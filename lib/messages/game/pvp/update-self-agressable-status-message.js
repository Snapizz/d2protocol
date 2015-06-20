var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var UpdateSelfAgressableStatusMessage = function() {
  this.status = 0;
  this.probationTime = 0;
};

util.inherits(UpdateSelfAgressableStatusMessage, BaseMessage);

UpdateSelfAgressableStatusMessage.prototype.serialize = function(output) {
  this.serializeAs_UpdateSelfAgressableStatusMessage(output);
};

UpdateSelfAgressableStatusMessage.prototype.deserialize = function(input) {
  this.deserializeAs_UpdateSelfAgressableStatusMessage(input);
};

UpdateSelfAgressableStatusMessage.prototype.serializeAs_UpdateSelfAgressableStatusMessage = function(param1) {
  param1.writeByte(this.status);
  if (this.probationTime < 0) {
    throw new Error("Forbidden value (" + this.probationTime + ") on element probationTime.");
  } else {
    param1.writeInt(this.probationTime);
    return;
  }
};

UpdateSelfAgressableStatusMessage.prototype.deserializeAs_UpdateSelfAgressableStatusMessage = function(param1) {
  this.status = param1.readByte();
  if (this.status < 0) {
    throw new Error("Forbidden value (" + this.status + ") on element of UpdateSelfAgressableStatusMessage.status.");
  } else {
    this.probationTime = param1.readInt();
    if (this.probationTime < 0) {
      throw new Error("Forbidden value (" + this.probationTime + ") on element of UpdateSelfAgressableStatusMessage.probationTime.");
    } else {
      return;
    }
  }
};

UpdateSelfAgressableStatusMessage.prototype.getMessageId = function() {
  return 6456;
};

UpdateSelfAgressableStatusMessage.prototype.getClassName = function() {
  return 'UpdateSelfAgressableStatusMessage';
};

module.exports.id = 6456;
module.exports.class = UpdateSelfAgressableStatusMessage;