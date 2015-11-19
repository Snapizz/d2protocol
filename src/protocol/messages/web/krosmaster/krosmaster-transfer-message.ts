/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class KrosmasterTransferMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6348;

    uid: string;
    failure: number;

    constructor() {
        this.uid = '';
        this.failure = 0;
        super();
    }

    public getMessageId(): number {
        return KrosmasterTransferMessage.ID;
    }

    public reset(): void {
        this.uid = '';
        this.failure = 0;
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
        this.serializeAs_KrosmasterTransferMessage(param1);
    }

    public serializeAs_KrosmasterTransferMessage(param1: ICustomDataOutput): void {
        param1.writeUTF(this.uid);
        param1.writeByte(this.failure);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_KrosmasterTransferMessage(param1);
    }

    public deserializeAs_KrosmasterTransferMessage(param1: ICustomDataInput): void {
        this.uid = param1.readUTF();
        this.failure = param1.readByte();
        if (this.failure < 0) {
            throw new Error('Forbidden value (' + this.failure + ') on element of KrosmasterTransferMessage.failure.');
        }

    }
}

export = KrosmasterTransferMessage;
