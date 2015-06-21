var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var KrosmasterAuthTokenMessage = module.exports = function() {
    this.token = "";

    return this;
};

require('util').inherits(KrosmasterAuthTokenMessage, d2com.NetworkMessage.class);

KrosmasterAuthTokenMessage.prototype.serialize = function(output) {
    this.serializeAs_KrosmasterAuthTokenMessage(output);
};

KrosmasterAuthTokenMessage.prototype.deserialize = function(input) {
    this.deserializeAs_KrosmasterAuthTokenMessage(input);
};

KrosmasterAuthTokenMessage.prototype.serializeAs_KrosmasterAuthTokenMessage = function(param1) {
    param1.writeUTF(this.token);
};

KrosmasterAuthTokenMessage.prototype.deserializeAs_KrosmasterAuthTokenMessage = function(param1) {
    this.token = param1.readUTF();
};

KrosmasterAuthTokenMessage.prototype.getMessageId = function() {
    return 6351;
};

KrosmasterAuthTokenMessage.prototype.getClassName = function() {
    return 'KrosmasterAuthTokenMessage';
};

module.exports.id = 6351;