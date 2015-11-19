/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import SkillActionDescription = require('../../../interactive/skill/skill-action-description');
import ProtocolTypeManager = require('../../../../../protocol-type-manager');

class JobDescription implements INetworkType {
    public static ID: number = 101;

    jobId: number;
    skills: SkillActionDescription[];

    constructor() {
        this.jobId = 0;
        this.skills = [];
    }

    public getTypeId(): number {
        return JobDescription.ID;
    }

    public reset(): void {
        this.jobId = 0;
        this.skills = [];
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_JobDescription(param1);
    }

    public serializeAs_JobDescription(param1: ICustomDataOutput): void {
        if (this.jobId < 0) {
            throw new Error('Forbidden value (' + this.jobId + ') on element jobId.');
        }
        param1.writeByte(this.jobId);
        param1.writeShort(this.skills.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.skills.length) {
            param1.writeShort((this.skills[_loc2_]).getTypeId());
            (this.skills[_loc2_]).serialize(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_JobDescription(param1);
    }

    public deserializeAs_JobDescription(param1: ICustomDataInput): void {
        var _loc4_: number = 0;
        var _loc5_: SkillActionDescription = null;
        this.jobId = param1.readByte();
        if (this.jobId < 0) {
            throw new Error('Forbidden value (' + this.jobId + ') on element of JobDescription.jobId.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = param1.readUnsignedShort();
            _loc5_ = <SkillActionDescription>ProtocolTypeManager.getInstance(SkillActionDescription, _loc4_);
            _loc5_.deserialize(param1);
            this.skills.push(_loc5_);
            _loc3_++;
        }

    }
}

export = JobDescription;
