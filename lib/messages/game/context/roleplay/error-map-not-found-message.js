var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ErrorMapNotFoundMessage = function() {
    this.mapId = 0;
};

require('util').inherits(ErrorMapNotFoundMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new ErrorMapNotFoundMessage();
};

ErrorMapNotFoundMessage.prototype.serialize = function(output) {
    this.serializeAs_ErrorMapNotFoundMessage(output);
};

ErrorMapNotFoundMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ErrorMapNotFoundMessage(input);
};

ErrorMapNotFoundMessage.prototype.serializeAs_ErrorMapNotFoundMessage = function(param1) {
    if (this.mapId < 0) {
        throw new Error("Forbidden value (" + this.mapId + ") on element mapId.");
    } else {
        param1.writeInt(this.mapId);
        return;
    }
};

ErrorMapNotFoundMessage.prototype.deserializeAs_ErrorMapNotFoundMessage = function(param1) {
    this.mapId = param1.readInt();
    if (this.mapId < 0) {
        throw new Error("Forbidden value (" + this.mapId + ") on element of ErrorMapNotFoundMessage.mapId.");
    } else {
        return;
    }
};

ErrorMapNotFoundMessage.prototype.getMessageId = function() {
    return 6197;
};

ErrorMapNotFoundMessage.prototype.getClassName = function() {
    return 'ErrorMapNotFoundMessage';
};

module.exports.id = 6197;
module.exports.ErrorMapNotFoundMessage = ErrorMapNotFoundMessage;