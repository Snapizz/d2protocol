/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../boolean-byte-wrapper');

class QueueStatusMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6100;

    position: number;
    total: number;

    constructor() {
        this.position = 0;
        this.total = 0;
        super();
    }

    public getMessageId(): number {
        return QueueStatusMessage.ID;
    }

    public reset(): void {
        this.position = 0;
        this.total = 0;
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
        this.serializeAs_QueueStatusMessage(param1);
    }

    public serializeAs_QueueStatusMessage(param1: ICustomDataOutput): void {
        if (this.position < 0 || this.position > 65535) {
            throw new Error('Forbidden value (' + this.position + ') on element position.');
        }
        param1.writeShort(this.position);
        if (this.total < 0 || this.total > 65535) {
            throw new Error('Forbidden value (' + this.total + ') on element total.');
        }
        param1.writeShort(this.total);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_QueueStatusMessage(param1);
    }

    public deserializeAs_QueueStatusMessage(param1: ICustomDataInput): void {
        this.position = param1.readUnsignedShort();
        if (this.position < 0 || this.position > 65535) {
            throw new Error('Forbidden value (' + this.position + ') on element of QueueStatusMessage.position.');
        }
        this.total = param1.readUnsignedShort();
        if (this.total < 0 || this.total > 65535) {
            throw new Error('Forbidden value (' + this.total + ') on element of QueueStatusMessage.total.');
        }

    }
}

export = QueueStatusMessage;
