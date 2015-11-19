/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var EntityLook = require('../../../types/game/look/entity-look');
var ContactLookMessage = (function (_super) {
    __extends(ContactLookMessage, _super);
    function ContactLookMessage() {
        this.requestId = 0;
        this.playerName = '';
        this.playerId = 0;
        this.look = new EntityLook();
        _super.call(this);
    }
    ContactLookMessage.prototype.getMessageId = function () {
        return ContactLookMessage.ID;
    };
    ContactLookMessage.prototype.reset = function () {
        this.requestId = 0;
        this.playerName = '';
        this.playerId = 0;
        this.look = new EntityLook();
    };
    ContactLookMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ContactLookMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ContactLookMessage.prototype.serialize = function (param1) {
        this.serializeAs_ContactLookMessage(param1);
    };
    ContactLookMessage.prototype.serializeAs_ContactLookMessage = function (param1) {
        if (this.requestId < 0) {
            throw new Error('Forbidden value (' + this.requestId + ') on element requestId.');
        }
        param1.writeVarInt(this.requestId);
        param1.writeUTF(this.playerName);
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element playerId.');
        }
        param1.writeVarInt(this.playerId);
        this.look.serializeAs_EntityLook(param1);
    };
    ContactLookMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ContactLookMessage(param1);
    };
    ContactLookMessage.prototype.deserializeAs_ContactLookMessage = function (param1) {
        this.requestId = param1.readVarUhInt();
        if (this.requestId < 0) {
            throw new Error('Forbidden value (' + this.requestId + ') on element of ContactLookMessage.requestId.');
        }
        this.playerName = param1.readUTF();
        this.playerId = param1.readVarUhInt();
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element of ContactLookMessage.playerId.');
        }
        this.look = new EntityLook();
        this.look.deserialize(param1);
    };
    ContactLookMessage.ID = 5934;
    return ContactLookMessage;
})(network_message_1.NetworkMessage);
module.exports = ContactLookMessage;
