/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class InteractiveElementSkill implements INetworkType {
    public static ID: number = 219;

    skillId: number;
    skillInstanceUid: number;

    constructor() {
        this.skillId = 0;
        this.skillInstanceUid = 0;
    }

    public getTypeId(): number {
        return InteractiveElementSkill.ID;
    }

    public reset(): void {
        this.skillId = 0;
        this.skillInstanceUid = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_InteractiveElementSkill(param1);
    }

    public serializeAs_InteractiveElementSkill(param1: ICustomDataOutput): void {
        if (this.skillId < 0) {
            throw new Error('Forbidden value (' + this.skillId + ') on element skillId.');
        }
        param1.writeVarInt(this.skillId);
        if (this.skillInstanceUid < 0) {
            throw new Error('Forbidden value (' + this.skillInstanceUid + ') on element skillInstanceUid.');
        }
        param1.writeInt(this.skillInstanceUid);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_InteractiveElementSkill(param1);
    }

    public deserializeAs_InteractiveElementSkill(param1: ICustomDataInput): void {
        this.skillId = param1.readVarUhInt();
        if (this.skillId < 0) {
            throw new Error('Forbidden value (' + this.skillId + ') on element of InteractiveElementSkill.skillId.');
        }
        this.skillInstanceUid = param1.readInt();
        if (this.skillInstanceUid < 0) {
            throw new Error('Forbidden value (' + this.skillInstanceUid + ') on element of InteractiveElementSkill.skillInstanceUid.');
        }

    }
}

export = InteractiveElementSkill;
