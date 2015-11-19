/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class PopupWarningMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6134;

    lockDuration: number;
    author: string;
    content: string;

    constructor() {
        this.lockDuration = 0;
        this.author = '';
        this.content = '';
        super();
    }

    public getMessageId(): number {
        return PopupWarningMessage.ID;
    }

    public reset(): void {
        this.lockDuration = 0;
        this.author = '';
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
        this.serializeAs_PopupWarningMessage(param1);
    }

    public serializeAs_PopupWarningMessage(param1: ICustomDataOutput): void {
        if (this.lockDuration < 0 || this.lockDuration > 255) {
            throw new Error('Forbidden value (' + this.lockDuration + ') on element lockDuration.');
        }
        param1.writeByte(this.lockDuration);
        param1.writeUTF(this.author);
        param1.writeUTF(this.content);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PopupWarningMessage(param1);
    }

    public deserializeAs_PopupWarningMessage(param1: ICustomDataInput): void {
        this.lockDuration = param1.readUnsignedByte();
        if (this.lockDuration < 0 || this.lockDuration > 255) {
            throw new Error('Forbidden value (' + this.lockDuration + ') on element of PopupWarningMessage.lockDuration.');
        }
        this.author = param1.readUTF();
        this.content = param1.readUTF();

    }
}

export = PopupWarningMessage;
