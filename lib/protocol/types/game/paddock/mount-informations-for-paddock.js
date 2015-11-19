/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var MountInformationsForPaddock = (function () {
    function MountInformationsForPaddock() {
        this.modelId = 0;
        this.name = '';
        this.ownerName = '';
    }
    MountInformationsForPaddock.prototype.getTypeId = function () {
        return MountInformationsForPaddock.ID;
    };
    MountInformationsForPaddock.prototype.reset = function () {
        this.modelId = 0;
        this.name = '';
        this.ownerName = '';
    };
    MountInformationsForPaddock.prototype.serialize = function (param1) {
        this.serializeAs_MountInformationsForPaddock(param1);
    };
    MountInformationsForPaddock.prototype.serializeAs_MountInformationsForPaddock = function (param1) {
        if (this.modelId < 0) {
            throw new Error('Forbidden value (' + this.modelId + ') on element modelId.');
        }
        param1.writeByte(this.modelId);
        param1.writeUTF(this.name);
        param1.writeUTF(this.ownerName);
    };
    MountInformationsForPaddock.prototype.deserialize = function (param1) {
        this.deserializeAs_MountInformationsForPaddock(param1);
    };
    MountInformationsForPaddock.prototype.deserializeAs_MountInformationsForPaddock = function (param1) {
        this.modelId = param1.readByte();
        if (this.modelId < 0) {
            throw new Error('Forbidden value (' + this.modelId + ') on element of MountInformationsForPaddock.modelId.');
        }
        this.name = param1.readUTF();
        this.ownerName = param1.readUTF();
    };
    MountInformationsForPaddock.ID = 184;
    return MountInformationsForPaddock;
})();
module.exports = MountInformationsForPaddock;
