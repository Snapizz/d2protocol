/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import CharactersListMessage = require('./characters-list-message');
import CharacterToRecolorInformation = require('../../../../types/game/character/choice/character-to-recolor-information');
import CharacterToRelookInformation = require('../../../../types/game/character/choice/character-to-relook-information');
import CharacterBaseInformations = require('../../../../types/game/character/choice/character-base-informations');

class CharactersListWithModificationsMessage extends CharactersListMessage {
    public static ID: number = 6120;

    charactersToRecolor: CharacterToRecolorInformation[];
    charactersToRename: number[];
    unusableCharacters: number[];
    charactersToRelook: CharacterToRelookInformation[];

    constructor() {
        this.charactersToRecolor = [];
        this.charactersToRename = [];
        this.unusableCharacters = [];
        this.charactersToRelook = [];
        super();
    }

    public getMessageId(): number {
        return CharactersListWithModificationsMessage.ID;
    }

    public reset(): void {
        this.charactersToRecolor = [];
        this.charactersToRename = [];
        this.unusableCharacters = [];
        this.charactersToRelook = [];
    }

    public pack(param1: ICustomDataOutput): void {
        let loc2 = new ByteArray();
        this.serialize(new CustomDataWrapper(loc2));
        NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    }

    public unpack(param1: ICustomDataInput, param2: number): void {
        this.deserialize(param1);
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_CharactersListWithModificationsMessage(param1);
    }

    public serializeAs_CharactersListWithModificationsMessage(param1: ICustomDataOutput): void {
        super.serializeAs_CharactersListMessage(param1);
        param1.writeShort(this.charactersToRecolor.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.charactersToRecolor.length) {
            (this.charactersToRecolor[_loc2_]).serializeAs_CharacterToRecolorInformation(param1);
            _loc2_++;
        }
        param1.writeShort(this.charactersToRename.length);
        var _loc3_: number = 0;
        while (_loc3_ < this.charactersToRename.length) {
            param1.writeInt(this.charactersToRename[_loc3_]);
            _loc3_++;
        }
        param1.writeShort(this.unusableCharacters.length);
        var _loc4_: number = 0;
        while (_loc4_ < this.unusableCharacters.length) {
            param1.writeInt(this.unusableCharacters[_loc4_]);
            _loc4_++;
        }
        param1.writeShort(this.charactersToRelook.length);
        var _loc5_: number = 0;
        while (_loc5_ < this.charactersToRelook.length) {
            (this.charactersToRelook[_loc5_]).serializeAs_CharacterToRelookInformation(param1);
            _loc5_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_CharactersListWithModificationsMessage(param1);
    }

    public deserializeAs_CharactersListWithModificationsMessage(param1: ICustomDataInput): void {
        var _loc10_: CharacterToRecolorInformation = null;
        var _loc11_: any = 0;
        var _loc12_: any = 0;
        var _loc13_: CharacterToRelookInformation = null;
        super.deserialize(param1);
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc10_ = new CharacterToRecolorInformation();
            _loc10_.deserialize(param1);
            this.charactersToRecolor.push(_loc10_);
            _loc3_++;
        }
        var _loc4_: number = param1.readUnsignedShort();
        var _loc5_: number = 0;
        while (_loc5_ < _loc4_) {
        _loc11_ = param1.readInt();
            this.charactersToRename.push(_loc11_);
            _loc5_++;
        }
        var _loc6_: number = param1.readUnsignedShort();
        var _loc7_: number = 0;
        while (_loc7_ < _loc6_) {
        _loc12_ = param1.readInt();
            this.unusableCharacters.push(_loc12_);
            _loc7_++;
        }
        var _loc8_: number = param1.readUnsignedShort();
        var _loc9_: number = 0;
        while (_loc9_ < _loc8_) {
        _loc13_ = new CharacterToRelookInformation();
            _loc13_.deserialize(param1);
            this.charactersToRelook.push(_loc13_);
            _loc9_++;
        }

    }
}

export = CharactersListWithModificationsMessage;
