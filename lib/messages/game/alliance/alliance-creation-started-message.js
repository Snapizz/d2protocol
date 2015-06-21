var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var AllianceCreationStartedMessage = module.exports = function() {


    return this;
};

require('util').inherits(AllianceCreationStartedMessage, d2com.NetworkMessage.class);

AllianceCreationStartedMessage.prototype.serialize = function(output) {
    this.serializeAs_AllianceCreationStartedMessage(output);
};

AllianceCreationStartedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_AllianceCreationStartedMessage(input);
};

AllianceCreationStartedMessage.prototype.serializeAs_AllianceCreationStartedMessage = function(param1) {

};

AllianceCreationStartedMessage.prototype.deserializeAs_AllianceCreationStartedMessage = function(param1) {

};

AllianceCreationStartedMessage.prototype.getMessageId = function() {
    return 6394;
};

AllianceCreationStartedMessage.prototype.getClassName = function() {
    return 'AllianceCreationStartedMessage';
};

module.exports.id = 6394;