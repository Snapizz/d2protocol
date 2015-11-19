/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var CharacterSelectionMessage = require('./character-selection-message');
var RemodelingInformation = require('../../../../types/game/character/choice/remodeling-information');
var CharacterSelectionWithRemodelMessage = (function (_super) {
    __extends(CharacterSelectionWithRemodelMessage, _super);
    function CharacterSelectionWithRemodelMessage() {
        this.remodel = new RemodelingInformation();
        _super.call(this);
    }
    CharacterSelectionWithRemodelMessage.prototype.getMessageId = function () {
        return CharacterSelectionWithRemodelMessage.ID;
    };
    CharacterSelectionWithRemodelMessage.prototype.reset = function () {
        this.remodel = new RemodelingInformation();
    };
    CharacterSelectionWithRemodelMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    CharacterSelectionWithRemodelMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    CharacterSelectionWithRemodelMessage.prototype.serialize = function (param1) {
        this.serializeAs_CharacterSelectionWithRemodelMessage(param1);
    };
    CharacterSelectionWithRemodelMessage.prototype.serializeAs_CharacterSelectionWithRemodelMessage = function (param1) {
        _super.prototype.serializeAs_CharacterSelectionMessage.call(this, param1);
        this.remodel.serializeAs_RemodelingInformation(param1);
    };
    CharacterSelectionWithRemodelMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_CharacterSelectionWithRemodelMessage(param1);
    };
    CharacterSelectionWithRemodelMessage.prototype.deserializeAs_CharacterSelectionWithRemodelMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.remodel = new RemodelingInformation();
        this.remodel.deserialize(param1);
    };
    CharacterSelectionWithRemodelMessage.ID = 6549;
    return CharacterSelectionWithRemodelMessage;
})(CharacterSelectionMessage);
module.exports = CharacterSelectionWithRemodelMessage;
