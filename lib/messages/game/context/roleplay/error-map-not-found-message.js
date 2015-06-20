var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ErrorMapNotFoundMessage = function() {
  this.mapId = 0;
};

util.inherits(ErrorMapNotFoundMessage, BaseMessage);

ErrorMapNotFoundMessage.prototype.serialize = function(output) {
  this.serializeAs_ErrorMapNotFoundMessage(output);
};

ErrorMapNotFoundMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ErrorMapNotFoundMessage(input);
};

ErrorMapNotFoundMessage.prototype.serializeAs_ErrorMapNotFoundMessage = function(output) {
  if (this.mapId < 0) {
    throw new Error("Forbidden value (" + this.mapId + ") on element mapId.");
  } else {
    param1.writeInt(this.mapId);
    return;
  }
};

ErrorMapNotFoundMessage.prototype.deserializeAs_ErrorMapNotFoundMessage = function(input) {
  this.mapId = param1.readInt();
  if (this.mapId < 0) {
    throw new Error("Forbidden value (" + this.mapId + ") on element of ErrorMapNotFoundMessage.mapId.");
  } else {
    return;
  }
};

ErrorMapNotFoundMessage.prototype.getMessageId = function() {
  return 6197;
};

ErrorMapNotFoundMessage.prototype.getClassName = function() {
  return 'ErrorMapNotFoundMessage';
};

module.exports.id = 6197;
module.exports.class = ErrorMapNotFoundMessage;