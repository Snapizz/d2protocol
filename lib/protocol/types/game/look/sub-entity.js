/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var EntityLook = require('./entity-look');
var SubEntity = (function () {
    function SubEntity() {
        this.bindingPointCategory = 0;
        this.bindingPointIndex = 0;
        this.subEntityLook = new EntityLook();
    }
    SubEntity.prototype.getTypeId = function () {
        return SubEntity.ID;
    };
    SubEntity.prototype.reset = function () {
        this.bindingPointCategory = 0;
        this.bindingPointIndex = 0;
        this.subEntityLook = new EntityLook();
    };
    SubEntity.prototype.serialize = function (param1) {
        this.serializeAs_SubEntity(param1);
    };
    SubEntity.prototype.serializeAs_SubEntity = function (param1) {
        param1.writeByte(this.bindingPointCategory);
        if (this.bindingPointIndex < 0) {
            throw new Error('Forbidden value (' + this.bindingPointIndex + ') on element bindingPointIndex.');
        }
        param1.writeByte(this.bindingPointIndex);
        this.subEntityLook.serializeAs_EntityLook(param1);
    };
    SubEntity.prototype.deserialize = function (param1) {
        this.deserializeAs_SubEntity(param1);
    };
    SubEntity.prototype.deserializeAs_SubEntity = function (param1) {
        this.bindingPointCategory = param1.readByte();
        if (this.bindingPointCategory < 0) {
            throw new Error('Forbidden value (' + this.bindingPointCategory + ') on element of SubEntity.bindingPointCategory.');
        }
        this.bindingPointIndex = param1.readByte();
        if (this.bindingPointIndex < 0) {
            throw new Error('Forbidden value (' + this.bindingPointIndex + ') on element of SubEntity.bindingPointIndex.');
        }
        this.subEntityLook = new EntityLook();
        this.subEntityLook.deserialize(param1);
    };
    SubEntity.ID = 54;
    return SubEntity;
})();
module.exports = SubEntity;
