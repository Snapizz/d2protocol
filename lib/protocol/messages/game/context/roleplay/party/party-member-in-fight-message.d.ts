/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import AbstractPartyMessage = require('./abstract-party-message');
import MapCoordinatesExtended = require('../../../../../types/game/context/map-coordinates-extended');
declare class PartyMemberInFightMessage extends AbstractPartyMessage {
    static ID: number;
    reason: number;
    memberId: number;
    memberAccountId: number;
    memberName: string;
    fightId: number;
    fightMap: MapCoordinatesExtended;
    timeBeforeFightStart: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_PartyMemberInFightMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_PartyMemberInFightMessage(param1: ICustomDataInput): void;
}
export = PartyMemberInFightMessage;
