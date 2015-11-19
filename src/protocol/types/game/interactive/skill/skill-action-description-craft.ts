/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import SkillActionDescription = require('./skill-action-description');

class SkillActionDescriptionCraft extends SkillActionDescription implements INetworkType {
    public static ID: number = 100;

    probability: number;

    constructor() {
        this.probability = 0;
        super();
    }

    public getTypeId(): number {
        return SkillActionDescriptionCraft.ID;
    }

    public reset(): void {
        this.probability = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_SkillActionDescriptionCraft(param1);
    }

    public serializeAs_SkillActionDescriptionCraft(param1: ICustomDataOutput): void {
        super.serializeAs_SkillActionDescription(param1);
        if (this.probability < 0) {
            throw new Error('Forbidden value (' + this.probability + ') on element probability.');
        }
        param1.writeByte(this.probability);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_SkillActionDescriptionCraft(param1);
    }

    public deserializeAs_SkillActionDescriptionCraft(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.probability = param1.readByte();
        if (this.probability < 0) {
            throw new Error('Forbidden value (' + this.probability + ') on element of SkillActionDescriptionCraft.probability.');
        }

    }
}

export = SkillActionDescriptionCraft;
