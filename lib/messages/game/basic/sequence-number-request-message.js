var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var SequenceNumberRequestMessage = function() {

};

require('util').inherits(SequenceNumberRequestMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new SequenceNumberRequestMessage();
};

SequenceNumberRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_SequenceNumberRequestMessage(output);
};

SequenceNumberRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_SequenceNumberRequestMessage(input);
};

SequenceNumberRequestMessage.prototype.serializeAs_SequenceNumberRequestMessage = function(param1) {

};

SequenceNumberRequestMessage.prototype.deserializeAs_SequenceNumberRequestMessage = function(param1) {

};

SequenceNumberRequestMessage.prototype.getMessageId = function() {
    return 6316;
};

SequenceNumberRequestMessage.prototype.getClassName = function() {
    return 'SequenceNumberRequestMessage';
};

module.exports.id = 6316;
module.exports.SequenceNumberRequestMessage = SequenceNumberRequestMessage;