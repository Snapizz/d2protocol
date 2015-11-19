/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import PresetItem = require('../../../../types/game/inventory/preset/preset-item');
declare class InventoryPresetItemUpdateMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    presetId: number;
    presetItem: PresetItem;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_InventoryPresetItemUpdateMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_InventoryPresetItemUpdateMessage(param1: ICustomDataInput): void;
}
export = InventoryPresetItemUpdateMessage;
