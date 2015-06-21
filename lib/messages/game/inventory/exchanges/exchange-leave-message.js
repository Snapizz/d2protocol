var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeLeaveMessage = module.exports = function() {
    this.success = false;

    return this;
};

require('util').inherits(ExchangeLeaveMessage, require('../../dialog/leave-dialog-message.js'));

ExchangeLeaveMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeLeaveMessage(output);
};

ExchangeLeaveMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeLeaveMessage(input);
};

ExchangeLeaveMessage.prototype.serializeAs_ExchangeLeaveMessage = function(param1) {
    this.serializeAs_LeaveDialogMessage(param1);
    param1.writeBoolean(this.success);
};

ExchangeLeaveMessage.prototype.deserializeAs_ExchangeLeaveMessage = function(param1) {
    this.deserializeAs_LeaveDialogMessage(param1);
    this.success = param1.readBoolean();
};

ExchangeLeaveMessage.prototype.getMessageId = function() {
    return 5628;
};

ExchangeLeaveMessage.prototype.getClassName = function() {
    return 'ExchangeLeaveMessage';
};

module.exports.id = 5628;