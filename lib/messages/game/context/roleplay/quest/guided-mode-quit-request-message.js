var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var GuidedModeQuitRequestMessage = function() {

};

require('util').inherits(GuidedModeQuitRequestMessage, d2com.NetworkMessage.class);

GuidedModeQuitRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_GuidedModeQuitRequestMessage(output);
};

GuidedModeQuitRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GuidedModeQuitRequestMessage(input);
};

GuidedModeQuitRequestMessage.prototype.serializeAs_GuidedModeQuitRequestMessage = function(param1) {

};

GuidedModeQuitRequestMessage.prototype.deserializeAs_GuidedModeQuitRequestMessage = function(param1) {

};

GuidedModeQuitRequestMessage.prototype.getMessageId = function() {
    return 6092;
};

GuidedModeQuitRequestMessage.prototype.getClassName = function() {
    return 'GuidedModeQuitRequestMessage';
};

module.exports.id = 6092;
module.exports.class = GuidedModeQuitRequestMessage;
module.exports.getInstance = function() {
    return new GuidedModeQuitRequestMessage;
};