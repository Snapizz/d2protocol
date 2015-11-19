/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class StorageObjectRemoveMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5648;

    objectUID: number;

    constructor() {
        this.objectUID = 0;
        super();
    }

    public getMessageId(): number {
        return StorageObjectRemoveMessage.ID;
    }

    public reset(): void {
        this.objectUID = 0;
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
        this.serializeAs_StorageObjectRemoveMessage(param1);
    }

    public serializeAs_StorageObjectRemoveMessage(param1: ICustomDataOutput): void {
        if (this.objectUID < 0) {
            throw new Error('Forbidden value (' + this.objectUID + ') on element objectUID.');
        }
        param1.writeVarInt(this.objectUID);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_StorageObjectRemoveMessage(param1);
    }

    public deserializeAs_StorageObjectRemoveMessage(param1: ICustomDataInput): void {
        this.objectUID = param1.readVarUhInt();
        if (this.objectUID < 0) {
            throw new Error('Forbidden value (' + this.objectUID + ') on element of StorageObjectRemoveMessage.objectUID.');
        }

    }
}

export = StorageObjectRemoveMessage;
