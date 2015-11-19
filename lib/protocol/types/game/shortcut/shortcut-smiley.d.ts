/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import Shortcut = require('./shortcut');
declare class ShortcutSmiley extends Shortcut implements INetworkType {
    static ID: number;
    smileyId: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ShortcutSmiley(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ShortcutSmiley(param1: ICustomDataInput): void;
}
export = ShortcutSmiley;
