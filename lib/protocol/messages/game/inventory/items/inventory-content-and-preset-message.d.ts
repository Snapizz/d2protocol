/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import InventoryContentMessage = require('./inventory-content-message');
import Preset = require('../../../../types/game/inventory/preset/preset');
import IdolsPreset = require('../../../../types/game/inventory/preset/idols-preset');
declare class InventoryContentAndPresetMessage extends InventoryContentMessage {
    static ID: number;
    presets: Preset[];
    idolsPresets: IdolsPreset[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_InventoryContentAndPresetMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_InventoryContentAndPresetMessage(param1: ICustomDataInput): void;
}
export = InventoryContentAndPresetMessage;
