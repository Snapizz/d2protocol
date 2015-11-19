/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var UpdateLifePointsMessage = (function (_super) {
    __extends(UpdateLifePointsMessage, _super);
    function UpdateLifePointsMessage() {
        this.lifePoints = 0;
        this.maxLifePoints = 0;
        _super.call(this);
    }
    UpdateLifePointsMessage.prototype.getMessageId = function () {
        return UpdateLifePointsMessage.ID;
    };
    UpdateLifePointsMessage.prototype.reset = function () {
        this.lifePoints = 0;
        this.maxLifePoints = 0;
    };
    UpdateLifePointsMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    UpdateLifePointsMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    UpdateLifePointsMessage.prototype.serialize = function (param1) {
        this.serializeAs_UpdateLifePointsMessage(param1);
    };
    UpdateLifePointsMessage.prototype.serializeAs_UpdateLifePointsMessage = function (param1) {
        if (this.lifePoints < 0) {
            throw new Error('Forbidden value (' + this.lifePoints + ') on element lifePoints.');
        }
        param1.writeVarInt(this.lifePoints);
        if (this.maxLifePoints < 0) {
            throw new Error('Forbidden value (' + this.maxLifePoints + ') on element maxLifePoints.');
        }
        param1.writeVarInt(this.maxLifePoints);
    };
    UpdateLifePointsMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_UpdateLifePointsMessage(param1);
    };
    UpdateLifePointsMessage.prototype.deserializeAs_UpdateLifePointsMessage = function (param1) {
        this.lifePoints = param1.readVarUhInt();
        if (this.lifePoints < 0) {
            throw new Error('Forbidden value (' + this.lifePoints + ') on element of UpdateLifePointsMessage.lifePoints.');
        }
        this.maxLifePoints = param1.readVarUhInt();
        if (this.maxLifePoints < 0) {
            throw new Error('Forbidden value (' + this.maxLifePoints + ') on element of UpdateLifePointsMessage.maxLifePoints.');
        }
    };
    UpdateLifePointsMessage.ID = 5658;
    return UpdateLifePointsMessage;
})(network_message_1.NetworkMessage);
module.exports = UpdateLifePointsMessage;
