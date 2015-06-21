var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var ClientKeyMessage = function() {
    this.key = "";
};

require('util').inherits(ClientKeyMessage, d2com.NetworkMessage.class);

ClientKeyMessage.prototype.serialize = function(output) {
    this.serializeAs_ClientKeyMessage(output);
};

ClientKeyMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ClientKeyMessage(input);
};

ClientKeyMessage.prototype.serializeAs_ClientKeyMessage = function(param1) {
    param1.writeUTF(this.key);
};

ClientKeyMessage.prototype.deserializeAs_ClientKeyMessage = function(param1) {
    this.key = param1.readUTF();
};

ClientKeyMessage.prototype.getMessageId = function() {
    return 5607;
};

ClientKeyMessage.prototype.getClassName = function() {
    return 'ClientKeyMessage';
};

module.exports.id = 5607;
module.exports.class = ClientKeyMessage;
module.exports.getInstance = function() {
    return new ClientKeyMessage;
};