/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class DisplayNumericalValuePaddockMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6563;

    rideId: number;
    value: number;
    type: number;

    constructor() {
        this.rideId = 0;
        this.value = 0;
        this.type = 0;
        super();
    }

    public getMessageId(): number {
        return DisplayNumericalValuePaddockMessage.ID;
    }

    public reset(): void {
        this.rideId = 0;
        this.value = 0;
        this.type = 0;
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
        this.serializeAs_DisplayNumericalValuePaddockMessage(param1);
    }

    public serializeAs_DisplayNumericalValuePaddockMessage(param1: ICustomDataOutput): void {
        param1.writeInt(this.rideId);
        param1.writeInt(this.value);
        param1.writeByte(this.type);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_DisplayNumericalValuePaddockMessage(param1);
    }

    public deserializeAs_DisplayNumericalValuePaddockMessage(param1: ICustomDataInput): void {
        this.rideId = param1.readInt();
        this.value = param1.readInt();
        this.type = param1.readByte();
        if (this.type < 0) {
            throw new Error('Forbidden value (' + this.type + ') on element of DisplayNumericalValuePaddockMessage.type.');
        }

    }
}

export = DisplayNumericalValuePaddockMessage;
