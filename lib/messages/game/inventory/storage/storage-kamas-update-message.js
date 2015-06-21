var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var StorageKamasUpdateMessage = function() {
    this.kamasTotal = 0;
};

require('util').inherits(StorageKamasUpdateMessage, d2com.NetworkMessage.class);

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
module.exports.class = StorageKamasUpdateMessage;
module.exports.getInstance = function() {
    return new StorageKamasUpdateMessage;
};