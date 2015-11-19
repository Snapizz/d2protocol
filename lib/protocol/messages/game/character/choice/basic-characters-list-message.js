/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var CharacterBaseInformations = require('../../../../types/game/character/choice/character-base-informations');
var ProtocolTypeManager = require('../../../../protocol-type-manager');
var BasicCharactersListMessage = (function (_super) {
    __extends(BasicCharactersListMessage, _super);
    function BasicCharactersListMessage() {
        this.characters = [];
        _super.call(this);
    }
    BasicCharactersListMessage.prototype.getMessageId = function () {
        return BasicCharactersListMessage.ID;
    };
    BasicCharactersListMessage.prototype.reset = function () {
        this.characters = [];
    };
    BasicCharactersListMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    BasicCharactersListMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    BasicCharactersListMessage.prototype.serialize = function (param1) {
        this.serializeAs_BasicCharactersListMessage(param1);
    };
    BasicCharactersListMessage.prototype.serializeAs_BasicCharactersListMessage = function (param1) {
        param1.writeShort(this.characters.length);
        var _loc2_ = 0;
        while (_loc2_ < this.characters.length) {
            param1.writeShort((this.characters[_loc2_]).getTypeId());
            (this.characters[_loc2_]).serialize(param1);
            _loc2_++;
        }
    };
    BasicCharactersListMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_BasicCharactersListMessage(param1);
    };
    BasicCharactersListMessage.prototype.deserializeAs_BasicCharactersListMessage = function (param1) {
        var _loc4_ = 0;
        var _loc5_ = null;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readUnsignedShort();
            _loc5_ = ProtocolTypeManager.getInstance(CharacterBaseInformations, _loc4_);
            _loc5_.deserialize(param1);
            this.characters.push(_loc5_);
            _loc3_++;
        }
    };
    BasicCharactersListMessage.ID = 6475;
    return BasicCharactersListMessage;
})(network_message_1.NetworkMessage);
module.exports = BasicCharactersListMessage;
