/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var Shortcut = (function () {
    function Shortcut() {
        this.slot = 0;
    }
    Shortcut.prototype.getTypeId = function () {
        return Shortcut.ID;
    };
    Shortcut.prototype.reset = function () {
        this.slot = 0;
    };
    Shortcut.prototype.serialize = function (param1) {
        this.serializeAs_Shortcut(param1);
    };
    Shortcut.prototype.serializeAs_Shortcut = function (param1) {
        if (this.slot < 0 || this.slot > 99) {
            throw new Error('Forbidden value (' + this.slot + ') on element slot.');
        }
        param1.writeByte(this.slot);
    };
    Shortcut.prototype.deserialize = function (param1) {
        this.deserializeAs_Shortcut(param1);
    };
    Shortcut.prototype.deserializeAs_Shortcut = function (param1) {
        this.slot = param1.readByte();
        if (this.slot < 0 || this.slot > 99) {
            throw new Error('Forbidden value (' + this.slot + ') on element of Shortcut.slot.');
        }
    };
    Shortcut.ID = 369;
    return Shortcut;
})();
module.exports = Shortcut;
