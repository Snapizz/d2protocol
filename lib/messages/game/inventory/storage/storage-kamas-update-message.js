var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var StorageKamasUpdateMessage = function() {
    this.kamasTotal = 0;
};

require('util').inherits(StorageKamasUpdateMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new StorageKamasUpdateMessage();
};

StorageKamasUpdateMessage.prototype.serialize = function(output) {
    this.serializeAs_StorageKamasUpdateMessage(output);
};

StorageKamasUpdateMessage.prototype.deserialize = function(input) {
    this.deserializeAs_StorageKamasUpdateMessage(input);
};

StorageKamasUpdateMessage.prototype.serializeAs_StorageKamasUpdateMessage = function(param1) {
    param1.writeInt(this.kamasTotal);
};

StorageKamasUpdateMessage.prototype.deserializeAs_StorageKamasUpdateMessage = function(param1) {
    this.kamasTotal = param1.readInt();
};

StorageKamasUpdateMessage.prototype.getMessageId = function() {
    return 5645;
};

StorageKamasUpdateMessage.prototype.getClassName = function() {
    return 'StorageKamasUpdateMessage';
};

module.exports.id = 5645;
module.exports.StorageKamasUpdateMessage = StorageKamasUpdateMessage;