/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import ShortcutObject = require('./shortcut-object');
declare class ShortcutObjectPreset extends ShortcutObject implements INetworkType {
    static ID: number;
    presetId: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ShortcutObjectPreset(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ShortcutObjectPreset(param1: ICustomDataInput): void;
}
export = ShortcutObjectPreset;
