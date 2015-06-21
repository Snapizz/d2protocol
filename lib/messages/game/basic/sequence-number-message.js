var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var SequenceNumberMessage = module.exports = function() {
    this.number = 0;

    return this;
};

require('util').inherits(SequenceNumberMessage, d2com.NetworkMessage.class);

SequenceNumberMessage.prototype.serialize = function(output) {
    this.serializeAs_SequenceNumberMessage(output);
};

SequenceNumberMessage.prototype.deserialize = function(input) {
    this.deserializeAs_SequenceNumberMessage(input);
};

SequenceNumberMessage.prototype.serializeAs_SequenceNumberMessage = function(param1) {
    if (this.number < 0 || this.number > 65535) {
        throw new Error("Forbidden value (" + this.number + ") on element number.");
    } else {
        param1.writeShort(this.number);
        return;
    }
};

SequenceNumberMessage.prototype.deserializeAs_SequenceNumberMessage = function(param1) {
    this.number = param1.readUnsignedShort();
    if (this.number < 0 || this.number > 65535) {
        throw new Error("Forbidden value (" + this.number + ") on element of SequenceNumberMessage.number.");
    } else {
        return;
    }
};

SequenceNumberMessage.prototype.getMessageId = function() {
    return 6317;
};

SequenceNumberMessage.prototype.getClassName = function() {
    return 'SequenceNumberMessage';
};

module.exports.id = 6317;