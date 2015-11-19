/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
declare class AdditionalTaxCollectorInformations implements INetworkType {
    static ID: number;
    collectorCallerName: string;
    date: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_AdditionalTaxCollectorInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_AdditionalTaxCollectorInformations(param1: ICustomDataInput): void;
}
export = AdditionalTaxCollectorInformations;
