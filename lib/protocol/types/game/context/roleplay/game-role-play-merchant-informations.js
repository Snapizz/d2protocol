/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var HumanOption = require('./human-option');
var GameRolePlayNamedActorInformations = require('./game-role-play-named-actor-informations');
var ProtocolTypeManager = require('../../../../protocol-type-manager');
var GameRolePlayMerchantInformations = (function (_super) {
    __extends(GameRolePlayMerchantInformations, _super);
    function GameRolePlayMerchantInformations() {
        this.sellType = 0;
        this.options = [];
        _super.call(this);
    }
    GameRolePlayMerchantInformations.prototype.getTypeId = function () {
        return GameRolePlayMerchantInformations.ID;
    };
    GameRolePlayMerchantInformations.prototype.reset = function () {
        this.sellType = 0;
        this.options = [];
    };
    GameRolePlayMerchantInformations.prototype.serialize = function (param1) {
        this.serializeAs_GameRolePlayMerchantInformations(param1);
    };
    GameRolePlayMerchantInformations.prototype.serializeAs_GameRolePlayMerchantInformations = function (param1) {
        _super.prototype.serializeAs_GameRolePlayNamedActorInformations.call(this, param1);
        if (this.sellType < 0) {
            throw new Error('Forbidden value (' + this.sellType + ') on element sellType.');
        }
        param1.writeByte(this.sellType);
        param1.writeShort(this.options.length);
        var _loc2_ = 0;
        while (_loc2_ < this.options.length) {
            param1.writeShort((this.options[_loc2_]).getTypeId());
            (this.options[_loc2_]).serialize(param1);
            _loc2_++;
        }
    };
    GameRolePlayMerchantInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_GameRolePlayMerchantInformations(param1);
    };
    GameRolePlayMerchantInformations.prototype.deserializeAs_GameRolePlayMerchantInformations = function (param1) {
        var _loc4_ = 0;
        var _loc5_ = null;
        _super.prototype.deserialize.call(this, param1);
        this.sellType = param1.readByte();
        if (this.sellType < 0) {
            throw new Error('Forbidden value (' + this.sellType + ') on element of GameRolePlayMerchantInformations.sellType.');
        }
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readUnsignedShort();
            _loc5_ = ProtocolTypeManager.getInstance(HumanOption, _loc4_);
            _loc5_.deserialize(param1);
            this.options.push(_loc5_);
            _loc3_++;
        }
    };
    GameRolePlayMerchantInformations.ID = 129;
    return GameRolePlayMerchantInformations;
})(GameRolePlayNamedActorInformations);
module.exports = GameRolePlayMerchantInformations;
