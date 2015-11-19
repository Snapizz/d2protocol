/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import CharacterReplayRequestMessage = require('../replay/character-replay-request-message');
import RemodelingInformation = require('../../../../types/game/character/choice/remodeling-information');
declare class CharacterReplayWithRemodelRequestMessage extends CharacterReplayRequestMessage {
    static ID: number;
    remodel: RemodelingInformation;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_CharacterReplayWithRemodelRequestMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_CharacterReplayWithRemodelRequestMessage(param1: ICustomDataInput): void;
}
export = CharacterReplayWithRemodelRequestMessage;
