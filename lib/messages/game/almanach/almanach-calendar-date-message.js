var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AlmanachCalendarDateMessage = function() {
  this.date = 0;
};

util.inherits(AlmanachCalendarDateMessage, BaseMessage);

AlmanachCalendarDateMessage.prototype.serialize = function(output) {
  this.serializeAs_AlmanachCalendarDateMessage(output);
};

AlmanachCalendarDateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AlmanachCalendarDateMessage(input);
};

AlmanachCalendarDateMessage.prototype.serializeAs_AlmanachCalendarDateMessage = function(output) {
  output.writeInt(this.date);
};

AlmanachCalendarDateMessage.prototype.deserializeAs_AlmanachCalendarDateMessage = function(input) {
  this.date = input.readInt();
};

AlmanachCalendarDateMessage.prototype.getMessageId = function() {
  return 6341;
};

AlmanachCalendarDateMessage.prototype.getClassName = function() {
  return 'AlmanachCalendarDateMessage';
};

module.exports.id = 6341;
module.exports.class = AlmanachCalendarDateMessage;