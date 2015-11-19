/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class PlayerStatus implements INetworkType {
    public static ID: number = 415;

    statusId: number;

    constructor() {
        this.statusId = 1;
    }

    public getTypeId(): number {
        return PlayerStatus.ID;
    }

    public reset(): void {
        this.statusId = 1;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_PlayerStatus(param1);
    }

    public serializeAs_PlayerStatus(param1: ICustomDataOutput): void {
        param1.writeByte(this.statusId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PlayerStatus(param1);
    }

    public deserializeAs_PlayerStatus(param1: ICustomDataInput): void {
        this.statusId = param1.readByte();
        if (this.statusId < 0) {
            throw new Error('Forbidden value (' + this.statusId + ') on element of PlayerStatus.statusId.');
        }

    }
}

export = PlayerStatus;
