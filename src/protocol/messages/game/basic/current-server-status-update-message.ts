/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class CurrentServerStatusUpdateMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6525;

    status: number;

    constructor() {
        this.status = 1;
        super();
    }

    public getMessageId(): number {
        return CurrentServerStatusUpdateMessage.ID;
    }

    public reset(): void {
        this.status = 1;
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
        this.serializeAs_CurrentServerStatusUpdateMessage(param1);
    }

    public serializeAs_CurrentServerStatusUpdateMessage(param1: ICustomDataOutput): void {
        param1.writeByte(this.status);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_CurrentServerStatusUpdateMessage(param1);
    }

    public deserializeAs_CurrentServerStatusUpdateMessage(param1: ICustomDataInput): void {
        this.status = param1.readByte();
        if (this.status < 0) {
            throw new Error('Forbidden value (' + this.status + ') on element of CurrentServerStatusUpdateMessage.status.');
        }

    }
}

export = CurrentServerStatusUpdateMessage;
