var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var BasicStatMessage = function() {
    this.statId = 0;
};

require('util').inherits(BasicStatMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new BasicStatMessage();
};

BasicStatMessage.prototype.serialize = function(output) {
    this.serializeAs_BasicStatMessage(output);
};

BasicStatMessage.prototype.deserialize = function(input) {
    this.deserializeAs_BasicStatMessage(input);
};

BasicStatMessage.prototype.serializeAs_BasicStatMessage = function(param1) {
    param1.writeVarShort(this.statId);
};

BasicStatMessage.prototype.deserializeAs_BasicStatMessage = function(param1) {
    this.statId = param1.readVarUhShort();
    if (this.statId < 0) {
        throw new Error("Forbidden value (" + this.statId + ") on element of BasicStatMessage.statId.");
    } else {
        return;
    }
};

BasicStatMessage.prototype.getMessageId = function() {
    return 6530;
};

BasicStatMessage.prototype.getClassName = function() {
    return 'BasicStatMessage';
};

module.exports.id = 6530;
module.exports.BasicStatMessage = BasicStatMessage;