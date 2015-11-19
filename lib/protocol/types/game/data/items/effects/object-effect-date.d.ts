/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import ObjectEffect = require('./object-effect');
declare class ObjectEffectDate extends ObjectEffect implements INetworkType {
    static ID: number;
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ObjectEffectDate(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ObjectEffectDate(param1: ICustomDataInput): void;
}
export = ObjectEffectDate;
