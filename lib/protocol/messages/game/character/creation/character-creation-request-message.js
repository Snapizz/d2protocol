/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PlayableBreedEnum = require('../../../../enums/playable-breed-enum');
var CharacterCreationRequestMessage = (function (_super) {
    __extends(CharacterCreationRequestMessage, _super);
    function CharacterCreationRequestMessage() {
        this.name = '';
        this.breed = 0;
        this.sex = false;
        this.colors = [];
        this.cosmeticId = 0;
        _super.call(this);
    }
    CharacterCreationRequestMessage.prototype.getMessageId = function () {
        return CharacterCreationRequestMessage.ID;
    };
    CharacterCreationRequestMessage.prototype.reset = function () {
        this.name = '';
        this.breed = 0;
        this.sex = false;
        this.colors = [];
        this.cosmeticId = 0;
    };
    CharacterCreationRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    CharacterCreationRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    CharacterCreationRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_CharacterCreationRequestMessage(param1);
    };
    CharacterCreationRequestMessage.prototype.serializeAs_CharacterCreationRequestMessage = function (param1) {
        param1.writeUTF(this.name);
        param1.writeByte(this.breed);
        param1.writeBoolean(this.sex);
        var _loc2_ = 0;
        while (_loc2_ < 5) {
            param1.writeInt(this.colors[_loc2_]);
            _loc2_++;
        }
        if (this.cosmeticId < 0) {
            throw new Error('Forbidden value (' + this.cosmeticId + ') on element cosmeticId.');
        }
        param1.writeVarShort(this.cosmeticId);
    };
    CharacterCreationRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_CharacterCreationRequestMessage(param1);
    };
    CharacterCreationRequestMessage.prototype.deserializeAs_CharacterCreationRequestMessage = function (param1) {
        this.name = param1.readUTF();
        this.breed = param1.readByte();
        if (this.breed < PlayableBreedEnum.Feca || this.breed > PlayableBreedEnum.Eliotrope) {
            throw new Error('Forbidden value (' + this.breed + ') on element of CharacterCreationRequestMessage.breed.');
        }
        this.sex = param1.readBoolean();
        var _loc2_ = 0;
        while (_loc2_ < 5) {
            this.colors[_loc2_] = param1.readInt();
            _loc2_++;
        }
        this.cosmeticId = param1.readVarUhShort();
        if (this.cosmeticId < 0) {
            throw new Error('Forbidden value (' + this.cosmeticId + ') on element of CharacterCreationRequestMessage.cosmeticId.');
        }
    };
    CharacterCreationRequestMessage.ID = 160;
    return CharacterCreationRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = CharacterCreationRequestMessage;
