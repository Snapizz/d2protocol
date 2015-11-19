/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class InventoryPresetSaveMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6165;

    presetId: number;
    symbolId: number;
    saveEquipment: boolean;

    constructor() {
        this.presetId = 0;
        this.symbolId = 0;
        this.saveEquipment = false;
        super();
    }

    public getMessageId(): number {
        return InventoryPresetSaveMessage.ID;
    }

    public reset(): void {
        this.presetId = 0;
        this.symbolId = 0;
        this.saveEquipment = false;
    }

    public pack(param1: ICustomDataOutput): void {
        let loc2 = new ByteArray();
        this.serialize(new CustomDataWrapper(loc2));
        NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    }

    public unpack(param1: ICustomDataInput, param2: number): void {
        this.deserialize(param1);
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_InventoryPresetSaveMessage(param1);
    }

    public serializeAs_InventoryPresetSaveMessage(param1: ICustomDataOutput): void {
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element presetId.');
        }
        param1.writeByte(this.presetId);
        if (this.symbolId < 0) {
            throw new Error('Forbidden value (' + this.symbolId + ') on element symbolId.');
        }
        param1.writeByte(this.symbolId);
        param1.writeBoolean(this.saveEquipment);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_InventoryPresetSaveMessage(param1);
    }

    public deserializeAs_InventoryPresetSaveMessage(param1: ICustomDataInput): void {
        this.presetId = param1.readByte();
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element of InventoryPresetSaveMessage.presetId.');
        }
        this.symbolId = param1.readByte();
        if (this.symbolId < 0) {
            throw new Error('Forbidden value (' + this.symbolId + ') on element of InventoryPresetSaveMessage.symbolId.');
        }
        this.saveEquipment = param1.readBoolean();

    }
}

export = InventoryPresetSaveMessage;
