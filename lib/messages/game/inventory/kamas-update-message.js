var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var KamasUpdateMessage = function() {
    this.kamasTotal = 0;
};

require('util').inherits(KamasUpdateMessage, d2com.NetworkMessage.class);

KamasUpdateMessage.prototype.serialize = function(output) {
    this.serializeAs_KamasUpdateMessage(output);
};

KamasUpdateMessage.prototype.deserialize = function(input) {
    this.deserializeAs_KamasUpdateMessage(input);
};

KamasUpdateMessage.prototype.serializeAs_KamasUpdateMessage = function(param1) {
    param1.writeVarInt(this.kamasTotal);
};

KamasUpdateMessage.prototype.deserializeAs_KamasUpdateMessage = function(param1) {
    this.kamasTotal = param1.readVarInt();
};

KamasUpdateMessage.prototype.getMessageId = function() {
    return 5537;
};

KamasUpdateMessage.prototype.getClassName = function() {
    return 'KamasUpdateMessage';
};

module.exports.id = 5537;
module.exports.class = KamasUpdateMessage;
module.exports.getInstance = function() {
    return new KamasUpdateMessage;
};