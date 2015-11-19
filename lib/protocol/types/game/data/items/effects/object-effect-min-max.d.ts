/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import ObjectEffect = require('./object-effect');
declare class ObjectEffectMinMax extends ObjectEffect implements INetworkType {
    static ID: number;
    min: number;
    max: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ObjectEffectMinMax(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ObjectEffectMinMax(param1: ICustomDataInput): void;
}
export = ObjectEffectMinMax;
