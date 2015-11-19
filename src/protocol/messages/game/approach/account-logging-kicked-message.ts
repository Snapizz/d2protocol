/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class AccountLoggingKickedMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6029;

    days: number;
    hours: number;
    minutes: number;

    constructor() {
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
        super();
    }

    public getMessageId(): number {
        return AccountLoggingKickedMessage.ID;
    }

    public reset(): void {
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
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
        this.serializeAs_AccountLoggingKickedMessage(param1);
    }

    public serializeAs_AccountLoggingKickedMessage(param1: ICustomDataOutput): void {
        if (this.days < 0) {
            throw new Error('Forbidden value (' + this.days + ') on element days.');
        }
        param1.writeVarShort(this.days);
        if (this.hours < 0) {
            throw new Error('Forbidden value (' + this.hours + ') on element hours.');
        }
        param1.writeByte(this.hours);
        if (this.minutes < 0) {
            throw new Error('Forbidden value (' + this.minutes + ') on element minutes.');
        }
        param1.writeByte(this.minutes);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AccountLoggingKickedMessage(param1);
    }

    public deserializeAs_AccountLoggingKickedMessage(param1: ICustomDataInput): void {
        this.days = param1.readVarUhShort();
        if (this.days < 0) {
            throw new Error('Forbidden value (' + this.days + ') on element of AccountLoggingKickedMessage.days.');
        }
        this.hours = param1.readByte();
        if (this.hours < 0) {
            throw new Error('Forbidden value (' + this.hours + ') on element of AccountLoggingKickedMessage.hours.');
        }
        this.minutes = param1.readByte();
        if (this.minutes < 0) {
            throw new Error('Forbidden value (' + this.minutes + ') on element of AccountLoggingKickedMessage.minutes.');
        }

    }
}

export = AccountLoggingKickedMessage;
