var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var AllianceInsiderInfoRequestMessage = function() {

};

require('util').inherits(AllianceInsiderInfoRequestMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new AllianceInsiderInfoRequestMessage();
};

AllianceInsiderInfoRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_AllianceInsiderInfoRequestMessage(output);
};

AllianceInsiderInfoRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_AllianceInsiderInfoRequestMessage(input);
};

AllianceInsiderInfoRequestMessage.prototype.serializeAs_AllianceInsiderInfoRequestMessage = function(param1) {

};

AllianceInsiderInfoRequestMessage.prototype.deserializeAs_AllianceInsiderInfoRequestMessage = function(param1) {

};

AllianceInsiderInfoRequestMessage.prototype.getMessageId = function() {
    return 6417;
};

AllianceInsiderInfoRequestMessage.prototype.getClassName = function() {
    return 'AllianceInsiderInfoRequestMessage';
};

module.exports.id = 6417;
module.exports.AllianceInsiderInfoRequestMessage = AllianceInsiderInfoRequestMessage;