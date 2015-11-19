/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import Shortcut = require('./shortcut');
declare class ShortcutEmote extends Shortcut implements INetworkType {
    static ID: number;
    emoteId: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ShortcutEmote(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ShortcutEmote(param1: ICustomDataInput): void;
}
export = ShortcutEmote;
