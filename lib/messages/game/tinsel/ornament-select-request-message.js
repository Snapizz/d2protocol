var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var OrnamentSelectRequestMessage = function() {
    this.ornamentId = 0;
};

require('util').inherits(OrnamentSelectRequestMessage, d2com.NetworkMessage.class);

OrnamentSelectRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_OrnamentSelectRequestMessage(output);
};

OrnamentSelectRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_OrnamentSelectRequestMessage(input);
};

OrnamentSelectRequestMessage.prototype.serializeAs_OrnamentSelectRequestMessage = function(param1) {
    if (this.ornamentId < 0) {
        throw new Error("Forbidden value (" + this.ornamentId + ") on element ornamentId.");
    } else {
        param1.writeVarShort(this.ornamentId);
        return;
    }
};

OrnamentSelectRequestMessage.prototype.deserializeAs_OrnamentSelectRequestMessage = function(param1) {
    this.ornamentId = param1.readVarUhShort();
    if (this.ornamentId < 0) {
        throw new Error("Forbidden value (" + this.ornamentId + ") on element of OrnamentSelectRequestMessage.ornamentId.");
    } else {
        return;
    }
};

OrnamentSelectRequestMessage.prototype.getMessageId = function() {
    return 6374;
};

OrnamentSelectRequestMessage.prototype.getClassName = function() {
    return 'OrnamentSelectRequestMessage';
};

module.exports.id = 6374;
module.exports.class = OrnamentSelectRequestMessage;
module.exports.getInstance = function() {
    return new OrnamentSelectRequestMessage;
};