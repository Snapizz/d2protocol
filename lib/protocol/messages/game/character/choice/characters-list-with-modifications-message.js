/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var CharactersListMessage = require('./characters-list-message');
var CharacterToRecolorInformation = require('../../../../types/game/character/choice/character-to-recolor-information');
var CharacterToRelookInformation = require('../../../../types/game/character/choice/character-to-relook-information');
var CharactersListWithModificationsMessage = (function (_super) {
    __extends(CharactersListWithModificationsMessage, _super);
    function CharactersListWithModificationsMessage() {
        this.charactersToRecolor = [];
        this.charactersToRename = [];
        this.unusableCharacters = [];
        this.charactersToRelook = [];
        _super.call(this);
    }
    CharactersListWithModificationsMessage.prototype.getMessageId = function () {
        return CharactersListWithModificationsMessage.ID;
    };
    CharactersListWithModificationsMessage.prototype.reset = function () {
        this.charactersToRecolor = [];
        this.charactersToRename = [];
        this.unusableCharacters = [];
        this.charactersToRelook = [];
    };
    CharactersListWithModificationsMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    CharactersListWithModificationsMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    CharactersListWithModificationsMessage.prototype.serialize = function (param1) {
        this.serializeAs_CharactersListWithModificationsMessage(param1);
    };
    CharactersListWithModificationsMessage.prototype.serializeAs_CharactersListWithModificationsMessage = function (param1) {
        _super.prototype.serializeAs_CharactersListMessage.call(this, param1);
        param1.writeShort(this.charactersToRecolor.length);
        var _loc2_ = 0;
        while (_loc2_ < this.charactersToRecolor.length) {
            (this.charactersToRecolor[_loc2_]).serializeAs_CharacterToRecolorInformation(param1);
            _loc2_++;
        }
        param1.writeShort(this.charactersToRename.length);
        var _loc3_ = 0;
        while (_loc3_ < this.charactersToRename.length) {
            param1.writeInt(this.charactersToRename[_loc3_]);
            _loc3_++;
        }
        param1.writeShort(this.unusableCharacters.length);
        var _loc4_ = 0;
        while (_loc4_ < this.unusableCharacters.length) {
            param1.writeInt(this.unusableCharacters[_loc4_]);
            _loc4_++;
        }
        param1.writeShort(this.charactersToRelook.length);
        var _loc5_ = 0;
        while (_loc5_ < this.charactersToRelook.length) {
            (this.charactersToRelook[_loc5_]).serializeAs_CharacterToRelookInformation(param1);
            _loc5_++;
        }
    };
    CharactersListWithModificationsMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_CharactersListWithModificationsMessage(param1);
    };
    CharactersListWithModificationsMessage.prototype.deserializeAs_CharactersListWithModificationsMessage = function (param1) {
        var _loc10_ = null;
        var _loc11_ = 0;
        var _loc12_ = 0;
        var _loc13_ = null;
        _super.prototype.deserialize.call(this, param1);
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc10_ = new CharacterToRecolorInformation();
            _loc10_.deserialize(param1);
            this.charactersToRecolor.push(_loc10_);
            _loc3_++;
        }
        var _loc4_ = param1.readUnsignedShort();
        var _loc5_ = 0;
        while (_loc5_ < _loc4_) {
            _loc11_ = param1.readInt();
            this.charactersToRename.push(_loc11_);
            _loc5_++;
        }
        var _loc6_ = param1.readUnsignedShort();
        var _loc7_ = 0;
        while (_loc7_ < _loc6_) {
            _loc12_ = param1.readInt();
            this.unusableCharacters.push(_loc12_);
            _loc7_++;
        }
        var _loc8_ = param1.readUnsignedShort();
        var _loc9_ = 0;
        while (_loc9_ < _loc8_) {
            _loc13_ = new CharacterToRelookInformation();
            _loc13_.deserialize(param1);
            this.charactersToRelook.push(_loc13_);
            _loc9_++;
        }
    };
    CharactersListWithModificationsMessage.ID = 6120;
    return CharactersListWithModificationsMessage;
})(CharactersListMessage);
module.exports = CharactersListWithModificationsMessage;
