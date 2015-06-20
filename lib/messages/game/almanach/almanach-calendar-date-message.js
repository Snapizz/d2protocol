var d2com = require('d2com'),
  BaseMessage = require('./almanach-calendar-date-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
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

AlmanachCalendarDateMessage.prototype.serializeAs_AlmanachCalendarDateMessage = function(param1) {
  param1.writeInt(this.date);
};

AlmanachCalendarDateMessage.prototype.deserializeAs_AlmanachCalendarDateMessage = function(param1) {
  this.date = param1.readInt();
};

AlmanachCalendarDateMessage.prototype.getMessageId = function() {
  return 6341;
};

AlmanachCalendarDateMessage.prototype.getClassName = function() {
  return 'AlmanachCalendarDateMessage';
};

module.exports.id = 6341;
module.exports.class = AlmanachCalendarDateMessage;
module.exports.getInstance = function() {
  return new AlmanachCalendarDateMessage();
};