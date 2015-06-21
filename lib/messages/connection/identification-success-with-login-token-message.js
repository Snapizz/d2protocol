var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var IdentificationSuccessWithLoginTokenMessage = function() {
    this.loginToken = "";
};

require('util').inherits(IdentificationSuccessWithLoginTokenMessage, require('./identification-success-message.js'));

module.exports = function() {
    return new IdentificationSuccessWithLoginTokenMessage();
};

IdentificationSuccessWithLoginTokenMessage.prototype.serialize = function(output) {
    this.serializeAs_IdentificationSuccessWithLoginTokenMessage(output);
};

IdentificationSuccessWithLoginTokenMessage.prototype.deserialize = function(input) {
    this.deserializeAs_IdentificationSuccessWithLoginTokenMessage(input);
};

IdentificationSuccessWithLoginTokenMessage.prototype.serializeAs_IdentificationSuccessWithLoginTokenMessage = function(param1) {
    this.serializeAs_IdentificationSuccessMessage(param1);
    param1.writeUTF(this.loginToken);
};

IdentificationSuccessWithLoginTokenMessage.prototype.deserializeAs_IdentificationSuccessWithLoginTokenMessage = function(param1) {
    this.deserializeAs_IdentificationSuccessMessage(param1);
    this.loginToken = param1.readUTF();
};

IdentificationSuccessWithLoginTokenMessage.prototype.getMessageId = function() {
    return 6209;
};

IdentificationSuccessWithLoginTokenMessage.prototype.getClassName = function() {
    return 'IdentificationSuccessWithLoginTokenMessage';
};

module.exports.id = 6209;
module.exports.IdentificationSuccessWithLoginTokenMessage = IdentificationSuccessWithLoginTokenMessage;