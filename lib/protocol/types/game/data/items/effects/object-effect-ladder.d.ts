/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import ObjectEffectCreature = require('./object-effect-creature');
declare class ObjectEffectLadder extends ObjectEffectCreature implements INetworkType {
    static ID: number;
    monsterCount: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ObjectEffectLadder(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ObjectEffectLadder(param1: ICustomDataInput): void;
}
export = ObjectEffectLadder;
