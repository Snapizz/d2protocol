/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import PaddockBuyableInformations = require('./paddock-buyable-informations');
declare class PaddockAbandonnedInformations extends PaddockBuyableInformations implements INetworkType {
    static ID: number;
    guildId: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_PaddockAbandonnedInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_PaddockAbandonnedInformations(param1: ICustomDataInput): void;
}
export = PaddockAbandonnedInformations;
