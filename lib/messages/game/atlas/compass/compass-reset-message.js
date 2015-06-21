var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var CompassResetMessage = function() {
    this.type = 0;
};

require('util').inherits(CompassResetMessage, d2com.NetworkMessage.class);

CompassResetMessage.prototype.serialize = function(output) {
    this.serializeAs_CompassResetMessage(output);
};

CompassResetMessage.prototype.deserialize = function(input) {
    this.deserializeAs_CompassResetMessage(input);
};

CompassResetMessage.prototype.serializeAs_CompassResetMessage = function(param1) {
    param1.writeByte(this.type);
};

CompassResetMessage.prototype.deserializeAs_CompassResetMessage = function(param1) {
    this.type = param1.readByte();
    if (this.type < 0) {
        throw new Error("Forbidden value (" + this.type + ") on element of CompassResetMessage.type.");
    } else {
        return;
    }
};

CompassResetMessage.prototype.getMessageId = function() {
    return 5584;
};

CompassResetMessage.prototype.getClassName = function() {
    return 'CompassResetMessage';
};

module.exports.id = 5584;
module.exports.class = CompassResetMessage;
module.exports.getInstance = function() {
    return new CompassResetMessage;
};