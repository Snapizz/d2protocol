var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var KrosmasterPlayingStatusMessage = module.exports = function() {
    this.playing = false;

    return this;
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