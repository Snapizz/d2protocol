/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import ObjectEffect = require('./object-effect');
declare class ObjectEffectDice extends ObjectEffect implements INetworkType {
    static ID: number;
    diceNum: number;
    diceSide: number;
    diceConst: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ObjectEffectDice(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ObjectEffectDice(param1: ICustomDataInput): void;
}
export = ObjectEffectDice;
