var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ZaapRespawnSaveRequestMessage = function() {

};

require('util').inherits(ZaapRespawnSaveRequestMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new ZaapRespawnSaveRequestMessage();
};

ZaapRespawnSaveRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_ZaapRespawnSaveRequestMessage(output);
};

ZaapRespawnSaveRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ZaapRespawnSaveRequestMessage(input);
};

ZaapRespawnSaveRequestMessage.prototype.serializeAs_ZaapRespawnSaveRequestMessage = function(param1) {

};

ZaapRespawnSaveRequestMessage.prototype.deserializeAs_ZaapRespawnSaveRequestMessage = function(param1) {

};

ZaapRespawnSaveRequestMessage.prototype.getMessageId = function() {
    return 6572;
};

ZaapRespawnSaveRequestMessage.prototype.getClassName = function() {
    return 'ZaapRespawnSaveRequestMessage';
};

module.exports.id = 6572;
module.exports.ZaapRespawnSaveRequestMessage = ZaapRespawnSaveRequestMessage;