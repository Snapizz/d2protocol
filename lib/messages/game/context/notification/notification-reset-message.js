var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var NotificationResetMessage = function() {

};

require('util').inherits(NotificationResetMessage, d2com.NetworkMessage.class);

NotificationResetMessage.prototype.serialize = function(output) {
    this.serializeAs_NotificationResetMessage(output);
};

NotificationResetMessage.prototype.deserialize = function(input) {
    this.deserializeAs_NotificationResetMessage(input);
};

NotificationResetMessage.prototype.serializeAs_NotificationResetMessage = function(param1) {

};

NotificationResetMessage.prototype.deserializeAs_NotificationResetMessage = function(param1) {

};

NotificationResetMessage.prototype.getMessageId = function() {
    return 6089;
};

NotificationResetMessage.prototype.getClassName = function() {
    return 'NotificationResetMessage';
};

module.exports.id = 6089;
module.exports.class = NotificationResetMessage;
module.exports.getInstance = function() {
    return new NotificationResetMessage;
};