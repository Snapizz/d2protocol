var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var NicknameRegistrationMessage = function() {

};

require('util').inherits(NicknameRegistrationMessage, d2com.NetworkMessage.class);

NicknameRegistrationMessage.prototype.serialize = function(output) {
    this.serializeAs_NicknameRegistrationMessage(output);
};

NicknameRegistrationMessage.prototype.deserialize = function(input) {
    this.deserializeAs_NicknameRegistrationMessage(input);
};

NicknameRegistrationMessage.prototype.serializeAs_NicknameRegistrationMessage = function(param1) {

};

NicknameRegistrationMessage.prototype.deserializeAs_NicknameRegistrationMessage = function(param1) {

};

NicknameRegistrationMessage.prototype.getMessageId = function() {
    return 5640;
};

NicknameRegistrationMessage.prototype.getClassName = function() {
    return 'NicknameRegistrationMessage';
};

module.exports.id = 5640;
module.exports.class = NicknameRegistrationMessage;
module.exports.getInstance = function() {
    return new NicknameRegistrationMessage;
};