var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var ObjectItem = require('../../../../types/game/data/items/object-item.js').class;

var ObjectModifiedMessage = function() {
    this.object = new ObjectItem();
};

require('util').inherits(ObjectModifiedMessage, d2com.NetworkMessage.class);

ObjectModifiedMessage.prototype.serialize = function(output) {
    this.serializeAs_ObjectModifiedMessage(output);
};

ObjectModifiedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ObjectModifiedMessage(input);
};

ObjectModifiedMessage.prototype.serializeAs_ObjectModifiedMessage = function(param1) {
    this.object.serializeAs_ObjectItem(param1);
};

ObjectModifiedMessage.prototype.deserializeAs_ObjectModifiedMessage = function(param1) {
    this.object = new ObjectItem();
    this.object.deserialize(param1);
};

ObjectModifiedMessage.prototype.getMessageId = function() {
    return 3029;
};

ObjectModifiedMessage.prototype.getClassName = function() {
    return 'ObjectModifiedMessage';
};

module.exports.id = 3029;
module.exports.class = ObjectModifiedMessage;
module.exports.getInstance = function() {
    return new ObjectModifiedMessage;
};