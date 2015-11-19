/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ActorRestrictionsInformations = require('../../../types/game/character/restriction/actor-restrictions-informations');
var SetCharacterRestrictionsMessage = (function (_super) {
    __extends(SetCharacterRestrictionsMessage, _super);
    function SetCharacterRestrictionsMessage() {
        this.actorId = 0;
        this.restrictions = new ActorRestrictionsInformations();
        _super.call(this);
    }
    SetCharacterRestrictionsMessage.prototype.getMessageId = function () {
        return SetCharacterRestrictionsMessage.ID;
    };
    SetCharacterRestrictionsMessage.prototype.reset = function () {
        this.actorId = 0;
        this.restrictions = new ActorRestrictionsInformations();
    };
    SetCharacterRestrictionsMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    SetCharacterRestrictionsMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    SetCharacterRestrictionsMessage.prototype.serialize = function (param1) {
        this.serializeAs_SetCharacterRestrictionsMessage(param1);
    };
    SetCharacterRestrictionsMessage.prototype.serializeAs_SetCharacterRestrictionsMessage = function (param1) {
        param1.writeInt(this.actorId);
        this.restrictions.serializeAs_ActorRestrictionsInformations(param1);
    };
    SetCharacterRestrictionsMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_SetCharacterRestrictionsMessage(param1);
    };
    SetCharacterRestrictionsMessage.prototype.deserializeAs_SetCharacterRestrictionsMessage = function (param1) {
        this.actorId = param1.readInt();
        this.restrictions = new ActorRestrictionsInformations();
        this.restrictions.deserialize(param1);
    };
    SetCharacterRestrictionsMessage.ID = 170;
    return SetCharacterRestrictionsMessage;
})(network_message_1.NetworkMessage);
module.exports = SetCharacterRestrictionsMessage;
