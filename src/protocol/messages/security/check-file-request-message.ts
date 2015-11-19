/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../boolean-byte-wrapper');

class CheckFileRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6154;

    filename: string;
    type: number;

    constructor() {
        this.filename = '';
        this.type = 0;
        super();
    }

    public getMessageId(): number {
        return CheckFileRequestMessage.ID;
    }

    public reset(): void {
        this.filename = '';
        this.type = 0;
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
        this.serializeAs_CheckFileRequestMessage(param1);
    }

    public serializeAs_CheckFileRequestMessage(param1: ICustomDataOutput): void {
        param1.writeUTF(this.filename);
        param1.writeByte(this.type);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_CheckFileRequestMessage(param1);
    }

    public deserializeAs_CheckFileRequestMessage(param1: ICustomDataInput): void {
        this.filename = param1.readUTF();
        this.type = param1.readByte();
        if (this.type < 0) {
            throw new Error('Forbidden value (' + this.type + ') on element of CheckFileRequestMessage.type.');
        }

    }
}

export = CheckFileRequestMessage;
