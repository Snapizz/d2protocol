/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class ObjectItemInRolePlay implements INetworkType {
    public static ID: number = 198;

    cellId: number;
    objectGID: number;

    constructor() {
        this.cellId = 0;
        this.objectGID = 0;
    }

    public getTypeId(): number {
        return ObjectItemInRolePlay.ID;
    }

    public reset(): void {
        this.cellId = 0;
        this.objectGID = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_ObjectItemInRolePlay(param1);
    }

    public serializeAs_ObjectItemInRolePlay(param1: ICustomDataOutput): void {
        if (this.cellId < 0 || this.cellId > 559) {
            throw new Error('Forbidden value (' + this.cellId + ') on element cellId.');
        }
        param1.writeVarShort(this.cellId);
        if (this.objectGID < 0) {
            throw new Error('Forbidden value (' + this.objectGID + ') on element objectGID.');
        }
        param1.writeVarShort(this.objectGID);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ObjectItemInRolePlay(param1);
    }

    public deserializeAs_ObjectItemInRolePlay(param1: ICustomDataInput): void {
        this.cellId = param1.readVarUhShort();
        if (this.cellId < 0 || this.cellId > 559) {
            throw new Error('Forbidden value (' + this.cellId + ') on element of ObjectItemInRolePlay.cellId.');
        }
        this.objectGID = param1.readVarUhShort();
        if (this.objectGID < 0) {
            throw new Error('Forbidden value (' + this.objectGID + ') on element of ObjectItemInRolePlay.objectGID.');
        }

    }
}

export = ObjectItemInRolePlay;
