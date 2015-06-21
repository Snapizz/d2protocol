var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var CurrentMapMessage = module.exports = function() {
    this.mapId = 0;
    this.mapKey = "";

    return this;
};

require('util').inherits(CurrentMapMessage, d2com.NetworkMessage.class);

CurrentMapMessage.prototype.serialize = function(output) {
    this.serializeAs_CurrentMapMessage(output);
};

CurrentMapMessage.prototype.deserialize = function(input) {
    this.deserializeAs_CurrentMapMessage(input);
};

CurrentMapMessage.prototype.serializeAs_CurrentMapMessage = function(param1) {
    if (this.mapId < 0) {
        throw new Error("Forbidden value (" + this.mapId + ") on element mapId.");
    } else {
        param1.writeInt(this.mapId);
        param1.writeUTF(this.mapKey);
        return;
    }
};

CurrentMapMessage.prototype.deserializeAs_CurrentMapMessage = function(param1) {
    this.mapId = param1.readInt();
    if (this.mapId < 0) {
        throw new Error("Forbidden value (" + this.mapId + ") on element of CurrentMapMessage.mapId.");
    } else {
        this.mapKey = param1.readUTF();
        return;
    }
};

CurrentMapMessage.prototype.getMessageId = function() {
    return 220;
};

CurrentMapMessage.prototype.getClassName = function() {
    return 'CurrentMapMessage';
};

module.exports.id = 220;