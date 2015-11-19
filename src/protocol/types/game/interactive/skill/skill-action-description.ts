/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class SkillActionDescription implements INetworkType {
    public static ID: number = 102;

    skillId: number;

    constructor() {
        this.skillId = 0;
    }

    public getTypeId(): number {
        return SkillActionDescription.ID;
    }

    public reset(): void {
        this.skillId = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_SkillActionDescription(param1);
    }

    public serializeAs_SkillActionDescription(param1: ICustomDataOutput): void {
        if (this.skillId < 0) {
            throw new Error('Forbidden value (' + this.skillId + ') on element skillId.');
        }
        param1.writeVarShort(this.skillId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_SkillActionDescription(param1);
    }

    public deserializeAs_SkillActionDescription(param1: ICustomDataInput): void {
        this.skillId = param1.readVarUhShort();
        if (this.skillId < 0) {
            throw new Error('Forbidden value (' + this.skillId + ') on element of SkillActionDescription.skillId.');
        }

    }
}

export = SkillActionDescription;
