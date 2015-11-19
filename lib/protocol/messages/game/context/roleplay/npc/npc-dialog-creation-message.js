/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var NpcDialogCreationMessage = (function (_super) {
    __extends(NpcDialogCreationMessage, _super);
    function NpcDialogCreationMessage() {
        this.mapId = 0;
        this.npcId = 0;
        _super.call(this);
    }
    NpcDialogCreationMessage.prototype.getMessageId = function () {
        return NpcDialogCreationMessage.ID;
    };
    NpcDialogCreationMessage.prototype.reset = function () {
        this.mapId = 0;
        this.npcId = 0;
    };
    NpcDialogCreationMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    NpcDialogCreationMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    NpcDialogCreationMessage.prototype.serialize = function (param1) {
        this.serializeAs_NpcDialogCreationMessage(param1);
    };
    NpcDialogCreationMessage.prototype.serializeAs_NpcDialogCreationMessage = function (param1) {
        param1.writeInt(this.mapId);
        param1.writeInt(this.npcId);
    };
    NpcDialogCreationMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_NpcDialogCreationMessage(param1);
    };
    NpcDialogCreationMessage.prototype.deserializeAs_NpcDialogCreationMessage = function (param1) {
        this.mapId = param1.readInt();
        this.npcId = param1.readInt();
    };
    NpcDialogCreationMessage.ID = 5618;
    return NpcDialogCreationMessage;
})(network_message_1.NetworkMessage);
module.exports = NpcDialogCreationMessage;
