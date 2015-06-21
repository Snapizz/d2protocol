var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GetPartsListMessage = function() {

};

require('util').inherits(GetPartsListMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new GetPartsListMessage();
};

GetPartsListMessage.prototype.serialize = function(output) {
    this.serializeAs_GetPartsListMessage(output);
};

GetPartsListMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GetPartsListMessage(input);
};

GetPartsListMessage.prototype.serializeAs_GetPartsListMessage = function(param1) {

};

GetPartsListMessage.prototype.deserializeAs_GetPartsListMessage = function(param1) {

};

GetPartsListMessage.prototype.getMessageId = function() {
    return 1501;
};

GetPartsListMessage.prototype.getClassName = function() {
    return 'GetPartsListMessage';
};

module.exports.id = 1501;
module.exports.GetPartsListMessage = GetPartsListMessage;