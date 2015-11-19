/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
declare class NamedPartyTeam implements INetworkType {
    static ID: number;
    teamId: number;
    partyName: string;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_NamedPartyTeam(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_NamedPartyTeam(param1: ICustomDataInput): void;
}
export = NamedPartyTeam;
