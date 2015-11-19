/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import CharactersListMessage = require('./characters-list-message');
import CharacterToRemodelInformations = require('../../../../types/game/character/choice/character-to-remodel-informations');
declare class CharactersListWithRemodelingMessage extends CharactersListMessage {
    static ID: number;
    charactersToRemodel: CharacterToRemodelInformations[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_CharactersListWithRemodelingMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_CharactersListWithRemodelingMessage(param1: ICustomDataInput): void;
}
export = CharactersListWithRemodelingMessage;
