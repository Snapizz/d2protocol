/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var StatedElement = (function () {
    function StatedElement() {
        this.elementId = 0;
        this.elementCellId = 0;
        this.elementState = 0;
    }
    StatedElement.prototype.getTypeId = function () {
        return StatedElement.ID;
    };
    StatedElement.prototype.reset = function () {
        this.elementId = 0;
        this.elementCellId = 0;
        this.elementState = 0;
    };
    StatedElement.prototype.serialize = function (param1) {
        this.serializeAs_StatedElement(param1);
    };
    StatedElement.prototype.serializeAs_StatedElement = function (param1) {
        if (this.elementId < 0) {
            throw new Error('Forbidden value (' + this.elementId + ') on element elementId.');
        }
        param1.writeInt(this.elementId);
        if (this.elementCellId < 0 || this.elementCellId > 559) {
            throw new Error('Forbidden value (' + this.elementCellId + ') on element elementCellId.');
        }
        param1.writeVarShort(this.elementCellId);
        if (this.elementState < 0) {
            throw new Error('Forbidden value (' + this.elementState + ') on element elementState.');
        }
        param1.writeVarInt(this.elementState);
    };
    StatedElement.prototype.deserialize = function (param1) {
        this.deserializeAs_StatedElement(param1);
    };
    StatedElement.prototype.deserializeAs_StatedElement = function (param1) {
        this.elementId = param1.readInt();
        if (this.elementId < 0) {
            throw new Error('Forbidden value (' + this.elementId + ') on element of StatedElement.elementId.');
        }
        this.elementCellId = param1.readVarUhShort();
        if (this.elementCellId < 0 || this.elementCellId > 559) {
            throw new Error('Forbidden value (' + this.elementCellId + ') on element of StatedElement.elementCellId.');
        }
        this.elementState = param1.readVarUhInt();
        if (this.elementState < 0) {
            throw new Error('Forbidden value (' + this.elementState + ') on element of StatedElement.elementState.');
        }
    };
    StatedElement.ID = 108;
    return StatedElement;
})();
module.exports = StatedElement;
