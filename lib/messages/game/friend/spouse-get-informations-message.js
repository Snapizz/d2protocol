var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var SpouseGetInformationsMessage = function() {

};

require('util').inherits(SpouseGetInformationsMessage, d2com.NetworkMessage.class);

SpouseGetInformationsMessage.prototype.serialize = function(output) {
    this.serializeAs_SpouseGetInformationsMessage(output);
};

SpouseGetInformationsMessage.prototype.deserialize = function(input) {
    this.deserializeAs_SpouseGetInformationsMessage(input);
};

SpouseGetInformationsMessage.prototype.serializeAs_SpouseGetInformationsMessage = function(param1) {

};

SpouseGetInformationsMessage.prototype.deserializeAs_SpouseGetInformationsMessage = function(param1) {

};

SpouseGetInformationsMessage.prototype.getMessageId = function() {
    return 6355;
};

SpouseGetInformationsMessage.prototype.getClassName = function() {
    return 'SpouseGetInformationsMessage';
};

module.exports.id = 6355;
module.exports.class = SpouseGetInformationsMessage;
module.exports.getInstance = function() {
    return new SpouseGetInformationsMessage;
};