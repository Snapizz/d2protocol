var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeReplayMessage = function() {
    this.count = 0;
};

require('util').inherits(ExchangeReplayMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new ExchangeReplayMessage();
};

ExchangeReplayMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeReplayMessage(output);
};

ExchangeReplayMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeReplayMessage(input);
};

ExchangeReplayMessage.prototype.serializeAs_ExchangeReplayMessage = function(param1) {
    param1.writeVarInt(this.count);
};

ExchangeReplayMessage.prototype.deserializeAs_ExchangeReplayMessage = function(param1) {
    this.count = param1.readVarInt();
};

ExchangeReplayMessage.prototype.getMessageId = function() {
    return 6002;
};

ExchangeReplayMessage.prototype.getClassName = function() {
    return 'ExchangeReplayMessage';
};

module.exports.id = 6002;
module.exports.ExchangeReplayMessage = ExchangeReplayMessage;