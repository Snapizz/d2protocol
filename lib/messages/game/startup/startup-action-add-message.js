var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var StartupActionAddObject = require('../../../types/game/startup/startup-action-add-object.js').class;

var StartupActionAddMessage = function() {
    this.newAction = new StartupActionAddObject();
};

require('util').inherits(StartupActionAddMessage, d2com.NetworkMessage.class);

StartupActionAddMessage.prototype.serialize = function(output) {
    this.serializeAs_StartupActionAddMessage(output);
};

StartupActionAddMessage.prototype.deserialize = function(input) {
    this.deserializeAs_StartupActionAddMessage(input);
};

StartupActionAddMessage.prototype.serializeAs_StartupActionAddMessage = function(param1) {
    this.newAction.serializeAs_StartupActionAddObject(param1);
};

StartupActionAddMessage.prototype.deserializeAs_StartupActionAddMessage = function(param1) {
    this.newAction = new StartupActionAddObject();
    this.newAction.deserialize(param1);
};

StartupActionAddMessage.prototype.getMessageId = function() {
    return 6538;
};

StartupActionAddMessage.prototype.getClassName = function() {
    return 'StartupActionAddMessage';
};

module.exports.id = 6538;
module.exports.class = StartupActionAddMessage;
module.exports.getInstance = function() {
    return new StartupActionAddMessage;
};