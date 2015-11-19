/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class ProtectedEntityWaitingForHelpInfo implements INetworkType {
    public static ID: number = 186;

    timeLeftBeforeFight: number;
    waitTimeForPlacement: number;
    nbPositionForDefensors: number;

    constructor() {
        this.timeLeftBeforeFight = 0;
        this.waitTimeForPlacement = 0;
        this.nbPositionForDefensors = 0;
    }

    public getTypeId(): number {
        return ProtectedEntityWaitingForHelpInfo.ID;
    }

    public reset(): void {
        this.timeLeftBeforeFight = 0;
        this.waitTimeForPlacement = 0;
        this.nbPositionForDefensors = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_ProtectedEntityWaitingForHelpInfo(param1);
    }

    public serializeAs_ProtectedEntityWaitingForHelpInfo(param1: ICustomDataOutput): void {
        param1.writeInt(this.timeLeftBeforeFight);
        param1.writeInt(this.waitTimeForPlacement);
        if (this.nbPositionForDefensors < 0) {
            throw new Error('Forbidden value (' + this.nbPositionForDefensors + ') on element nbPositionForDefensors.');
        }
        param1.writeByte(this.nbPositionForDefensors);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ProtectedEntityWaitingForHelpInfo(param1);
    }

    public deserializeAs_ProtectedEntityWaitingForHelpInfo(param1: ICustomDataInput): void {
        this.timeLeftBeforeFight = param1.readInt();
        this.waitTimeForPlacement = param1.readInt();
        this.nbPositionForDefensors = param1.readByte();
        if (this.nbPositionForDefensors < 0) {
            throw new Error('Forbidden value (' + this.nbPositionForDefensors + ') on element of ProtectedEntityWaitingForHelpInfo.nbPositionForDefensors.');
        }

    }
}

export = ProtectedEntityWaitingForHelpInfo;
