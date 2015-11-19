/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import CharactersListMessage = require('./characters-list-message');
import CharacterToRecolorInformation = require('../../../../types/game/character/choice/character-to-recolor-information');
import CharacterToRelookInformation = require('../../../../types/game/character/choice/character-to-relook-information');
declare class CharactersListWithModificationsMessage extends CharactersListMessage {
    static ID: number;
    charactersToRecolor: CharacterToRecolorInformation[];
    charactersToRename: number[];
    unusableCharacters: number[];
    charactersToRelook: CharacterToRelookInformation[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_CharactersListWithModificationsMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_CharactersListWithModificationsMessage(param1: ICustomDataInput): void;
}
export = CharactersListWithModificationsMessage;
