/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var EntityDispositionInformations = (function () {
    function EntityDispositionInformations() {
        this.cellId = 0;
        this.direction = 1;
    }
    EntityDispositionInformations.prototype.getTypeId = function () {
        return EntityDispositionInformations.ID;
    };
    EntityDispositionInformations.prototype.reset = function () {
        this.cellId = 0;
        this.direction = 1;
    };
    EntityDispositionInformations.prototype.serialize = function (param1) {
        this.serializeAs_EntityDispositionInformations(param1);
    };
    EntityDispositionInformations.prototype.serializeAs_EntityDispositionInformations = function (param1) {
        if (this.cellId < -1 || this.cellId > 559) {
            throw new Error('Forbidden value (' + this.cellId + ') on element cellId.');
        }
        param1.writeShort(this.cellId);
        param1.writeByte(this.direction);
    };
    EntityDispositionInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_EntityDispositionInformations(param1);
    };
    EntityDispositionInformations.prototype.deserializeAs_EntityDispositionInformations = function (param1) {
        this.cellId = param1.readShort();
        if (this.cellId < -1 || this.cellId > 559) {
            throw new Error('Forbidden value (' + this.cellId + ') on element of EntityDispositionInformations.cellId.');
        }
        this.direction = param1.readByte();
        if (this.direction < 0) {
            throw new Error('Forbidden value (' + this.direction + ') on element of EntityDispositionInformations.direction.');
        }
    };
    EntityDispositionInformations.ID = 60;
    return EntityDispositionInformations;
})();
module.exports = EntityDispositionInformations;
