var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var GoldItem = require('../../../../types/game/data/items/gold-item.js').GoldItem;

var GoldAddedMessage = function() {
    this.gold = new GoldItem();
};

require('util').inherits(GoldAddedMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new GoldAddedMessage();
};

GoldAddedMessage.prototype.serialize = function(output) {
    this.serializeAs_GoldAddedMessage(output);
};

GoldAddedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GoldAddedMessage(input);
};

GoldAddedMessage.prototype.serializeAs_GoldAddedMessage = function(param1) {
    this.gold.serializeAs_GoldItem(param1);
};

GoldAddedMessage.prototype.deserializeAs_GoldAddedMessage = function(param1) {
    this.gold = new GoldItem();
    this.gold.deserialize(param1);
};

GoldAddedMessage.prototype.getMessageId = function() {
    return 6030;
};

GoldAddedMessage.prototype.getClassName = function() {
    return 'GoldAddedMessage';
};

module.exports.id = 6030;
module.exports.GoldAddedMessage = GoldAddedMessage;