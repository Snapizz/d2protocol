var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var StatedElement = require('../../../types/game/interactive/stated-element.js').class;

var StatedElementUpdatedMessage = module.exports = function() {
    this.statedElement = new StatedElement();

    return this;
};

require('util').inherits(StatedElementUpdatedMessage, d2com.NetworkMessage.class);

StatedElementUpdatedMessage.prototype.serialize = function(output) {
    this.serializeAs_StatedElementUpdatedMessage(output);
};

StatedElementUpdatedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_StatedElementUpdatedMessage(input);
};

StatedElementUpdatedMessage.prototype.serializeAs_StatedElementUpdatedMessage = function(param1) {
    this.statedElement.serializeAs_StatedElement(param1);
};

StatedElementUpdatedMessage.prototype.deserializeAs_StatedElementUpdatedMessage = function(param1) {
    this.statedElement = new StatedElement();
    this.statedElement.deserialize(param1);
};

StatedElementUpdatedMessage.prototype.getMessageId = function() {
    return 5709;
};

StatedElementUpdatedMessage.prototype.getClassName = function() {
    return 'StatedElementUpdatedMessage';
};

module.exports.id = 5709;