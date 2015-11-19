/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
declare class RemodelingInformation implements INetworkType {
    static ID: number;
    name: string;
    breed: number;
    sex: boolean;
    cosmeticId: number;
    colors: number[];
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_RemodelingInformation(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_RemodelingInformation(param1: ICustomDataInput): void;
}
export = RemodelingInformation;
