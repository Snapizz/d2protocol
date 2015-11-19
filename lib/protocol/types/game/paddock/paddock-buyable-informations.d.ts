/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import PaddockInformations = require('./paddock-informations');
declare class PaddockBuyableInformations extends PaddockInformations implements INetworkType {
    static ID: number;
    price: number;
    locked: boolean;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_PaddockBuyableInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_PaddockBuyableInformations(param1: ICustomDataInput): void;
}
export = PaddockBuyableInformations;
