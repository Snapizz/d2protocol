/// <reference path="../../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../../../custom-data-wrapper';
import PartyCompanionBaseInformations = require('./party-companion-base-informations');
declare class PartyCompanionMemberInformations extends PartyCompanionBaseInformations implements INetworkType {
    static ID: number;
    initiative: number;
    lifePoints: number;
    maxLifePoints: number;
    prospecting: number;
    regenRate: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_PartyCompanionMemberInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_PartyCompanionMemberInformations(param1: ICustomDataInput): void;
}
export = PartyCompanionMemberInformations;
