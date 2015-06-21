var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeReplayCountModifiedMessage = function() {
    this.count = 0;
};

require('util').inherits(ExchangeReplayCountModifiedMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new ExchangeReplayCountModifiedMessage();
};

ExchangeReplayCountModifiedMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeReplayCountModifiedMessage(output);
};

ExchangeReplayCountModifiedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeReplayCountModifiedMessage(input);
};

ExchangeReplayCountModifiedMessage.prototype.serializeAs_ExchangeReplayCountModifiedMessage = function(param1) {
    param1.writeVarInt(this.count);
};

ExchangeReplayCountModifiedMessage.prototype.deserializeAs_ExchangeReplayCountModifiedMessage = function(param1) {
    this.count = param1.readVarInt();
};

ExchangeReplayCountModifiedMessage.prototype.getMessageId = function() {
    return 6023;
};

ExchangeReplayCountModifiedMessage.prototype.getClassName = function() {
    return 'ExchangeReplayCountModifiedMessage';
};

module.exports.id = 6023;
module.exports.ExchangeReplayCountModifiedMessage = ExchangeReplayCountModifiedMessage;