var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameMapChangeOrientationRequestMessage = module.exports = function() {
    this.direction = 1;

    return this;
};

require('util').inherits(GameMapChangeOrientationRequestMessage, d2com.NetworkMessage.class);

GameMapChangeOrientationRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_GameMapChangeOrientationRequestMessage(output);
};

GameMapChangeOrientationRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameMapChangeOrientationRequestMessage(input);
};

GameMapChangeOrientationRequestMessage.prototype.serializeAs_GameMapChangeOrientationRequestMessage = function(param1) {
    param1.writeByte(this.direction);
};

GameMapChangeOrientationRequestMessage.prototype.deserializeAs_GameMapChangeOrientationRequestMessage = function(param1) {
    this.direction = param1.readByte();
    if (this.direction < 0) {
        throw new Error("Forbidden value (" + this.direction + ") on element of GameMapChangeOrientationRequestMessage.direction.");
    } else {
        return;
    }
};

GameMapChangeOrientationRequestMessage.prototype.getMessageId = function() {
    return 945;
};

GameMapChangeOrientationRequestMessage.prototype.getClassName = function() {
    return 'GameMapChangeOrientationRequestMessage';
};

module.exports.id = 945;