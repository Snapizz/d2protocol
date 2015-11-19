/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var KrosmasterFigure = (function () {
    function KrosmasterFigure() {
        this.uid = '';
        this.figure = 0;
        this.pedestal = 0;
        this.bound = false;
    }
    KrosmasterFigure.prototype.getTypeId = function () {
        return KrosmasterFigure.ID;
    };
    KrosmasterFigure.prototype.reset = function () {
        this.uid = '';
        this.figure = 0;
        this.pedestal = 0;
        this.bound = false;
    };
    KrosmasterFigure.prototype.serialize = function (param1) {
        this.serializeAs_KrosmasterFigure(param1);
    };
    KrosmasterFigure.prototype.serializeAs_KrosmasterFigure = function (param1) {
        param1.writeUTF(this.uid);
        if (this.figure < 0) {
            throw new Error('Forbidden value (' + this.figure + ') on element figure.');
        }
        param1.writeVarShort(this.figure);
        if (this.pedestal < 0) {
            throw new Error('Forbidden value (' + this.pedestal + ') on element pedestal.');
        }
        param1.writeVarShort(this.pedestal);
        param1.writeBoolean(this.bound);
    };
    KrosmasterFigure.prototype.deserialize = function (param1) {
        this.deserializeAs_KrosmasterFigure(param1);
    };
    KrosmasterFigure.prototype.deserializeAs_KrosmasterFigure = function (param1) {
        this.uid = param1.readUTF();
        this.figure = param1.readVarUhShort();
        if (this.figure < 0) {
            throw new Error('Forbidden value (' + this.figure + ') on element of KrosmasterFigure.figure.');
        }
        this.pedestal = param1.readVarUhShort();
        if (this.pedestal < 0) {
            throw new Error('Forbidden value (' + this.pedestal + ') on element of KrosmasterFigure.pedestal.');
        }
        this.bound = param1.readBoolean();
    };
    KrosmasterFigure.ID = 397;
    return KrosmasterFigure;
})();
module.exports = KrosmasterFigure;
