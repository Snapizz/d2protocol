/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AccountHouseInformations = require('../../../../../types/game/house/account-house-informations');
var AccountHouseMessage = (function (_super) {
    __extends(AccountHouseMessage, _super);
    function AccountHouseMessage() {
        this.houses = [];
        _super.call(this);
    }
    AccountHouseMessage.prototype.getMessageId = function () {
        return AccountHouseMessage.ID;
    };
    AccountHouseMessage.prototype.reset = function () {
        this.houses = [];
    };
    AccountHouseMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AccountHouseMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AccountHouseMessage.prototype.serialize = function (param1) {
        this.serializeAs_AccountHouseMessage(param1);
    };
    AccountHouseMessage.prototype.serializeAs_AccountHouseMessage = function (param1) {
        param1.writeShort(this.houses.length);
        var _loc2_ = 0;
        while (_loc2_ < this.houses.length) {
            (this.houses[_loc2_]).serializeAs_AccountHouseInformations(param1);
            _loc2_++;
        }
    };
    AccountHouseMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AccountHouseMessage(param1);
    };
    AccountHouseMessage.prototype.deserializeAs_AccountHouseMessage = function (param1) {
        var _loc4_ = null;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new AccountHouseInformations();
            _loc4_.deserialize(param1);
            this.houses.push(_loc4_);
            _loc3_++;
        }
    };
    AccountHouseMessage.ID = 6315;
    return AccountHouseMessage;
})(network_message_1.NetworkMessage);
module.exports = AccountHouseMessage;
