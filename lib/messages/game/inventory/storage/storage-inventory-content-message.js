var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var ObjectItem = require('../../../../types/game/data/items/object-item.js').class;

var StorageInventoryContentMessage = function() {

};

require('util').inherits(StorageInventoryContentMessage, require('../items/inventory-content-message.js'));

module.exports = function() {
    return new StorageInventoryContentMessage();
};

StorageInventoryContentMessage.prototype.serialize = function(output) {
    this.serializeAs_StorageInventoryContentMessage(output);
};

StorageInventoryContentMessage.prototype.deserialize = function(input) {
    this.deserializeAs_StorageInventoryContentMessage(input);
};

StorageInventoryContentMessage.prototype.serializeAs_StorageInventoryContentMessage = function(param1) {
    this.serializeAs_InventoryContentMessage(param1);
};

StorageInventoryContentMessage.prototype.deserializeAs_StorageInventoryContentMessage = function(param1) {
    this.deserializeAs_InventoryContentMessage(param1);
};

StorageInventoryContentMessage.prototype.getMessageId = function() {
    return 5646;
};

StorageInventoryContentMessage.prototype.getClassName = function() {
    return 'StorageInventoryContentMessage';
};

module.exports.id = 5646;
module.exports.StorageInventoryContentMessage = StorageInventoryContentMessage;