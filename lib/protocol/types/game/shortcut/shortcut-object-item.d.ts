/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import ShortcutObject = require('./shortcut-object');
declare class ShortcutObjectItem extends ShortcutObject implements INetworkType {
    static ID: number;
    itemUID: number;
    itemGID: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ShortcutObjectItem(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ShortcutObjectItem(param1: ICustomDataInput): void;
}
export = ShortcutObjectItem;
