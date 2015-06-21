var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var NumericWhoIsRequestMessage = function() {
    this.playerId = 0;
};

require('util').inherits(NumericWhoIsRequestMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new NumericWhoIsRequestMessage();
};

NumericWhoIsRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_NumericWhoIsRequestMessage(output);
};

NumericWhoIsRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_NumericWhoIsRequestMessage(input);
};

NumericWhoIsRequestMessage.prototype.serializeAs_NumericWhoIsRequestMessage = function(param1) {
    if (this.playerId < 0) {
        throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
    } else {
        param1.writeVarInt(this.playerId);
        return;
    }
};

NumericWhoIsRequestMessage.prototype.deserializeAs_NumericWhoIsRequestMessage = function(param1) {
    this.playerId = param1.readVarUhInt();
    if (this.playerId < 0) {
        throw new Error("Forbidden value (" + this.playerId + ") on element of NumericWhoIsRequestMessage.playerId.");
    } else {
        return;
    }
};

NumericWhoIsRequestMessage.prototype.getMessageId = function() {
    return 6298;
};

NumericWhoIsRequestMessage.prototype.getClassName = function() {
    return 'NumericWhoIsRequestMessage';
};

module.exports.id = 6298;
module.exports.NumericWhoIsRequestMessage = NumericWhoIsRequestMessage;