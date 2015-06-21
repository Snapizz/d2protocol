var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var KrosmasterPlayingStatusMessage = function() {
    this.playing = false;
};

require('util').inherits(KrosmasterPlayingStatusMessage, d2com.NetworkMessage.class);

KrosmasterPlayingStatusMessage.prototype.serialize = function(output) {
    this.serializeAs_KrosmasterPlayingStatusMessage(output);
};

KrosmasterPlayingStatusMessage.prototype.deserialize = function(input) {
    this.deserializeAs_KrosmasterPlayingStatusMessage(input);
};

KrosmasterPlayingStatusMessage.prototype.serializeAs_KrosmasterPlayingStatusMessage = function(param1) {
    param1.writeBoolean(this.playing);
};

KrosmasterPlayingStatusMessage.prototype.deserializeAs_KrosmasterPlayingStatusMessage = function(param1) {
    this.playing = param1.readBoolean();
};

KrosmasterPlayingStatusMessage.prototype.getMessageId = function() {
    return 6347;
};

KrosmasterPlayingStatusMessage.prototype.getClassName = function() {
    return 'KrosmasterPlayingStatusMessage';
};

module.exports.id = 6347;
module.exports.class = KrosmasterPlayingStatusMessage;
module.exports.getInstance = function() {
    return new KrosmasterPlayingStatusMessage;
};