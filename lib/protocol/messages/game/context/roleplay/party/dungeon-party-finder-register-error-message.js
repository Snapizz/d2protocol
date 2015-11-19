/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var DungeonPartyFinderRegisterErrorMessage = (function (_super) {
    __extends(DungeonPartyFinderRegisterErrorMessage, _super);
    function DungeonPartyFinderRegisterErrorMessage() {
        _super.call(this);
    }
    DungeonPartyFinderRegisterErrorMessage.prototype.getMessageId = function () {
        return DungeonPartyFinderRegisterErrorMessage.ID;
    };
    DungeonPartyFinderRegisterErrorMessage.prototype.reset = function () {
    };
    DungeonPartyFinderRegisterErrorMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    DungeonPartyFinderRegisterErrorMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    DungeonPartyFinderRegisterErrorMessage.prototype.serialize = function (param1) {
        this.serializeAs_DungeonPartyFinderRegisterErrorMessage(param1);
    };
    DungeonPartyFinderRegisterErrorMessage.prototype.serializeAs_DungeonPartyFinderRegisterErrorMessage = function (param1) {
    };
    DungeonPartyFinderRegisterErrorMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_DungeonPartyFinderRegisterErrorMessage(param1);
    };
    DungeonPartyFinderRegisterErrorMessage.prototype.deserializeAs_DungeonPartyFinderRegisterErrorMessage = function (param1) {
    };
    DungeonPartyFinderRegisterErrorMessage.ID = 6243;
    return DungeonPartyFinderRegisterErrorMessage;
})(network_message_1.NetworkMessage);
module.exports = DungeonPartyFinderRegisterErrorMessage;
