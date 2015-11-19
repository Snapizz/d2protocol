/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class InventoryPresetItemUpdateRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6210;

    presetId: number;
    position: number;
    objUid: number;

    constructor() {
        this.presetId = 0;
        this.position = 63;
        this.objUid = 0;
        super();
    }

    public getMessageId(): number {
        return InventoryPresetItemUpdateRequestMessage.ID;
    }

    public reset(): void {
        this.presetId = 0;
        this.position = 63;
        this.objUid = 0;
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
        this.serializeAs_InventoryPresetItemUpdateRequestMessage(param1);
    }

    public serializeAs_InventoryPresetItemUpdateRequestMessage(param1: ICustomDataOutput): void {
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element presetId.');
        }
        param1.writeByte(this.presetId);
        param1.writeByte(this.position);
        if (this.objUid < 0) {
            throw new Error('Forbidden value (' + this.objUid + ') on element objUid.');
        }
        param1.writeVarInt(this.objUid);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_InventoryPresetItemUpdateRequestMessage(param1);
    }

    public deserializeAs_InventoryPresetItemUpdateRequestMessage(param1: ICustomDataInput): void {
        this.presetId = param1.readByte();
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element of InventoryPresetItemUpdateRequestMessage.presetId.');
        }
        this.position = param1.readUnsignedByte();
        if (this.position < 0 || this.position > 255) {
            throw new Error('Forbidden value (' + this.position + ') on element of InventoryPresetItemUpdateRequestMessage.position.');
        }
        this.objUid = param1.readVarUhInt();
        if (this.objUid < 0) {
            throw new Error('Forbidden value (' + this.objUid + ') on element of InventoryPresetItemUpdateRequestMessage.objUid.');
        }

    }
}

export = InventoryPresetItemUpdateRequestMessage;
