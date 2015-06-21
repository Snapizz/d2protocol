var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var ExchangeReplayStopMessage = function() {

};

require('util').inherits(ExchangeReplayStopMessage, d2com.NetworkMessage.class);

ExchangeReplayStopMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeReplayStopMessage(output);
};

ExchangeReplayStopMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeReplayStopMessage(input);
};

ExchangeReplayStopMessage.prototype.serializeAs_ExchangeReplayStopMessage = function(param1) {

};

ExchangeReplayStopMessage.prototype.deserializeAs_ExchangeReplayStopMessage = function(param1) {

};

ExchangeReplayStopMessage.prototype.getMessageId = function() {
    return 6001;
};

ExchangeReplayStopMessage.prototype.getClassName = function() {
    return 'ExchangeReplayStopMessage';
};

module.exports.id = 6001;
module.exports.class = ExchangeReplayStopMessage;
module.exports.getInstance = function() {
    return new ExchangeReplayStopMessage;
};