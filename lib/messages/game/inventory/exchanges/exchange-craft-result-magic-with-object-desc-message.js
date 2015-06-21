var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var ObjectItemNotInContainer = require('../../../../types/game/data/items/object-item-not-in-container.js').ObjectItemNotInContainer;

var ExchangeCraftResultMagicWithObjectDescMessage = function() {
    this.magicPoolStatus = 0;
};

require('util').inherits(ExchangeCraftResultMagicWithObjectDescMessage, require('./exchange-craft-result-with-object-desc-message.js').ExchangeCraftResultWithObjectDescMessage);

module.exports = function() {
    return new ExchangeCraftResultMagicWithObjectDescMessage();
};

ExchangeCraftResultMagicWithObjectDescMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeCraftResultMagicWithObjectDescMessage(output);
};

ExchangeCraftResultMagicWithObjectDescMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeCraftResultMagicWithObjectDescMessage(input);
};

ExchangeCraftResultMagicWithObjectDescMessage.prototype.serializeAs_ExchangeCraftResultMagicWithObjectDescMessage = function(param1) {
    this.serializeAs_ExchangeCraftResultWithObjectDescMessage(param1);
    param1.writeByte(this.magicPoolStatus);
};

ExchangeCraftResultMagicWithObjectDescMessage.prototype.deserializeAs_ExchangeCraftResultMagicWithObjectDescMessage = function(param1) {
    this.deserializeAs_ExchangeCraftResultWithObjectDescMessage(param1);
    this.magicPoolStatus = param1.readByte();
};

ExchangeCraftResultMagicWithObjectDescMessage.prototype.getMessageId = function() {
    return 6188;
};

ExchangeCraftResultMagicWithObjectDescMessage.prototype.getClassName = function() {
    return 'ExchangeCraftResultMagicWithObjectDescMessage';
};

module.exports.id = 6188;
module.exports.ExchangeCraftResultMagicWithObjectDescMessage = ExchangeCraftResultMagicWithObjectDescMessage;