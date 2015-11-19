/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var TaxCollectorBasicInformations = require('../../../../types/game/guild/tax/tax-collector-basic-informations');
var TaxCollectorMovementMessage = (function (_super) {
    __extends(TaxCollectorMovementMessage, _super);
    function TaxCollectorMovementMessage() {
        this.hireOrFire = false;
        this.basicInfos = new TaxCollectorBasicInformations();
        this.playerId = 0;
        this.playerName = '';
        _super.call(this);
    }
    TaxCollectorMovementMessage.prototype.getMessageId = function () {
        return TaxCollectorMovementMessage.ID;
    };
    TaxCollectorMovementMessage.prototype.reset = function () {
        this.hireOrFire = false;
        this.basicInfos = new TaxCollectorBasicInformations();
        this.playerId = 0;
        this.playerName = '';
    };
    TaxCollectorMovementMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    TaxCollectorMovementMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    TaxCollectorMovementMessage.prototype.serialize = function (param1) {
        this.serializeAs_TaxCollectorMovementMessage(param1);
    };
    TaxCollectorMovementMessage.prototype.serializeAs_TaxCollectorMovementMessage = function (param1) {
        param1.writeBoolean(this.hireOrFire);
        this.basicInfos.serializeAs_TaxCollectorBasicInformations(param1);
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element playerId.');
        }
        param1.writeVarInt(this.playerId);
        param1.writeUTF(this.playerName);
    };
    TaxCollectorMovementMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_TaxCollectorMovementMessage(param1);
    };
    TaxCollectorMovementMessage.prototype.deserializeAs_TaxCollectorMovementMessage = function (param1) {
        this.hireOrFire = param1.readBoolean();
        this.basicInfos = new TaxCollectorBasicInformations();
        this.basicInfos.deserialize(param1);
        this.playerId = param1.readVarUhInt();
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element of TaxCollectorMovementMessage.playerId.');
        }
        this.playerName = param1.readUTF();
    };
    TaxCollectorMovementMessage.ID = 5633;
    return TaxCollectorMovementMessage;
})(network_message_1.NetworkMessage);
module.exports = TaxCollectorMovementMessage;
