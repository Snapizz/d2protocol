var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var SpouseStatusMessage = function() {
    this.hasSpouse = false;
};

require('util').inherits(SpouseStatusMessage, d2com.NetworkMessage.class);

SpouseStatusMessage.prototype.serialize = function(output) {
    this.serializeAs_SpouseStatusMessage(output);
};

SpouseStatusMessage.prototype.deserialize = function(input) {
    this.deserializeAs_SpouseStatusMessage(input);
};

SpouseStatusMessage.prototype.serializeAs_SpouseStatusMessage = function(param1) {
    param1.writeBoolean(this.hasSpouse);
};

SpouseStatusMessage.prototype.deserializeAs_SpouseStatusMessage = function(param1) {
    this.hasSpouse = param1.readBoolean();
};

SpouseStatusMessage.prototype.getMessageId = function() {
    return 6265;
};

SpouseStatusMessage.prototype.getClassName = function() {
    return 'SpouseStatusMessage';
};

module.exports.id = 6265;
module.exports.class = SpouseStatusMessage;
module.exports.getInstance = function() {
    return new SpouseStatusMessage;
};