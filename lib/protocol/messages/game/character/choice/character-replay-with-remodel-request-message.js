/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var CharacterReplayRequestMessage = require('../replay/character-replay-request-message');
var RemodelingInformation = require('../../../../types/game/character/choice/remodeling-information');
var CharacterReplayWithRemodelRequestMessage = (function (_super) {
    __extends(CharacterReplayWithRemodelRequestMessage, _super);
    function CharacterReplayWithRemodelRequestMessage() {
        this.remodel = new RemodelingInformation();
        _super.call(this);
    }
    CharacterReplayWithRemodelRequestMessage.prototype.getMessageId = function () {
        return CharacterReplayWithRemodelRequestMessage.ID;
    };
    CharacterReplayWithRemodelRequestMessage.prototype.reset = function () {
        this.remodel = new RemodelingInformation();
    };
    CharacterReplayWithRemodelRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    CharacterReplayWithRemodelRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    CharacterReplayWithRemodelRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_CharacterReplayWithRemodelRequestMessage(param1);
    };
    CharacterReplayWithRemodelRequestMessage.prototype.serializeAs_CharacterReplayWithRemodelRequestMessage = function (param1) {
        _super.prototype.serializeAs_CharacterReplayRequestMessage.call(this, param1);
        this.remodel.serializeAs_RemodelingInformation(param1);
    };
    CharacterReplayWithRemodelRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_CharacterReplayWithRemodelRequestMessage(param1);
    };
    CharacterReplayWithRemodelRequestMessage.prototype.deserializeAs_CharacterReplayWithRemodelRequestMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.remodel = new RemodelingInformation();
        this.remodel.deserialize(param1);
    };
    CharacterReplayWithRemodelRequestMessage.ID = 6551;
    return CharacterReplayWithRemodelRequestMessage;
})(CharacterReplayRequestMessage);
module.exports = CharacterReplayWithRemodelRequestMessage;
