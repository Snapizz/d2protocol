/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class BasicTimeMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 175;

    timestamp: number;
    timezoneOffset: number;

    constructor() {
        this.timestamp = 0;
        this.timezoneOffset = 0;
        super();
    }

    public getMessageId(): number {
        return BasicTimeMessage.ID;
    }

    public reset(): void {
        this.timestamp = 0;
        this.timezoneOffset = 0;
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
        this.serializeAs_BasicTimeMessage(param1);
    }

    public serializeAs_BasicTimeMessage(param1: ICustomDataOutput): void {
        if (this.timestamp < 0 || this.timestamp > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.timestamp + ') on element timestamp.');
        }
        param1.writeDouble(this.timestamp);
        param1.writeShort(this.timezoneOffset);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_BasicTimeMessage(param1);
    }

    public deserializeAs_BasicTimeMessage(param1: ICustomDataInput): void {
        this.timestamp = param1.readDouble();
        if (this.timestamp < 0 || this.timestamp > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.timestamp + ') on element of BasicTimeMessage.timestamp.');
        }
        this.timezoneOffset = param1.readShort();

    }
}

export = BasicTimeMessage;
