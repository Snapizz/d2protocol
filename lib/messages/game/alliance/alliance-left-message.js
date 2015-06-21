var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var AllianceLeftMessage = function() {

};

require('util').inherits(AllianceLeftMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new AllianceLeftMessage();
};

AllianceLeftMessage.prototype.serialize = function(output) {
    this.serializeAs_AllianceLeftMessage(output);
};

AllianceLeftMessage.prototype.deserialize = function(input) {
    this.deserializeAs_AllianceLeftMessage(input);
};

AllianceLeftMessage.prototype.serializeAs_AllianceLeftMessage = function(param1) {

};

AllianceLeftMessage.prototype.deserializeAs_AllianceLeftMessage = function(param1) {

};

AllianceLeftMessage.prototype.getMessageId = function() {
    return 6398;
};

AllianceLeftMessage.prototype.getClassName = function() {
    return 'AllianceLeftMessage';
};

module.exports.id = 6398;
module.exports.AllianceLeftMessage = AllianceLeftMessage;