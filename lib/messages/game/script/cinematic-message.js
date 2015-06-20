var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var CinematicMessage = function() {
  this.cinematicId = 0;
};

util.inherits(CinematicMessage, BaseMessage);

CinematicMessage.prototype.serialize = function(output) {
  this.serializeAs_CinematicMessage(output);
};

CinematicMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CinematicMessage(input);
};

CinematicMessage.prototype.serializeAs_CinematicMessage = function(param1) {
  if (this.cinematicId < 0) {
    throw new Error("Forbidden value (" + this.cinematicId + ") on element cinematicId.");
  } else {
    param1.writeVarShort(this.cinematicId);
    return;
  }
};

CinematicMessage.prototype.deserializeAs_CinematicMessage = function(param1) {
  this.cinematicId = param1.readVarUhShort();
  if (this.cinematicId < 0) {
    throw new Error("Forbidden value (" + this.cinematicId + ") on element of CinematicMessage.cinematicId.");
  } else {
    return;
  }
};

CinematicMessage.prototype.getMessageId = function() {
  return 6053;
};

CinematicMessage.prototype.getClassName = function() {
  return 'CinematicMessage';
};

module.exports.id = 6053;
module.exports.class = CinematicMessage;
module.exports.getInstance = function() {
  return new CinematicMessage();
};