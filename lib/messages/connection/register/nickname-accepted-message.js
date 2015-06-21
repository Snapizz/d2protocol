var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var NicknameAcceptedMessage = function() {

};

require('util').inherits(NicknameAcceptedMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new NicknameAcceptedMessage();
};

NicknameAcceptedMessage.prototype.serialize = function(output) {
    this.serializeAs_NicknameAcceptedMessage(output);
};

NicknameAcceptedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_NicknameAcceptedMessage(input);
};

NicknameAcceptedMessage.prototype.serializeAs_NicknameAcceptedMessage = function(param1) {

};

NicknameAcceptedMessage.prototype.deserializeAs_NicknameAcceptedMessage = function(param1) {

};

NicknameAcceptedMessage.prototype.getMessageId = function() {
    return 5641;
};

NicknameAcceptedMessage.prototype.getClassName = function() {
    return 'NicknameAcceptedMessage';
};

module.exports.id = 5641;
module.exports.NicknameAcceptedMessage = NicknameAcceptedMessage;