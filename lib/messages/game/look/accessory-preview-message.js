var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var EntityLook = require('../../../types/game/look/entity-look.js').class;

var AccessoryPreviewMessage = function() {
    this.look = new EntityLook();
};

require('util').inherits(AccessoryPreviewMessage, d2com.NetworkMessage.class);

AccessoryPreviewMessage.prototype.serialize = function(output) {
    this.serializeAs_AccessoryPreviewMessage(output);
};

AccessoryPreviewMessage.prototype.deserialize = function(input) {
    this.deserializeAs_AccessoryPreviewMessage(input);
};

AccessoryPreviewMessage.prototype.serializeAs_AccessoryPreviewMessage = function(param1) {
    this.look.serializeAs_EntityLook(param1);
};

AccessoryPreviewMessage.prototype.deserializeAs_AccessoryPreviewMessage = function(param1) {
    this.look = new EntityLook();
    this.look.deserialize(param1);
};

AccessoryPreviewMessage.prototype.getMessageId = function() {
    return 6517;
};

AccessoryPreviewMessage.prototype.getClassName = function() {
    return 'AccessoryPreviewMessage';
};

module.exports.id = 6517;
module.exports.class = AccessoryPreviewMessage;
module.exports.getInstance = function() {
    return new AccessoryPreviewMessage;
};