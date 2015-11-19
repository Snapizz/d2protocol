/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import AbstractPartyMessage = require('./abstract-party-message');
import PartyMemberInformations = require('../../../../../types/game/context/roleplay/party/party-member-informations');
import PartyGuestInformations = require('../../../../../types/game/context/roleplay/party/party-guest-informations');
declare class PartyJoinMessage extends AbstractPartyMessage {
    static ID: number;
    partyType: number;
    partyLeaderId: number;
    maxParticipants: number;
    members: PartyMemberInformations[];
    guests: PartyGuestInformations[];
    restricted: boolean;
    partyName: string;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_PartyJoinMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_PartyJoinMessage(param1: ICustomDataInput): void;
}
export = PartyJoinMessage;
