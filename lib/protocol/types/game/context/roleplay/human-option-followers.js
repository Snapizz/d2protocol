/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var HumanOption = require('./human-option');
var IndexedEntityLook = require('../../look/indexed-entity-look');
var HumanOptionFollowers = (function (_super) {
    __extends(HumanOptionFollowers, _super);
    function HumanOptionFollowers() {
        this.followingCharactersLook = [];
        _super.call(this);
    }
    HumanOptionFollowers.prototype.getTypeId = function () {
        return HumanOptionFollowers.ID;
    };
    HumanOptionFollowers.prototype.reset = function () {
        this.followingCharactersLook = [];
    };
    HumanOptionFollowers.prototype.serialize = function (param1) {
        this.serializeAs_HumanOptionFollowers(param1);
    };
    HumanOptionFollowers.prototype.serializeAs_HumanOptionFollowers = function (param1) {
        _super.prototype.serializeAs_HumanOption.call(this, param1);
        param1.writeShort(this.followingCharactersLook.length);
        var _loc2_ = 0;
        while (_loc2_ < this.followingCharactersLook.length) {
            (this.followingCharactersLook[_loc2_]).serializeAs_IndexedEntityLook(param1);
            _loc2_++;
        }
    };
    HumanOptionFollowers.prototype.deserialize = function (param1) {
        this.deserializeAs_HumanOptionFollowers(param1);
    };
    HumanOptionFollowers.prototype.deserializeAs_HumanOptionFollowers = function (param1) {
        var _loc4_ = null;
        _super.prototype.deserialize.call(this, param1);
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new IndexedEntityLook();
            _loc4_.deserialize(param1);
            this.followingCharactersLook.push(_loc4_);
            _loc3_++;
        }
    };
    HumanOptionFollowers.ID = 410;
    return HumanOptionFollowers;
})(HumanOption);
module.exports = HumanOptionFollowers;
