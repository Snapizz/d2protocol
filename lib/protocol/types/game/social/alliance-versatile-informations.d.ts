/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
declare class AllianceVersatileInformations implements INetworkType {
    static ID: number;
    allianceId: number;
    nbGuilds: number;
    nbMembers: number;
    nbSubarea: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_AllianceVersatileInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_AllianceVersatileInformations(param1: ICustomDataInput): void;
}
export = AllianceVersatileInformations;
