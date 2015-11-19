/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import SkillActionDescription = require('./skill-action-description');

class SkillActionDescriptionTimed extends SkillActionDescription implements INetworkType {
    public static ID: number = 103;

    time: number;

    constructor() {
        this.time = 0;
        super();
    }

    public getTypeId(): number {
        return SkillActionDescriptionTimed.ID;
    }

    public reset(): void {
        this.time = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_SkillActionDescriptionTimed(param1);
    }

    public serializeAs_SkillActionDescriptionTimed(param1: ICustomDataOutput): void {
        super.serializeAs_SkillActionDescription(param1);
        if (this.time < 0 || this.time > 255) {
            throw new Error('Forbidden value (' + this.time + ') on element time.');
        }
        param1.writeByte(this.time);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_SkillActionDescriptionTimed(param1);
    }

    public deserializeAs_SkillActionDescriptionTimed(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.time = param1.readUnsignedByte();
        if (this.time < 0 || this.time > 255) {
            throw new Error('Forbidden value (' + this.time + ') on element of SkillActionDescriptionTimed.time.');
        }

    }
}

export = SkillActionDescriptionTimed;
