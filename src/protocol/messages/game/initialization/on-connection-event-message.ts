/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class OnConnectionEventMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5726;

    eventType: number;

    constructor() {
        this.eventType = 0;
        super();
    }

    public getMessageId(): number {
        return OnConnectionEventMessage.ID;
    }

    public reset(): void {
        this.eventType = 0;
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
        this.serializeAs_OnConnectionEventMessage(param1);
    }

    public serializeAs_OnConnectionEventMessage(param1: ICustomDataOutput): void {
        param1.writeByte(this.eventType);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_OnConnectionEventMessage(param1);
    }

    public deserializeAs_OnConnectionEventMessage(param1: ICustomDataInput): void {
        this.eventType = param1.readByte();
        if (this.eventType < 0) {
            throw new Error('Forbidden value (' + this.eventType + ') on element of OnConnectionEventMessage.eventType.');
        }

    }
}

export = OnConnectionEventMessage;
