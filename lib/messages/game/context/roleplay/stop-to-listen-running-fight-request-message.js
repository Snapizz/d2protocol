var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var StopToListenRunningFightRequestMessage = module.exports = function() {


    return this;
};

require('util').inherits(StopToListenRunningFightRequestMessage, d2com.NetworkMessage.class);

StopToListenRunningFightRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_StopToListenRunningFightRequestMessage(output);
};

StopToListenRunningFightRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_StopToListenRunningFightRequestMessage(input);
};

StopToListenRunningFightRequestMessage.prototype.serializeAs_StopToListenRunningFightRequestMessage = function(param1) {

};

StopToListenRunningFightRequestMessage.prototype.deserializeAs_StopToListenRunningFightRequestMessage = function(param1) {

};

StopToListenRunningFightRequestMessage.prototype.getMessageId = function() {
    return 6124;
};

StopToListenRunningFightRequestMessage.prototype.getClassName = function() {
    return 'StopToListenRunningFightRequestMessage';
};

module.exports.id = 6124;