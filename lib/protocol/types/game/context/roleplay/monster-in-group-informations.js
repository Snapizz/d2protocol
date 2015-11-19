/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MonsterInGroupLightInformations = require('./monster-in-group-light-informations');
var EntityLook = require('../../look/entity-look');
var MonsterInGroupInformations = (function (_super) {
    __extends(MonsterInGroupInformations, _super);
    function MonsterInGroupInformations() {
        this.look = new EntityLook();
        _super.call(this);
    }
    MonsterInGroupInformations.prototype.getTypeId = function () {
        return MonsterInGroupInformations.ID;
    };
    MonsterInGroupInformations.prototype.reset = function () {
        this.look = new EntityLook();
    };
    MonsterInGroupInformations.prototype.serialize = function (param1) {
        this.serializeAs_MonsterInGroupInformations(param1);
    };
    MonsterInGroupInformations.prototype.serializeAs_MonsterInGroupInformations = function (param1) {
        _super.prototype.serializeAs_MonsterInGroupLightInformations.call(this, param1);
        this.look.serializeAs_EntityLook(param1);
    };
    MonsterInGroupInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_MonsterInGroupInformations(param1);
    };
    MonsterInGroupInformations.prototype.deserializeAs_MonsterInGroupInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.look = new EntityLook();
        this.look.deserialize(param1);
    };
    MonsterInGroupInformations.ID = 144;
    return MonsterInGroupInformations;
})(MonsterInGroupLightInformations);
module.exports = MonsterInGroupInformations;
