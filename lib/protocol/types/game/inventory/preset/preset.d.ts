/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import PresetItem = require('./preset-item');
declare class Preset implements INetworkType {
    static ID: number;
    presetId: number;
    symbolId: number;
    mount: boolean;
    objects: PresetItem[];
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_Preset(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_Preset(param1: ICustomDataInput): void;
}
export = Preset;
