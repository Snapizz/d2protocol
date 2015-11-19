/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import JobDescription = require('../../../../../types/game/context/roleplay/job/job-description');

class JobLevelUpMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5656;

    newLevel: number;
    jobsDescription: JobDescription;

    constructor() {
        this.newLevel = 0;
        this.jobsDescription = new JobDescription();
        super();
    }

    public getMessageId(): number {
        return JobLevelUpMessage.ID;
    }

    public reset(): void {
        this.newLevel = 0;
        this.jobsDescription = new JobDescription();
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
        this.serializeAs_JobLevelUpMessage(param1);
    }

    public serializeAs_JobLevelUpMessage(param1: ICustomDataOutput): void {
        if (this.newLevel < 0 || this.newLevel > 255) {
            throw new Error('Forbidden value (' + this.newLevel + ') on element newLevel.');
        }
        param1.writeByte(this.newLevel);
        this.jobsDescription.serializeAs_JobDescription(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_JobLevelUpMessage(param1);
    }

    public deserializeAs_JobLevelUpMessage(param1: ICustomDataInput): void {
        this.newLevel = param1.readUnsignedByte();
        if (this.newLevel < 0 || this.newLevel > 255) {
            throw new Error('Forbidden value (' + this.newLevel + ') on element of JobLevelUpMessage.newLevel.');
        }
        this.jobsDescription = new JobDescription();
        this.jobsDescription.deserialize(param1);

    }
}

export = JobLevelUpMessage;
