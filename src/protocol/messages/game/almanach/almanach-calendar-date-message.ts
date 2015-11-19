/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class AlmanachCalendarDateMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6341;

    date: number;

    constructor() {
        this.date = 0;
        super();
    }

    public getMessageId(): number {
        return AlmanachCalendarDateMessage.ID;
    }

    public reset(): void {
        this.date = 0;
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
        this.serializeAs_AlmanachCalendarDateMessage(param1);
    }

    public serializeAs_AlmanachCalendarDateMessage(param1: ICustomDataOutput): void {
        param1.writeInt(this.date);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AlmanachCalendarDateMessage(param1);
    }

    public deserializeAs_AlmanachCalendarDateMessage(param1: ICustomDataInput): void {
        this.date = param1.readInt();

    }
}

export = AlmanachCalendarDateMessage;
