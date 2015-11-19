/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class BasicDateMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 177;

    day: number;
    month: number;
    year: number;

    constructor() {
        this.day = 0;
        this.month = 0;
        this.year = 0;
        super();
    }

    public getMessageId(): number {
        return BasicDateMessage.ID;
    }

    public reset(): void {
        this.day = 0;
        this.month = 0;
        this.year = 0;
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
        this.serializeAs_BasicDateMessage(param1);
    }

    public serializeAs_BasicDateMessage(param1: ICustomDataOutput): void {
        if (this.day < 0) {
            throw new Error('Forbidden value (' + this.day + ') on element day.');
        }
        param1.writeByte(this.day);
        if (this.month < 0) {
            throw new Error('Forbidden value (' + this.month + ') on element month.');
        }
        param1.writeByte(this.month);
        if (this.year < 0) {
            throw new Error('Forbidden value (' + this.year + ') on element year.');
        }
        param1.writeShort(this.year);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_BasicDateMessage(param1);
    }

    public deserializeAs_BasicDateMessage(param1: ICustomDataInput): void {
        this.day = param1.readByte();
        if (this.day < 0) {
            throw new Error('Forbidden value (' + this.day + ') on element of BasicDateMessage.day.');
        }
        this.month = param1.readByte();
        if (this.month < 0) {
            throw new Error('Forbidden value (' + this.month + ') on element of BasicDateMessage.month.');
        }
        this.year = param1.readShort();
        if (this.year < 0) {
            throw new Error('Forbidden value (' + this.year + ') on element of BasicDateMessage.year.');
        }

    }
}

export = BasicDateMessage;
