/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../boolean-byte-wrapper');

class ConsoleMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 75;

    type: number;
    content: string;

    constructor() {
        this.type = 0;
        this.content = '';
        super();
    }

    public getMessageId(): number {
        return ConsoleMessage.ID;
    }

    public reset(): void {
        this.type = 0;
        this.content = '';
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
        this.serializeAs_ConsoleMessage(param1);
    }

    public serializeAs_ConsoleMessage(param1: ICustomDataOutput): void {
        param1.writeByte(this.type);
        param1.writeUTF(this.content);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ConsoleMessage(param1);
    }

    public deserializeAs_ConsoleMessage(param1: ICustomDataInput): void {
        this.type = param1.readByte();
        if (this.type < 0) {
            throw new Error('Forbidden value (' + this.type + ') on element of ConsoleMessage.type.');
        }
        this.content = param1.readUTF();

    }
}

export = ConsoleMessage;
