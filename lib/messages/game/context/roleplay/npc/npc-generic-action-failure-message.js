var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var NpcGenericActionFailureMessage = function() {

};

require('util').inherits(NpcGenericActionFailureMessage, d2com.NetworkMessage.class);

NpcGenericActionFailureMessage.prototype.serialize = function(output) {
    this.serializeAs_NpcGenericActionFailureMessage(output);
};

NpcGenericActionFailureMessage.prototype.deserialize = function(input) {
    this.deserializeAs_NpcGenericActionFailureMessage(input);
};

NpcGenericActionFailureMessage.prototype.serializeAs_NpcGenericActionFailureMessage = function(param1) {

};

NpcGenericActionFailureMessage.prototype.deserializeAs_NpcGenericActionFailureMessage = function(param1) {

};

NpcGenericActionFailureMessage.prototype.getMessageId = function() {
    return 5900;
};

NpcGenericActionFailureMessage.prototype.getClassName = function() {
    return 'NpcGenericActionFailureMessage';
};

module.exports.id = 5900;
module.exports.class = NpcGenericActionFailureMessage;
module.exports.getInstance = function() {
    return new NpcGenericActionFailureMessage;
};