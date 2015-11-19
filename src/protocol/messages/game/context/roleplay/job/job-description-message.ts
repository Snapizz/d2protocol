/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import JobDescription = require('../../../../../types/game/context/roleplay/job/job-description');

class JobDescriptionMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5655;

    jobsDescription: JobDescription[];

    constructor() {
        this.jobsDescription = [];
        super();
    }

    public getMessageId(): number {
        return JobDescriptionMessage.ID;
    }

    public reset(): void {
        this.jobsDescription = [];
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
        this.serializeAs_JobDescriptionMessage(param1);
    }

    public serializeAs_JobDescriptionMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.jobsDescription.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.jobsDescription.length) {
            (this.jobsDescription[_loc2_]).serializeAs_JobDescription(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_JobDescriptionMessage(param1);
    }

    public deserializeAs_JobDescriptionMessage(param1: ICustomDataInput): void {
        var _loc4_: JobDescription = null;
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = new JobDescription();
            _loc4_.deserialize(param1);
            this.jobsDescription.push(_loc4_);
            _loc3_++;
        }

    }
}

export = JobDescriptionMessage;
