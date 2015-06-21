var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var InteractiveElement = require('../../../types/game/interactive/interactive-element.js').InteractiveElement;

var InteractiveElementUpdatedMessage = function() {
    this.interactiveElement = new InteractiveElement();
};

require('util').inherits(InteractiveElementUpdatedMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new InteractiveElementUpdatedMessage();
};

InteractiveElementUpdatedMessage.prototype.serialize = function(output) {
    this.serializeAs_InteractiveElementUpdatedMessage(output);
};

InteractiveElementUpdatedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_InteractiveElementUpdatedMessage(input);
};

InteractiveElementUpdatedMessage.prototype.serializeAs_InteractiveElementUpdatedMessage = function(param1) {
    this.interactiveElement.serializeAs_InteractiveElement(param1);
};

InteractiveElementUpdatedMessage.prototype.deserializeAs_InteractiveElementUpdatedMessage = function(param1) {
    this.interactiveElement = new InteractiveElement();
    this.interactiveElement.deserialize(param1);
};

InteractiveElementUpdatedMessage.prototype.getMessageId = function() {
    return 5708;
};

InteractiveElementUpdatedMessage.prototype.getClassName = function() {
    return 'InteractiveElementUpdatedMessage';
};

module.exports.id = 5708;
module.exports.InteractiveElementUpdatedMessage = InteractiveElementUpdatedMessage;