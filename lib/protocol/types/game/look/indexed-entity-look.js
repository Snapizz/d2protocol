/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var EntityLook = require('./entity-look');
var IndexedEntityLook = (function () {
    function IndexedEntityLook() {
        this.look = new EntityLook();
        this.index = 0;
    }
    IndexedEntityLook.prototype.getTypeId = function () {
        return IndexedEntityLook.ID;
    };
    IndexedEntityLook.prototype.reset = function () {
        this.look = new EntityLook();
        this.index = 0;
    };
    IndexedEntityLook.prototype.serialize = function (param1) {
        this.serializeAs_IndexedEntityLook(param1);
    };
    IndexedEntityLook.prototype.serializeAs_IndexedEntityLook = function (param1) {
        this.look.serializeAs_EntityLook(param1);
        if (this.index < 0) {
            throw new Error('Forbidden value (' + this.index + ') on element index.');
        }
        param1.writeByte(this.index);
    };
    IndexedEntityLook.prototype.deserialize = function (param1) {
        this.deserializeAs_IndexedEntityLook(param1);
    };
    IndexedEntityLook.prototype.deserializeAs_IndexedEntityLook = function (param1) {
        this.look = new EntityLook();
        this.look.deserialize(param1);
        this.index = param1.readByte();
        if (this.index < 0) {
            throw new Error('Forbidden value (' + this.index + ') on element of IndexedEntityLook.index.');
        }
    };
    IndexedEntityLook.ID = 405;
    return IndexedEntityLook;
})();
module.exports = IndexedEntityLook;
