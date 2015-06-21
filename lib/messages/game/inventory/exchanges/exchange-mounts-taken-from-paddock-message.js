var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeMountsTakenFromPaddockMessage = module.exports = function() {
    this.name = "";
    this.worldX = 0;
    this.worldY = 0;
    this.ownername = "";

    return this;
};

require('util').inherits(ExchangeMountsTakenFromPaddockMessage, d2com.NetworkMessage.class);

ExchangeMountsTakenFromPaddockMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeMountsTakenFromPaddockMessage(output);
};

ExchangeMountsTakenFromPaddockMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeMountsTakenFromPaddockMessage(input);
};

ExchangeMountsTakenFromPaddockMessage.prototype.serializeAs_ExchangeMountsTakenFromPaddockMessage = function(param1) {
    param1.writeUTF(this.name);
    if (this.worldX < -255 || this.worldX > 255) {
        throw new Error("Forbidden value (" + this.worldX + ") on element worldX.");
    } else {
        param1.writeShort(this.worldX);
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error("Forbidden value (" + this.worldY + ") on element worldY.");
        } else {
            param1.writeShort(this.worldY);
            param1.writeUTF(this.ownername);
            return;
        }
    }
};

ExchangeMountsTakenFromPaddockMessage.prototype.deserializeAs_ExchangeMountsTakenFromPaddockMessage = function(param1) {
    this.name = param1.readUTF();
    this.worldX = param1.readShort();
    if (this.worldX < -255 || this.worldX > 255) {
        throw new Error("Forbidden value (" + this.worldX + ") on element of ExchangeMountsTakenFromPaddockMessage.worldX.");
    } else {
        this.worldY = param1.readShort();
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error("Forbidden value (" + this.worldY + ") on element of ExchangeMountsTakenFromPaddockMessage.worldY.");
        } else {
            this.ownername = param1.readUTF();
            return;
        }
    }
};

ExchangeMountsTakenFromPaddockMessage.prototype.getMessageId = function() {
    return 6554;
};

ExchangeMountsTakenFromPaddockMessage.prototype.getClassName = function() {
    return 'ExchangeMountsTakenFromPaddockMessage';
};

module.exports.id = 6554;