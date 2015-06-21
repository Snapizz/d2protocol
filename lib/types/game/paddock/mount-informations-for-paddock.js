var MountInformationsForPaddock = module.exports = function() {
    this.modelId = 0;
    this.name = "";
    this.ownerName = "";

    return this;
};

MountInformationsForPaddock.prototype.serialize = function(output) {
    this.serializeAs_MountInformationsForPaddock(output);
};

MountInformationsForPaddock.prototype.deserialize = function(input) {
    this.deserializeAs_MountInformationsForPaddock(input);
};

MountInformationsForPaddock.prototype.serializeAs_MountInformationsForPaddock = function(param1) {
    if (this.modelId < 0) {
        throw new Error("Forbidden value (" + this.modelId + ") on element modelId.");
    } else {
        param1.writeByte(this.modelId);
        param1.writeUTF(this.name);
        param1.writeUTF(this.ownerName);
        return;
    }
};

MountInformationsForPaddock.prototype.deserializeAs_MountInformationsForPaddock = function(param1) {
    this.modelId = param1.readByte();
    if (this.modelId < 0) {
        throw new Error("Forbidden value (" + this.modelId + ") on element of MountInformationsForPaddock.modelId.");
    } else {
        this.name = param1.readUTF();
        this.ownerName = param1.readUTF();
        return;
    }
};

MountInformationsForPaddock.prototype.getTypeId = function() {
    return 184;
};

MountInformationsForPaddock.prototype.getClassName = function() {
    return 'MountInformationsForPaddock';
};

module.exports.id = 184;