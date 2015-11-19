/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class ObjectMovementMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 3010;

    objectUID: number;
    position: number;

    constructor() {
        this.objectUID = 0;
        this.position = 63;
        super();
    }

    public getMessageId(): number {
        return ObjectMovementMessage.ID;
    }

    public reset(): void {
        this.objectUID = 0;
        this.position = 63;
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
        this.serializeAs_ObjectMovementMessage(param1);
    }

    public serializeAs_ObjectMovementMessage(param1: ICustomDataOutput): void {
        if (this.objectUID < 0) {
            throw new Error('Forbidden value (' + this.objectUID + ') on element objectUID.');
        }
        param1.writeVarInt(this.objectUID);
        param1.writeByte(this.position);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ObjectMovementMessage(param1);
    }

    public deserializeAs_ObjectMovementMessage(param1: ICustomDataInput): void {
        this.objectUID = param1.readVarUhInt();
        if (this.objectUID < 0) {
            throw new Error('Forbidden value (' + this.objectUID + ') on element of ObjectMovementMessage.objectUID.');
        }
        this.position = param1.readUnsignedByte();
        if (this.position < 0 || this.position > 255) {
            throw new Error('Forbidden value (' + this.position + ') on element of ObjectMovementMessage.position.');
        }

    }
}

export = ObjectMovementMessage;
