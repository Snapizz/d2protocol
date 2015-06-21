var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var ObjectItem = require('../../../../types/game/data/items/object-item.js').class;

var ObjectAddedMessage = module.exports = function() {
    this.object = new ObjectItem();

    return this;
};

require('util').inherits(ObjectAddedMessage, d2com.NetworkMessage.class);

ObjectAddedMessage.prototype.serialize = function(output) {
    this.serializeAs_ObjectAddedMessage(output);
};

ObjectAddedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ObjectAddedMessage(input);
};

ObjectAddedMessage.prototype.serializeAs_ObjectAddedMessage = function(param1) {
    this.object.serializeAs_ObjectItem(param1);
};

ObjectAddedMessage.prototype.deserializeAs_ObjectAddedMessage = function(param1) {
    this.object = new ObjectItem();
    this.object.deserialize(param1);
};

ObjectAddedMessage.prototype.getMessageId = function() {
    return 3025;
};

ObjectAddedMessage.prototype.getClassName = function() {
    return 'ObjectAddedMessage';
};

module.exports.id = 3025;