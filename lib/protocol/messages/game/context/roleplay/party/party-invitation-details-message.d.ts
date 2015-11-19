/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import AbstractPartyMessage = require('./abstract-party-message');
import PartyInvitationMemberInformations = require('../../../../../types/game/context/roleplay/party/party-invitation-member-informations');
import PartyGuestInformations = require('../../../../../types/game/context/roleplay/party/party-guest-informations');
declare class PartyInvitationDetailsMessage extends AbstractPartyMessage {
    static ID: number;
    partyType: number;
    partyName: string;
    fromId: number;
    fromName: string;
    leaderId: number;
    members: PartyInvitationMemberInformations[];
    guests: PartyGuestInformations[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_PartyInvitationDetailsMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_PartyInvitationDetailsMessage(param1: ICustomDataInput): void;
}
export = PartyInvitationDetailsMessage;
