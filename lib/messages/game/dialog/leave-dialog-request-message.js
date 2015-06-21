var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var LeaveDialogRequestMessage = function() {

};

require('util').inherits(LeaveDialogRequestMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new LeaveDialogRequestMessage();
};

LeaveDialogRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_LeaveDialogRequestMessage(output);
};

LeaveDialogRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_LeaveDialogRequestMessage(input);
};

LeaveDialogRequestMessage.prototype.serializeAs_LeaveDialogRequestMessage = function(param1) {

};

LeaveDialogRequestMessage.prototype.deserializeAs_LeaveDialogRequestMessage = function(param1) {

};

LeaveDialogRequestMessage.prototype.getMessageId = function() {
    return 5501;
};

LeaveDialogRequestMessage.prototype.getClassName = function() {
    return 'LeaveDialogRequestMessage';
};

module.exports.id = 5501;
module.exports.LeaveDialogRequestMessage = LeaveDialogRequestMessage;