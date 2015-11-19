/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class MountInformationRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5972;

    id: number;
    time: number;

    constructor() {
        this.id = 0;
        this.time = 0;
        super();
    }

    public getMessageId(): number {
        return MountInformationRequestMessage.ID;
    }

    public reset(): void {
        this.id = 0;
        this.time = 0;
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
        this.serializeAs_MountInformationRequestMessage(param1);
    }

    public serializeAs_MountInformationRequestMessage(param1: ICustomDataOutput): void {
        if (this.id < -9.007199254740992E15 || this.id > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.id + ') on element id.');
        }
        param1.writeDouble(this.id);
        if (this.time < -9.007199254740992E15 || this.time > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.time + ') on element time.');
        }
        param1.writeDouble(this.time);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_MountInformationRequestMessage(param1);
    }

    public deserializeAs_MountInformationRequestMessage(param1: ICustomDataInput): void {
        this.id = param1.readDouble();
        if (this.id < -9.007199254740992E15 || this.id > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.id + ') on element of MountInformationRequestMessage.id.');
        }
        this.time = param1.readDouble();
        if (this.time < -9.007199254740992E15 || this.time > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.time + ') on element of MountInformationRequestMessage.time.');
        }

    }
}

export = MountInformationRequestMessage;
