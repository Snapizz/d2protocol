var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var StartupActionsExecuteMessage = function() {

};

require('util').inherits(StartupActionsExecuteMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new StartupActionsExecuteMessage();
};

StartupActionsExecuteMessage.prototype.serialize = function(output) {
    this.serializeAs_StartupActionsExecuteMessage(output);
};

StartupActionsExecuteMessage.prototype.deserialize = function(input) {
    this.deserializeAs_StartupActionsExecuteMessage(input);
};

StartupActionsExecuteMessage.prototype.serializeAs_StartupActionsExecuteMessage = function(param1) {

};

StartupActionsExecuteMessage.prototype.deserializeAs_StartupActionsExecuteMessage = function(param1) {

};

StartupActionsExecuteMessage.prototype.getMessageId = function() {
    return 1302;
};

StartupActionsExecuteMessage.prototype.getClassName = function() {
    return 'StartupActionsExecuteMessage';
};

module.exports.id = 1302;
module.exports.StartupActionsExecuteMessage = StartupActionsExecuteMessage;