/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class InventoryPresetItemUpdateErrorMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6211;

    code: number;

    constructor() {
        this.code = 1;
        super();
    }

    public getMessageId(): number {
        return InventoryPresetItemUpdateErrorMessage.ID;
    }

    public reset(): void {
        this.code = 1;
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
        this.serializeAs_InventoryPresetItemUpdateErrorMessage(param1);
    }

    public serializeAs_InventoryPresetItemUpdateErrorMessage(param1: ICustomDataOutput): void {
        param1.writeByte(this.code);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_InventoryPresetItemUpdateErrorMessage(param1);
    }

    public deserializeAs_InventoryPresetItemUpdateErrorMessage(param1: ICustomDataInput): void {
        this.code = param1.readByte();
        if (this.code < 0) {
            throw new Error('Forbidden value (' + this.code + ') on element of InventoryPresetItemUpdateErrorMessage.code.');
        }

    }
}

export = InventoryPresetItemUpdateErrorMessage;
