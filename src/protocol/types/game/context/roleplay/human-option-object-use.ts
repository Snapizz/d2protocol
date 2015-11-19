/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import HumanOption = require('./human-option');

class HumanOptionObjectUse extends HumanOption implements INetworkType {
    public static ID: number = 449;

    delayTypeId: number;
    delayEndTime: number;
    objectGID: number;

    constructor() {
        this.delayTypeId = 0;
        this.delayEndTime = 0;
        this.objectGID = 0;
        super();
    }

    public getTypeId(): number {
        return HumanOptionObjectUse.ID;
    }

    public reset(): void {
        this.delayTypeId = 0;
        this.delayEndTime = 0;
        this.objectGID = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_HumanOptionObjectUse(param1);
    }

    public serializeAs_HumanOptionObjectUse(param1: ICustomDataOutput): void {
        super.serializeAs_HumanOption(param1);
        param1.writeByte(this.delayTypeId);
        if (this.delayEndTime < 0 || this.delayEndTime > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.delayEndTime + ') on element delayEndTime.');
        }
        param1.writeDouble(this.delayEndTime);
        if (this.objectGID < 0) {
            throw new Error('Forbidden value (' + this.objectGID + ') on element objectGID.');
        }
        param1.writeVarShort(this.objectGID);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_HumanOptionObjectUse(param1);
    }

    public deserializeAs_HumanOptionObjectUse(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.delayTypeId = param1.readByte();
        if (this.delayTypeId < 0) {
            throw new Error('Forbidden value (' + this.delayTypeId + ') on element of HumanOptionObjectUse.delayTypeId.');
        }
        this.delayEndTime = param1.readDouble();
        if (this.delayEndTime < 0 || this.delayEndTime > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.delayEndTime + ') on element of HumanOptionObjectUse.delayEndTime.');
        }
        this.objectGID = param1.readVarUhShort();
        if (this.objectGID < 0) {
            throw new Error('Forbidden value (' + this.objectGID + ') on element of HumanOptionObjectUse.objectGID.');
        }

    }
}

export = HumanOptionObjectUse;
