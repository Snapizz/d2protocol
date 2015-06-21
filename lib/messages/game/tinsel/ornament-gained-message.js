var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var OrnamentGainedMessage = module.exports = function() {
    this.ornamentId = 0;

    return this;
};

require('util').inherits(OrnamentGainedMessage, d2com.NetworkMessage.class);

OrnamentGainedMessage.prototype.serialize = function(output) {
    this.serializeAs_OrnamentGainedMessage(output);
};

OrnamentGainedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_OrnamentGainedMessage(input);
};

OrnamentGainedMessage.prototype.serializeAs_OrnamentGainedMessage = function(param1) {
    if (this.ornamentId < 0) {
        throw new Error("Forbidden value (" + this.ornamentId + ") on element ornamentId.");
    } else {
        param1.writeShort(this.ornamentId);
        return;
    }
};

OrnamentGainedMessage.prototype.deserializeAs_OrnamentGainedMessage = function(param1) {
    this.ornamentId = param1.readShort();
    if (this.ornamentId < 0) {
        throw new Error("Forbidden value (" + this.ornamentId + ") on element of OrnamentGainedMessage.ornamentId.");
    } else {
        return;
    }
};

OrnamentGainedMessage.prototype.getMessageId = function() {
    return 6368;
};

OrnamentGainedMessage.prototype.getClassName = function() {
    return 'OrnamentGainedMessage';
};

module.exports.id = 6368;