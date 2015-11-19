/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../boolean-byte-wrapper');

class DebugInClientMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6028;

    level: number;
    message: string;

    constructor() {
        this.level = 0;
        this.message = '';
        super();
    }

    public getMessageId(): number {
        return DebugInClientMessage.ID;
    }

    public reset(): void {
        this.level = 0;
        this.message = '';
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
        this.serializeAs_DebugInClientMessage(param1);
    }

    public serializeAs_DebugInClientMessage(param1: ICustomDataOutput): void {
        param1.writeByte(this.level);
        param1.writeUTF(this.message);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_DebugInClientMessage(param1);
    }

    public deserializeAs_DebugInClientMessage(param1: ICustomDataInput): void {
        this.level = param1.readByte();
        if (this.level < 0) {
            throw new Error('Forbidden value (' + this.level + ') on element of DebugInClientMessage.level.');
        }
        this.message = param1.readUTF();

    }
}

export = DebugInClientMessage;
