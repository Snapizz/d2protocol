/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BooleanByteWrapper = require('../../../boolean-byte-wrapper');
var FriendSpouseInformations = require('./friend-spouse-informations');
var FriendSpouseOnlineInformations = (function (_super) {
    __extends(FriendSpouseOnlineInformations, _super);
    function FriendSpouseOnlineInformations() {
        this.mapId = 0;
        this.subAreaId = 0;
        this.inFight = false;
        this.followSpouse = false;
        _super.call(this);
    }
    FriendSpouseOnlineInformations.prototype.getTypeId = function () {
        return FriendSpouseOnlineInformations.ID;
    };
    FriendSpouseOnlineInformations.prototype.reset = function () {
        this.mapId = 0;
        this.subAreaId = 0;
        this.inFight = false;
        this.followSpouse = false;
    };
    FriendSpouseOnlineInformations.prototype.serialize = function (param1) {
        this.serializeAs_FriendSpouseOnlineInformations(param1);
    };
    FriendSpouseOnlineInformations.prototype.serializeAs_FriendSpouseOnlineInformations = function (param1) {
        _super.prototype.serializeAs_FriendSpouseInformations.call(this, param1);
        var _loc2_ = 0;
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.inFight);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.followSpouse);
        param1.writeByte(_loc2_);
        if (this.mapId < 0) {
            throw new Error('Forbidden value (' + this.mapId + ') on element mapId.');
        }
        param1.writeInt(this.mapId);
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
        }
        param1.writeVarShort(this.subAreaId);
    };
    FriendSpouseOnlineInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_FriendSpouseOnlineInformations(param1);
    };
    FriendSpouseOnlineInformations.prototype.deserializeAs_FriendSpouseOnlineInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        var _loc2_ = param1.readByte();
        this.inFight = BooleanByteWrapper.getFlag(_loc2_, 0);
        this.followSpouse = BooleanByteWrapper.getFlag(_loc2_, 1);
        this.mapId = param1.readInt();
        if (this.mapId < 0) {
            throw new Error('Forbidden value (' + this.mapId + ') on element of FriendSpouseOnlineInformations.mapId.');
        }
        this.subAreaId = param1.readVarUhShort();
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element of FriendSpouseOnlineInformations.subAreaId.');
        }
    };
    FriendSpouseOnlineInformations.ID = 93;
    return FriendSpouseOnlineInformations;
})(FriendSpouseInformations);
module.exports = FriendSpouseOnlineInformations;
