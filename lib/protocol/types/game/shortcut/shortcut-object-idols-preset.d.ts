/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import ShortcutObject = require('./shortcut-object');
declare class ShortcutObjectIdolsPreset extends ShortcutObject implements INetworkType {
    static ID: number;
    presetId: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ShortcutObjectIdolsPreset(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ShortcutObjectIdolsPreset(param1: ICustomDataInput): void;
}
export = ShortcutObjectIdolsPreset;
