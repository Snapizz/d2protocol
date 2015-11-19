/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class JobBookSubscribeRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6592;

    jobId: number;

    constructor() {
        this.jobId = 0;
        super();
    }

    public getMessageId(): number {
        return JobBookSubscribeRequestMessage.ID;
    }

    public reset(): void {
        this.jobId = 0;
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
        this.serializeAs_JobBookSubscribeRequestMessage(param1);
    }

    public serializeAs_JobBookSubscribeRequestMessage(param1: ICustomDataOutput): void {
        if (this.jobId < 0) {
            throw new Error('Forbidden value (' + this.jobId + ') on element jobId.');
        }
        param1.writeByte(this.jobId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_JobBookSubscribeRequestMessage(param1);
    }

    public deserializeAs_JobBookSubscribeRequestMessage(param1: ICustomDataInput): void {
        this.jobId = param1.readByte();
        if (this.jobId < 0) {
            throw new Error('Forbidden value (' + this.jobId + ') on element of JobBookSubscribeRequestMessage.jobId.');
        }

    }
}

export = JobBookSubscribeRequestMessage;
