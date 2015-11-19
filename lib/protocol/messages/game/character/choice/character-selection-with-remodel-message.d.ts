/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import CharacterSelectionMessage = require('./character-selection-message');
import RemodelingInformation = require('../../../../types/game/character/choice/remodeling-information');
declare class CharacterSelectionWithRemodelMessage extends CharacterSelectionMessage {
    static ID: number;
    remodel: RemodelingInformation;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_CharacterSelectionWithRemodelMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_CharacterSelectionWithRemodelMessage(param1: ICustomDataInput): void;
}
export = CharacterSelectionWithRemodelMessage;
