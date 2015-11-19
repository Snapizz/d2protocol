/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class JobBookSubscriptionMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6593;

    addedOrDeleted: boolean;
    jobId: number;

    constructor() {
        this.addedOrDeleted = false;
        this.jobId = 0;
        super();
    }

    public getMessageId(): number {
        return JobBookSubscriptionMessage.ID;
    }

    public reset(): void {
        this.addedOrDeleted = false;
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
        this.serializeAs_JobBookSubscriptionMessage(param1);
    }

    public serializeAs_JobBookSubscriptionMessage(param1: ICustomDataOutput): void {
        param1.writeBoolean(this.addedOrDeleted);
        if (this.jobId < 0) {
            throw new Error('Forbidden value (' + this.jobId + ') on element jobId.');
        }
        param1.writeByte(this.jobId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_JobBookSubscriptionMessage(param1);
    }

    public deserializeAs_JobBookSubscriptionMessage(param1: ICustomDataInput): void {
        this.addedOrDeleted = param1.readBoolean();
        this.jobId = param1.readByte();
        if (this.jobId < 0) {
            throw new Error('Forbidden value (' + this.jobId + ') on element of JobBookSubscriptionMessage.jobId.');
        }

    }
}

export = JobBookSubscriptionMessage;
