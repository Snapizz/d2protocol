/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import PartyMemberInformations = require('./party-member-informations');
declare class PartyMemberArenaInformations extends PartyMemberInformations implements INetworkType {
    static ID: number;
    rank: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_PartyMemberArenaInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_PartyMemberArenaInformations(param1: ICustomDataInput): void;
}
export = PartyMemberArenaInformations;
