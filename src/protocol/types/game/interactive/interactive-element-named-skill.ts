/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import InteractiveElementSkill = require('./interactive-element-skill');

class InteractiveElementNamedSkill extends InteractiveElementSkill implements INetworkType {
    public static ID: number = 220;

    nameId: number;

    constructor() {
        this.nameId = 0;
        super();
    }

    public getTypeId(): number {
        return InteractiveElementNamedSkill.ID;
    }

    public reset(): void {
        this.nameId = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_InteractiveElementNamedSkill(param1);
    }

    public serializeAs_InteractiveElementNamedSkill(param1: ICustomDataOutput): void {
        super.serializeAs_InteractiveElementSkill(param1);
        if (this.nameId < 0) {
            throw new Error('Forbidden value (' + this.nameId + ') on element nameId.');
        }
        param1.writeVarInt(this.nameId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_InteractiveElementNamedSkill(param1);
    }

    public deserializeAs_InteractiveElementNamedSkill(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.nameId = param1.readVarUhInt();
        if (this.nameId < 0) {
            throw new Error('Forbidden value (' + this.nameId + ') on element of InteractiveElementNamedSkill.nameId.');
        }

    }
}

export = InteractiveElementNamedSkill;
