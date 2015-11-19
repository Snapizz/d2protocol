/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class SequenceNumberMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6317;

    number: number;

    constructor() {
        this.number = 0;
        super();
    }

    public getMessageId(): number {
        return SequenceNumberMessage.ID;
    }

    public reset(): void {
        this.number = 0;
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
        this.serializeAs_SequenceNumberMessage(param1);
    }

    public serializeAs_SequenceNumberMessage(param1: ICustomDataOutput): void {
        if (this.number < 0 || this.number > 65535) {
            throw new Error('Forbidden value (' + this.number + ') on element number.');
        }
        param1.writeShort(this.number);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_SequenceNumberMessage(param1);
    }

    public deserializeAs_SequenceNumberMessage(param1: ICustomDataInput): void {
        this.number = param1.readUnsignedShort();
        if (this.number < 0 || this.number > 65535) {
            throw new Error('Forbidden value (' + this.number + ') on element of SequenceNumberMessage.number.');
        }

    }
}

export = SequenceNumberMessage;
