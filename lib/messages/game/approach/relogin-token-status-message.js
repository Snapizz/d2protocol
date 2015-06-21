var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ReloginTokenStatusMessage = module.exports = function() {
    this.validToken = false;
    this.token = "";

    return this;
};

require('util').inherits(ReloginTokenStatusMessage, d2com.NetworkMessage.class);

ReloginTokenStatusMessage.prototype.serialize = function(output) {
    this.serializeAs_ReloginTokenStatusMessage(output);
};

ReloginTokenStatusMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ReloginTokenStatusMessage(input);
};

ReloginTokenStatusMessage.prototype.serializeAs_ReloginTokenStatusMessage = function(param1) {
    param1.writeBoolean(this.validToken);
    param1.writeUTF(this.token);
};

ReloginTokenStatusMessage.prototype.deserializeAs_ReloginTokenStatusMessage = function(param1) {
    this.validToken = param1.readBoolean();
    this.token = param1.readUTF();
};

ReloginTokenStatusMessage.prototype.getMessageId = function() {
    return 6539;
};

ReloginTokenStatusMessage.prototype.getClassName = function() {
    return 'ReloginTokenStatusMessage';
};

module.exports.id = 6539;