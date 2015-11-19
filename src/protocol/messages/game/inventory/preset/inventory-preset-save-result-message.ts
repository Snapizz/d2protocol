/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class InventoryPresetSaveResultMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6170;

    presetId: number;
    code: number;

    constructor() {
        this.presetId = 0;
        this.code = 2;
        super();
    }

    public getMessageId(): number {
        return InventoryPresetSaveResultMessage.ID;
    }

    public reset(): void {
        this.presetId = 0;
        this.code = 2;
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
        this.serializeAs_InventoryPresetSaveResultMessage(param1);
    }

    public serializeAs_InventoryPresetSaveResultMessage(param1: ICustomDataOutput): void {
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element presetId.');
        }
        param1.writeByte(this.presetId);
        param1.writeByte(this.code);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_InventoryPresetSaveResultMessage(param1);
    }

    public deserializeAs_InventoryPresetSaveResultMessage(param1: ICustomDataInput): void {
        this.presetId = param1.readByte();
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element of InventoryPresetSaveResultMessage.presetId.');
        }
        this.code = param1.readByte();
        if (this.code < 0) {
            throw new Error('Forbidden value (' + this.code + ') on element of InventoryPresetSaveResultMessage.code.');
        }

    }
}

export = InventoryPresetSaveResultMessage;
