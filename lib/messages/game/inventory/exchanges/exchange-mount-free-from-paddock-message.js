var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeMountFreeFromPaddockMessage = module.exports = function() {
    this.name = "";
    this.worldX = 0;
    this.worldY = 0;
    this.liberator = "";

    return this;
};

require('util').inherits(ExchangeMountFreeFromPaddockMessage, d2com.NetworkMessage.class);

ExchangeMountFreeFromPaddockMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeMountFreeFromPaddockMessage(output);
};

ExchangeMountFreeFromPaddockMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeMountFreeFromPaddockMessage(input);
};

ExchangeMountFreeFromPaddockMessage.prototype.serializeAs_ExchangeMountFreeFromPaddockMessage = function(param1) {
    param1.writeUTF(this.name);
    if (this.worldX < -255 || this.worldX > 255) {
        throw new Error("Forbidden value (" + this.worldX + ") on element worldX.");
    } else {
        param1.writeShort(this.worldX);
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error("Forbidden value (" + this.worldY + ") on element worldY.");
        } else {
            param1.writeShort(this.worldY);
            param1.writeUTF(this.liberator);
            return;
        }
    }
};

ExchangeMountFreeFromPaddockMessage.prototype.deserializeAs_ExchangeMountFreeFromPaddockMessage = function(param1) {
    this.name = param1.readUTF();
    this.worldX = param1.readShort();
    if (this.worldX < -255 || this.worldX > 255) {
        throw new Error("Forbidden value (" + this.worldX + ") on element of ExchangeMountFreeFromPaddockMessage.worldX.");
    } else {
        this.worldY = param1.readShort();
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error("Forbidden value (" + this.worldY + ") on element of ExchangeMountFreeFromPaddockMessage.worldY.");
        } else {
            this.liberator = param1.readUTF();
            return;
        }
    }
};

ExchangeMountFreeFromPaddockMessage.prototype.getMessageId = function() {
    return 6055;
};

ExchangeMountFreeFromPaddockMessage.prototype.getClassName = function() {
    return 'ExchangeMountFreeFromPaddockMessage';
};

module.exports.id = 6055;