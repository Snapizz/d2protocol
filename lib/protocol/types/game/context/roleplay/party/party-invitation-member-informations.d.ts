/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import CharacterBaseInformations = require('../../../character/choice/character-base-informations');
import PartyCompanionBaseInformations = require('./companion/party-companion-base-informations');
declare class PartyInvitationMemberInformations extends CharacterBaseInformations implements INetworkType {
    static ID: number;
    worldX: number;
    worldY: number;
    mapId: number;
    subAreaId: number;
    companions: PartyCompanionBaseInformations[];
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_PartyInvitationMemberInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_PartyInvitationMemberInformations(param1: ICustomDataInput): void;
}
export = PartyInvitationMemberInformations;
