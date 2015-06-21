var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var NotificationUpdateFlagMessage = module.exports = function() {
    this.index = 0;

    return this;
};

require('util').inherits(NotificationUpdateFlagMessage, d2com.NetworkMessage.class);

NotificationUpdateFlagMessage.prototype.serialize = function(output) {
    this.serializeAs_NotificationUpdateFlagMessage(output);
};

NotificationUpdateFlagMessage.prototype.deserialize = function(input) {
    this.deserializeAs_NotificationUpdateFlagMessage(input);
};

NotificationUpdateFlagMessage.prototype.serializeAs_NotificationUpdateFlagMessage = function(param1) {
    if (this.index < 0) {
        throw new Error("Forbidden value (" + this.index + ") on element index.");
    } else {
        param1.writeVarShort(this.index);
        return;
    }
};

NotificationUpdateFlagMessage.prototype.deserializeAs_NotificationUpdateFlagMessage = function(param1) {
    this.index = param1.readVarUhShort();
    if (this.index < 0) {
        throw new Error("Forbidden value (" + this.index + ") on element of NotificationUpdateFlagMessage.index.");
    } else {
        return;
    }
};

NotificationUpdateFlagMessage.prototype.getMessageId = function() {
    return 6090;
};

NotificationUpdateFlagMessage.prototype.getClassName = function() {
    return 'NotificationUpdateFlagMessage';
};

module.exports.id = 6090;