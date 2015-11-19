/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import CharacterBaseInformations = require('../../../character/choice/character-base-informations');
import PlayerStatus = require('../../../character/status/player-status');
import PartyCompanionMemberInformations = require('./companion/party-companion-member-informations');
declare class PartyMemberInformations extends CharacterBaseInformations implements INetworkType {
    static ID: number;
    lifePoints: number;
    maxLifePoints: number;
    prospecting: number;
    regenRate: number;
    initiative: number;
    alignmentSide: number;
    worldX: number;
    worldY: number;
    mapId: number;
    subAreaId: number;
    status: PlayerStatus;
    companions: PartyCompanionMemberInformations[];
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_PartyMemberInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_PartyMemberInformations(param1: ICustomDataInput): void;
}
export = PartyMemberInformations;
