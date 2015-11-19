/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../boolean-byte-wrapper');

class CheckFileMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6156;

    filenameHash: string;
    type: number;
    value: string;

    constructor() {
        this.filenameHash = '';
        this.type = 0;
        this.value = '';
        super();
    }

    public getMessageId(): number {
        return CheckFileMessage.ID;
    }

    public reset(): void {
        this.filenameHash = '';
        this.type = 0;
        this.value = '';
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
        this.serializeAs_CheckFileMessage(param1);
    }

    public serializeAs_CheckFileMessage(param1: ICustomDataOutput): void {
        param1.writeUTF(this.filenameHash);
        param1.writeByte(this.type);
        param1.writeUTF(this.value);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_CheckFileMessage(param1);
    }

    public deserializeAs_CheckFileMessage(param1: ICustomDataInput): void {
        this.filenameHash = param1.readUTF();
        this.type = param1.readByte();
        if (this.type < 0) {
            throw new Error('Forbidden value (' + this.type + ') on element of CheckFileMessage.type.');
        }
        this.value = param1.readUTF();

    }
}

export = CheckFileMessage;
