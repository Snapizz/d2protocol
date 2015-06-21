var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var GoldItem = require('../../../../types/game/data/items/gold-item.js').class;

var GoldAddedMessage = module.exports = function() {
    this.gold = new GoldItem();

    return this;
};

require('util').inherits(GoldAddedMessage, d2com.NetworkMessage.class);

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