var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var NpcGenericActionFailureMessage = module.exports = function() {


    return this;
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