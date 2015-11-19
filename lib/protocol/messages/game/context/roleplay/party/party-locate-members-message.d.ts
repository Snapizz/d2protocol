/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import AbstractPartyMessage = require('./abstract-party-message');
import PartyMemberGeoPosition = require('../../../../../types/game/context/roleplay/party/party-member-geo-position');
declare class PartyLocateMembersMessage extends AbstractPartyMessage {
    static ID: number;
    geopositions: PartyMemberGeoPosition[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_PartyLocateMembersMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_PartyLocateMembersMessage(param1: ICustomDataInput): void;
}
export = PartyLocateMembersMessage;
