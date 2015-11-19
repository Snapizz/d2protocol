/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AbstractPartyEventMessage = require('./abstract-party-event-message');
var PartyUpdateLightMessage = (function (_super) {
    __extends(PartyUpdateLightMessage, _super);
    function PartyUpdateLightMessage() {
        this.id = 0;
        this.lifePoints = 0;
        this.maxLifePoints = 0;
        this.prospecting = 0;
        this.regenRate = 0;
        _super.call(this);
    }
    PartyUpdateLightMessage.prototype.getMessageId = function () {
        return PartyUpdateLightMessage.ID;
    };
    PartyUpdateLightMessage.prototype.reset = function () {
        this.id = 0;
        this.lifePoints = 0;
        this.maxLifePoints = 0;
        this.prospecting = 0;
        this.regenRate = 0;
    };
    PartyUpdateLightMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PartyUpdateLightMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PartyUpdateLightMessage.prototype.serialize = function (param1) {
        this.serializeAs_PartyUpdateLightMessage(param1);
    };
    PartyUpdateLightMessage.prototype.serializeAs_PartyUpdateLightMessage = function (param1) {
        _super.prototype.serializeAs_AbstractPartyEventMessage.call(this, param1);
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element id.');
        }
        param1.writeVarInt(this.id);
        if (this.lifePoints < 0) {
            throw new Error('Forbidden value (' + this.lifePoints + ') on element lifePoints.');
        }
        param1.writeVarInt(this.lifePoints);
        if (this.maxLifePoints < 0) {
            throw new Error('Forbidden value (' + this.maxLifePoints + ') on element maxLifePoints.');
        }
        param1.writeVarInt(this.maxLifePoints);
        if (this.prospecting < 0) {
            throw new Error('Forbidden value (' + this.prospecting + ') on element prospecting.');
        }
        param1.writeVarShort(this.prospecting);
        if (this.regenRate < 0 || this.regenRate > 255) {
            throw new Error('Forbidden value (' + this.regenRate + ') on element regenRate.');
        }
        param1.writeByte(this.regenRate);
    };
    PartyUpdateLightMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PartyUpdateLightMessage(param1);
    };
    PartyUpdateLightMessage.prototype.deserializeAs_PartyUpdateLightMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.id = param1.readVarUhInt();
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element of PartyUpdateLightMessage.id.');
        }
        this.lifePoints = param1.readVarUhInt();
        if (this.lifePoints < 0) {
            throw new Error('Forbidden value (' + this.lifePoints + ') on element of PartyUpdateLightMessage.lifePoints.');
        }
        this.maxLifePoints = param1.readVarUhInt();
        if (this.maxLifePoints < 0) {
            throw new Error('Forbidden value (' + this.maxLifePoints + ') on element of PartyUpdateLightMessage.maxLifePoints.');
        }
        this.prospecting = param1.readVarUhShort();
        if (this.prospecting < 0) {
            throw new Error('Forbidden value (' + this.prospecting + ') on element of PartyUpdateLightMessage.prospecting.');
        }
        this.regenRate = param1.readUnsignedByte();
        if (this.regenRate < 0 || this.regenRate > 255) {
            throw new Error('Forbidden value (' + this.regenRate + ') on element of PartyUpdateLightMessage.regenRate.');
        }
    };
    PartyUpdateLightMessage.ID = 6054;
    return PartyUpdateLightMessage;
})(AbstractPartyEventMessage);
module.exports = PartyUpdateLightMessage;
