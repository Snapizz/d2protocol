/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import SkillActionDescriptionTimed = require('./skill-action-description-timed');

class SkillActionDescriptionCollect extends SkillActionDescriptionTimed implements INetworkType {
    public static ID: number = 99;

    min: number;
    max: number;

    constructor() {
        this.min = 0;
        this.max = 0;
        super();
    }

    public getTypeId(): number {
        return SkillActionDescriptionCollect.ID;
    }

    public reset(): void {
        this.min = 0;
        this.max = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_SkillActionDescriptionCollect(param1);
    }

    public serializeAs_SkillActionDescriptionCollect(param1: ICustomDataOutput): void {
        super.serializeAs_SkillActionDescriptionTimed(param1);
        if (this.min < 0) {
            throw new Error('Forbidden value (' + this.min + ') on element min.');
        }
        param1.writeVarShort(this.min);
        if (this.max < 0) {
            throw new Error('Forbidden value (' + this.max + ') on element max.');
        }
        param1.writeVarShort(this.max);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_SkillActionDescriptionCollect(param1);
    }

    public deserializeAs_SkillActionDescriptionCollect(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.min = param1.readVarUhShort();
        if (this.min < 0) {
            throw new Error('Forbidden value (' + this.min + ') on element of SkillActionDescriptionCollect.min.');
        }
        this.max = param1.readVarUhShort();
        if (this.max < 0) {
            throw new Error('Forbidden value (' + this.max + ') on element of SkillActionDescriptionCollect.max.');
        }

    }
}

export = SkillActionDescriptionCollect;
