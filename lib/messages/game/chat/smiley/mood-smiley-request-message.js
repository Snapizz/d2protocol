var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var MoodSmileyRequestMessage = module.exports = function() {
    this.smileyId = 0;

    return this;
};

require('util').inherits(MoodSmileyRequestMessage, d2com.NetworkMessage.class);

MoodSmileyRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_MoodSmileyRequestMessage(output);
};

MoodSmileyRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_MoodSmileyRequestMessage(input);
};

MoodSmileyRequestMessage.prototype.serializeAs_MoodSmileyRequestMessage = function(param1) {
    param1.writeByte(this.smileyId);
};

MoodSmileyRequestMessage.prototype.deserializeAs_MoodSmileyRequestMessage = function(param1) {
    this.smileyId = param1.readByte();
};

MoodSmileyRequestMessage.prototype.getMessageId = function() {
    return 6192;
};

MoodSmileyRequestMessage.prototype.getClassName = function() {
    return 'MoodSmileyRequestMessage';
};

module.exports.id = 6192;