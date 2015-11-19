/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class ObtainedItemMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6519;

    genericId: number;
    baseQuantity: number;

    constructor() {
        this.genericId = 0;
        this.baseQuantity = 0;
        super();
    }

    public getMessageId(): number {
        return ObtainedItemMessage.ID;
    }

    public reset(): void {
        this.genericId = 0;
        this.baseQuantity = 0;
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
        this.serializeAs_ObtainedItemMessage(param1);
    }

    public serializeAs_ObtainedItemMessage(param1: ICustomDataOutput): void {
        if (this.genericId < 0) {
            throw new Error('Forbidden value (' + this.genericId + ') on element genericId.');
        }
        param1.writeVarShort(this.genericId);
        if (this.baseQuantity < 0) {
            throw new Error('Forbidden value (' + this.baseQuantity + ') on element baseQuantity.');
        }
        param1.writeVarInt(this.baseQuantity);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ObtainedItemMessage(param1);
    }

    public deserializeAs_ObtainedItemMessage(param1: ICustomDataInput): void {
        this.genericId = param1.readVarUhShort();
        if (this.genericId < 0) {
            throw new Error('Forbidden value (' + this.genericId + ') on element of ObtainedItemMessage.genericId.');
        }
        this.baseQuantity = param1.readVarUhInt();
        if (this.baseQuantity < 0) {
            throw new Error('Forbidden value (' + this.baseQuantity + ') on element of ObtainedItemMessage.baseQuantity.');
        }

    }
}

export = ObtainedItemMessage;
