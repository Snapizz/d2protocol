var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var PlayerStatusUpdateErrorMessage = function() {

};

require('util').inherits(PlayerStatusUpdateErrorMessage, d2com.NetworkMessage.class);

PlayerStatusUpdateErrorMessage.prototype.serialize = function(output) {
    this.serializeAs_PlayerStatusUpdateErrorMessage(output);
};

PlayerStatusUpdateErrorMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PlayerStatusUpdateErrorMessage(input);
};

PlayerStatusUpdateErrorMessage.prototype.serializeAs_PlayerStatusUpdateErrorMessage = function(param1) {

};

PlayerStatusUpdateErrorMessage.prototype.deserializeAs_PlayerStatusUpdateErrorMessage = function(param1) {

};

PlayerStatusUpdateErrorMessage.prototype.getMessageId = function() {
    return 6385;
};

PlayerStatusUpdateErrorMessage.prototype.getClassName = function() {
    return 'PlayerStatusUpdateErrorMessage';
};

module.exports.id = 6385;
module.exports.class = PlayerStatusUpdateErrorMessage;
module.exports.getInstance = function() {
    return new PlayerStatusUpdateErrorMessage;
};