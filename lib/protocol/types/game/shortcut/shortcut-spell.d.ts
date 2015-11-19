/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import Shortcut = require('./shortcut');
declare class ShortcutSpell extends Shortcut implements INetworkType {
    static ID: number;
    spellId: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ShortcutSpell(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ShortcutSpell(param1: ICustomDataInput): void;
}
export = ShortcutSpell;
