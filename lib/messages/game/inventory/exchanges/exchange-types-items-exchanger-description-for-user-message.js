var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var BidExchangerObjectInfo = require('../../../../types/game/data/items/bid-exchanger-object-info.js').class;

var ExchangeTypesItemsExchangerDescriptionForUserMessage = function() {
    this.itemTypeDescriptions = [];
};

require('util').inherits(ExchangeTypesItemsExchangerDescriptionForUserMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new ExchangeTypesItemsExchangerDescriptionForUserMessage();
};

ExchangeTypesItemsExchangerDescriptionForUserMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeTypesItemsExchangerDescriptionForUserMessage(output);
};

ExchangeTypesItemsExchangerDescriptionForUserMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeTypesItemsExchangerDescriptionForUserMessage(input);
};

ExchangeTypesItemsExchangerDescriptionForUserMessage.prototype.serializeAs_ExchangeTypesItemsExchangerDescriptionForUserMessage = function(param1) {
    param1.writeShort(this.itemTypeDescriptions.length);
    var _loc2_ = 0;
    while (_loc2_ < this.itemTypeDescriptions.length) {
        (this.itemTypeDescriptions[_loc2_]).serializeAs_BidExchangerObjectInfo(param1);
        _loc2_++;
    }
};

ExchangeTypesItemsExchangerDescriptionForUserMessage.prototype.deserializeAs_ExchangeTypesItemsExchangerDescriptionForUserMessage = function(param1) {
    var _loc4_ = null;
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = new BidExchangerObjectInfo();
        _loc4_.deserialize(param1);
        this.itemTypeDescriptions.push(_loc4_);
        _loc3_++;
    }
};

ExchangeTypesItemsExchangerDescriptionForUserMessage.prototype.getMessageId = function() {
    return 5752;
};

ExchangeTypesItemsExchangerDescriptionForUserMessage.prototype.getClassName = function() {
    return 'ExchangeTypesItemsExchangerDescriptionForUserMessage';
};

module.exports.id = 5752;
module.exports.ExchangeTypesItemsExchangerDescriptionForUserMessage = ExchangeTypesItemsExchangerDescriptionForUserMessage;