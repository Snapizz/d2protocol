var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ReloginTokenRequestMessage = module.exports = function() {


    return this;
};

require('util').inherits(ReloginTokenRequestMessage, d2com.NetworkMessage.class);

ReloginTokenRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_ReloginTokenRequestMessage(output);
};

ReloginTokenRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ReloginTokenRequestMessage(input);
};

ReloginTokenRequestMessage.prototype.serializeAs_ReloginTokenRequestMessage = function(param1) {

};

ReloginTokenRequestMessage.prototype.deserializeAs_ReloginTokenRequestMessage = function(param1) {

};

ReloginTokenRequestMessage.prototype.getMessageId = function() {
    return 6540;
};

ReloginTokenRequestMessage.prototype.getClassName = function() {
    return 'ReloginTokenRequestMessage';
};

module.exports.id = 6540;