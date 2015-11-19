/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AllianceVersatileInformations = require('../../../types/game/social/alliance-versatile-informations');
var AllianceVersatileInfoListMessage = (function (_super) {
    __extends(AllianceVersatileInfoListMessage, _super);
    function AllianceVersatileInfoListMessage() {
        this.alliances = [];
        _super.call(this);
    }
    AllianceVersatileInfoListMessage.prototype.getMessageId = function () {
        return AllianceVersatileInfoListMessage.ID;
    };
    AllianceVersatileInfoListMessage.prototype.reset = function () {
        this.alliances = [];
    };
    AllianceVersatileInfoListMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AllianceVersatileInfoListMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AllianceVersatileInfoListMessage.prototype.serialize = function (param1) {
        this.serializeAs_AllianceVersatileInfoListMessage(param1);
    };
    AllianceVersatileInfoListMessage.prototype.serializeAs_AllianceVersatileInfoListMessage = function (param1) {
        param1.writeShort(this.alliances.length);
        var _loc2_ = 0;
        while (_loc2_ < this.alliances.length) {
            (this.alliances[_loc2_]).serializeAs_AllianceVersatileInformations(param1);
            _loc2_++;
        }
    };
    AllianceVersatileInfoListMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AllianceVersatileInfoListMessage(param1);
    };
    AllianceVersatileInfoListMessage.prototype.deserializeAs_AllianceVersatileInfoListMessage = function (param1) {
        var _loc4_ = null;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new AllianceVersatileInformations();
            _loc4_.deserialize(param1);
            this.alliances.push(_loc4_);
            _loc3_++;
        }
    };
    AllianceVersatileInfoListMessage.ID = 6436;
    return AllianceVersatileInfoListMessage;
})(network_message_1.NetworkMessage);
module.exports = AllianceVersatileInfoListMessage;
