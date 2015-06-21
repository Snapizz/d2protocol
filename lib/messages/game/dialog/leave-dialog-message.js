var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var LeaveDialogMessage = function() {
    this.dialogType = 0;
};

require('util').inherits(LeaveDialogMessage, d2com.NetworkMessage.class);

LeaveDialogMessage.prototype.serialize = function(output) {
    this.serializeAs_LeaveDialogMessage(output);
};

LeaveDialogMessage.prototype.deserialize = function(input) {
    this.deserializeAs_LeaveDialogMessage(input);
};

LeaveDialogMessage.prototype.serializeAs_LeaveDialogMessage = function(param1) {
    param1.writeByte(this.dialogType);
};

LeaveDialogMessage.prototype.deserializeAs_LeaveDialogMessage = function(param1) {
    this.dialogType = param1.readByte();
    if (this.dialogType < 0) {
        throw new Error("Forbidden value (" + this.dialogType + ") on element of LeaveDialogMessage.dialogType.");
    } else {
        return;
    }
};

LeaveDialogMessage.prototype.getMessageId = function() {
    return 5502;
};

LeaveDialogMessage.prototype.getClassName = function() {
    return 'LeaveDialogMessage';
};

module.exports.id = 5502;
module.exports.class = LeaveDialogMessage;
module.exports.getInstance = function() {
    return new LeaveDialogMessage;
};