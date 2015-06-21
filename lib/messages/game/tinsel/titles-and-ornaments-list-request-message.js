var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var TitlesAndOrnamentsListRequestMessage = function() {

};

require('util').inherits(TitlesAndOrnamentsListRequestMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new TitlesAndOrnamentsListRequestMessage();
};

TitlesAndOrnamentsListRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_TitlesAndOrnamentsListRequestMessage(output);
};

TitlesAndOrnamentsListRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_TitlesAndOrnamentsListRequestMessage(input);
};

TitlesAndOrnamentsListRequestMessage.prototype.serializeAs_TitlesAndOrnamentsListRequestMessage = function(param1) {

};

TitlesAndOrnamentsListRequestMessage.prototype.deserializeAs_TitlesAndOrnamentsListRequestMessage = function(param1) {

};

TitlesAndOrnamentsListRequestMessage.prototype.getMessageId = function() {
    return 6363;
};

TitlesAndOrnamentsListRequestMessage.prototype.getClassName = function() {
    return 'TitlesAndOrnamentsListRequestMessage';
};

module.exports.id = 6363;
module.exports.TitlesAndOrnamentsListRequestMessage = TitlesAndOrnamentsListRequestMessage;