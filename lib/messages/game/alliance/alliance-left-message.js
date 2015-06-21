var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var AllianceLeftMessage = function() {

};

require('util').inherits(AllianceLeftMessage, d2com.NetworkMessage.class);

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
module.exports.class = AllianceLeftMessage;
module.exports.getInstance = function() {
    return new AllianceLeftMessage;
};