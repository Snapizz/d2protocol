/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import JobExperience = require('../../../../../types/game/context/roleplay/job/job-experience');

class JobExperienceMultiUpdateMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5809;

    experiencesUpdate: JobExperience[];

    constructor() {
        this.experiencesUpdate = [];
        super();
    }

    public getMessageId(): number {
        return JobExperienceMultiUpdateMessage.ID;
    }

    public reset(): void {
        this.experiencesUpdate = [];
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
        this.serializeAs_JobExperienceMultiUpdateMessage(param1);
    }

    public serializeAs_JobExperienceMultiUpdateMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.experiencesUpdate.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.experiencesUpdate.length) {
            (this.experiencesUpdate[_loc2_]).serializeAs_JobExperience(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_JobExperienceMultiUpdateMessage(param1);
    }

    public deserializeAs_JobExperienceMultiUpdateMessage(param1: ICustomDataInput): void {
        var _loc4_: JobExperience = null;
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = new JobExperience();
            _loc4_.deserialize(param1);
            this.experiencesUpdate.push(_loc4_);
            _loc3_++;
        }

    }
}

export = JobExperienceMultiUpdateMessage;
