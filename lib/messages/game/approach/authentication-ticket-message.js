var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var AuthenticationTicketMessage = function() {
    this.lang = "";
    this.ticket = "";
};

require('util').inherits(AuthenticationTicketMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new AuthenticationTicketMessage();
};

AuthenticationTicketMessage.prototype.serialize = function(output) {
    this.serializeAs_AuthenticationTicketMessage(output);
};

AuthenticationTicketMessage.prototype.deserialize = function(input) {
    this.deserializeAs_AuthenticationTicketMessage(input);
};

AuthenticationTicketMessage.prototype.serializeAs_AuthenticationTicketMessage = function(param1) {
    param1.writeUTF(this.lang);
    param1.writeUTF(this.ticket);
};

AuthenticationTicketMessage.prototype.deserializeAs_AuthenticationTicketMessage = function(param1) {
    this.lang = param1.readUTF();
    this.ticket = param1.readUTF();
};

AuthenticationTicketMessage.prototype.getMessageId = function() {
    return 110;
};

AuthenticationTicketMessage.prototype.getClassName = function() {
    return 'AuthenticationTicketMessage';
};

module.exports.id = 110;
module.exports.AuthenticationTicketMessage = AuthenticationTicketMessage;