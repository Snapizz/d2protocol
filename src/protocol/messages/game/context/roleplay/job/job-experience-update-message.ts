/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import JobExperience = require('../../../../../types/game/context/roleplay/job/job-experience');

class JobExperienceUpdateMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5654;

    experiencesUpdate: JobExperience;

    constructor() {
        this.experiencesUpdate = new JobExperience();
        super();
    }

    public getMessageId(): number {
        return JobExperienceUpdateMessage.ID;
    }

    public reset(): void {
        this.experiencesUpdate = new JobExperience();
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
        this.serializeAs_JobExperienceUpdateMessage(param1);
    }

    public serializeAs_JobExperienceUpdateMessage(param1: ICustomDataOutput): void {
        this.experiencesUpdate.serializeAs_JobExperience(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_JobExperienceUpdateMessage(param1);
    }

    public deserializeAs_JobExperienceUpdateMessage(param1: ICustomDataInput): void {
        this.experiencesUpdate = new JobExperience();
        this.experiencesUpdate.deserialize(param1);

    }
}

export = JobExperienceUpdateMessage;
