var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var GuidedModeReturnRequestMessage = function() {

};

require('util').inherits(GuidedModeReturnRequestMessage, d2com.NetworkMessage.class);

GuidedModeReturnRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_GuidedModeReturnRequestMessage(output);
};

GuidedModeReturnRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GuidedModeReturnRequestMessage(input);
};

GuidedModeReturnRequestMessage.prototype.serializeAs_GuidedModeReturnRequestMessage = function(param1) {

};

GuidedModeReturnRequestMessage.prototype.deserializeAs_GuidedModeReturnRequestMessage = function(param1) {

};

GuidedModeReturnRequestMessage.prototype.getMessageId = function() {
    return 6088;
};

GuidedModeReturnRequestMessage.prototype.getClassName = function() {
    return 'GuidedModeReturnRequestMessage';
};

module.exports.id = 6088;
module.exports.class = GuidedModeReturnRequestMessage;
module.exports.getInstance = function() {
    return new GuidedModeReturnRequestMessage;
};