/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class ObjectGroundRemovedMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 3014;

    cell: number;

    constructor() {
        this.cell = 0;
        super();
    }

    public getMessageId(): number {
        return ObjectGroundRemovedMessage.ID;
    }

    public reset(): void {
        this.cell = 0;
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
        this.serializeAs_ObjectGroundRemovedMessage(param1);
    }

    public serializeAs_ObjectGroundRemovedMessage(param1: ICustomDataOutput): void {
        if (this.cell < 0 || this.cell > 559) {
            throw new Error('Forbidden value (' + this.cell + ') on element cell.');
        }
        param1.writeVarShort(this.cell);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ObjectGroundRemovedMessage(param1);
    }

    public deserializeAs_ObjectGroundRemovedMessage(param1: ICustomDataInput): void {
        this.cell = param1.readVarUhShort();
        if (this.cell < 0 || this.cell > 559) {
            throw new Error('Forbidden value (' + this.cell + ') on element of ObjectGroundRemovedMessage.cell.');
        }

    }
}

export = ObjectGroundRemovedMessage;
