var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var ObjectItem = require('../../../../types/game/data/items/object-item.js').class;

var StorageObjectUpdateMessage = function() {
    this.object = new ObjectItem();
};

require('util').inherits(StorageObjectUpdateMessage, d2com.NetworkMessage.class);

StorageObjectUpdateMessage.prototype.serialize = function(output) {
    this.serializeAs_StorageObjectUpdateMessage(output);
};

StorageObjectUpdateMessage.prototype.deserialize = function(input) {
    this.deserializeAs_StorageObjectUpdateMessage(input);
};

StorageObjectUpdateMessage.prototype.serializeAs_StorageObjectUpdateMessage = function(param1) {
    this.object.serializeAs_ObjectItem(param1);
};

StorageObjectUpdateMessage.prototype.deserializeAs_StorageObjectUpdateMessage = function(param1) {
    this.object = new ObjectItem();
    this.object.deserialize(param1);
};

StorageObjectUpdateMessage.prototype.getMessageId = function() {
    return 5647;
};

StorageObjectUpdateMessage.prototype.getClassName = function() {
    return 'StorageObjectUpdateMessage';
};

module.exports.id = 5647;
module.exports.class = StorageObjectUpdateMessage;
module.exports.getInstance = function() {
    return new StorageObjectUpdateMessage;
};