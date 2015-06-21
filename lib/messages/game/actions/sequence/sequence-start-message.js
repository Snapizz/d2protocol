var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var SequenceStartMessage = function() {
    this.sequenceType = 0;
    this.authorId = 0;
};

require('util').inherits(SequenceStartMessage, d2com.NetworkMessage.class);

SequenceStartMessage.prototype.serialize = function(output) {
    this.serializeAs_SequenceStartMessage(output);
};

SequenceStartMessage.prototype.deserialize = function(input) {
    this.deserializeAs_SequenceStartMessage(input);
};

SequenceStartMessage.prototype.serializeAs_SequenceStartMessage = function(param1) {
    param1.writeByte(this.sequenceType);
    param1.writeInt(this.authorId);
};

SequenceStartMessage.prototype.deserializeAs_SequenceStartMessage = function(param1) {
    this.sequenceType = param1.readByte();
    this.authorId = param1.readInt();
};

SequenceStartMessage.prototype.getMessageId = function() {
    return 955;
};

SequenceStartMessage.prototype.getClassName = function() {
    return 'SequenceStartMessage';
};

module.exports.id = 955;
module.exports.class = SequenceStartMessage;
module.exports.getInstance = function() {
    return new SequenceStartMessage;
};