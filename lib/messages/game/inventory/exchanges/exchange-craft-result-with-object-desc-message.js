var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var ObjectItemNotInContainer = require('../../../../types/game/data/items/object-item-not-in-container.js').class;

var ExchangeCraftResultWithObjectDescMessage = function() {
    this.objectInfo = new ObjectItemNotInContainer();
};

require('util').inherits(ExchangeCraftResultWithObjectDescMessage, require('./exchange-craft-result-message.js').class);

ExchangeCraftResultWithObjectDescMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeCraftResultWithObjectDescMessage(output);
};

ExchangeCraftResultWithObjectDescMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeCraftResultWithObjectDescMessage(input);
};

ExchangeCraftResultWithObjectDescMessage.prototype.serializeAs_ExchangeCraftResultWithObjectDescMessage = function(param1) {
    this.serializeAs_ExchangeCraftResultMessageAs_ExchangeCraftResultMessage(param1);
    this.objectInfo.serializeAs_ObjectItemNotInContainer(param1);
};

ExchangeCraftResultWithObjectDescMessage.prototype.deserializeAs_ExchangeCraftResultWithObjectDescMessage = function(param1) {
    this.deserializeAs_ExchangeCraftResultMessage(param1);
    this.objectInfo = new ObjectItemNotInContainer();
    this.objectInfo.deserialize(param1);
};

ExchangeCraftResultWithObjectDescMessage.prototype.getMessageId = function() {
    return 5999;
};

ExchangeCraftResultWithObjectDescMessage.prototype.getClassName = function() {
    return 'ExchangeCraftResultWithObjectDescMessage';
};

module.exports.id = 5999;
module.exports.class = ExchangeCraftResultWithObjectDescMessage;
module.exports.getInstance = function() {
    return new ExchangeCraftResultWithObjectDescMessage;
};