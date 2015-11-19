/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class ObjectFoundWhileRecoltingMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6017;

    genericId: number;
    quantity: number;
    resourceGenericId: number;

    constructor() {
        this.genericId = 0;
        this.quantity = 0;
        this.resourceGenericId = 0;
        super();
    }

    public getMessageId(): number {
        return ObjectFoundWhileRecoltingMessage.ID;
    }

    public reset(): void {
        this.genericId = 0;
        this.quantity = 0;
        this.resourceGenericId = 0;
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
        this.serializeAs_ObjectFoundWhileRecoltingMessage(param1);
    }

    public serializeAs_ObjectFoundWhileRecoltingMessage(param1: ICustomDataOutput): void {
        if (this.genericId < 0) {
            throw new Error('Forbidden value (' + this.genericId + ') on element genericId.');
        }
        param1.writeVarShort(this.genericId);
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element quantity.');
        }
        param1.writeVarInt(this.quantity);
        if (this.resourceGenericId < 0) {
            throw new Error('Forbidden value (' + this.resourceGenericId + ') on element resourceGenericId.');
        }
        param1.writeVarInt(this.resourceGenericId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ObjectFoundWhileRecoltingMessage(param1);
    }

    public deserializeAs_ObjectFoundWhileRecoltingMessage(param1: ICustomDataInput): void {
        this.genericId = param1.readVarUhShort();
        if (this.genericId < 0) {
            throw new Error('Forbidden value (' + this.genericId + ') on element of ObjectFoundWhileRecoltingMessage.genericId.');
        }
        this.quantity = param1.readVarUhInt();
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element of ObjectFoundWhileRecoltingMessage.quantity.');
        }
        this.resourceGenericId = param1.readVarUhInt();
        if (this.resourceGenericId < 0) {
            throw new Error('Forbidden value (' + this.resourceGenericId + ') on element of ObjectFoundWhileRecoltingMessage.resourceGenericId.');
        }

    }
}

export = ObjectFoundWhileRecoltingMessage;
