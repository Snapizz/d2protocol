var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var MountRidingMessage = module.exports = function() {
    this.isRiding = false;

    return this;
};

require('util').inherits(MountRidingMessage, d2com.NetworkMessage.class);

MountRidingMessage.prototype.serialize = function(output) {
    this.serializeAs_MountRidingMessage(output);
};

MountRidingMessage.prototype.deserialize = function(input) {
    this.deserializeAs_MountRidingMessage(input);
};

MountRidingMessage.prototype.serializeAs_MountRidingMessage = function(param1) {
    param1.writeBoolean(this.isRiding);
};

MountRidingMessage.prototype.deserializeAs_MountRidingMessage = function(param1) {
    this.isRiding = param1.readBoolean();
};

MountRidingMessage.prototype.getMessageId = function() {
    return 5967;
};

MountRidingMessage.prototype.getClassName = function() {
    return 'MountRidingMessage';
};

module.exports.id = 5967;