/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var PresetItem = (function () {
    function PresetItem() {
        this.position = 63;
        this.objGid = 0;
        this.objUid = 0;
    }
    PresetItem.prototype.getTypeId = function () {
        return PresetItem.ID;
    };
    PresetItem.prototype.reset = function () {
        this.position = 63;
        this.objGid = 0;
        this.objUid = 0;
    };
    PresetItem.prototype.serialize = function (param1) {
        this.serializeAs_PresetItem(param1);
    };
    PresetItem.prototype.serializeAs_PresetItem = function (param1) {
        param1.writeByte(this.position);
        if (this.objGid < 0) {
            throw new Error('Forbidden value (' + this.objGid + ') on element objGid.');
        }
        param1.writeVarShort(this.objGid);
        if (this.objUid < 0) {
            throw new Error('Forbidden value (' + this.objUid + ') on element objUid.');
        }
        param1.writeVarInt(this.objUid);
    };
    PresetItem.prototype.deserialize = function (param1) {
        this.deserializeAs_PresetItem(param1);
    };
    PresetItem.prototype.deserializeAs_PresetItem = function (param1) {
        this.position = param1.readUnsignedByte();
        if (this.position < 0 || this.position > 255) {
            throw new Error('Forbidden value (' + this.position + ') on element of PresetItem.position.');
        }
        this.objGid = param1.readVarUhShort();
        if (this.objGid < 0) {
            throw new Error('Forbidden value (' + this.objGid + ') on element of PresetItem.objGid.');
        }
        this.objUid = param1.readVarUhInt();
        if (this.objUid < 0) {
            throw new Error('Forbidden value (' + this.objUid + ') on element of PresetItem.objUid.');
        }
    };
    PresetItem.ID = 354;
    return PresetItem;
})();
module.exports = PresetItem;
