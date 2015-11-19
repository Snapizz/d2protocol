/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import AbstractPartyEventMessage = require('./abstract-party-event-message');
import PartyMemberInformations = require('../../../../../types/game/context/roleplay/party/party-member-informations');
declare class PartyUpdateMessage extends AbstractPartyEventMessage {
    static ID: number;
    memberInformations: PartyMemberInformations;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_PartyUpdateMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_PartyUpdateMessage(param1: ICustomDataInput): void;
}
export = PartyUpdateMessage;
