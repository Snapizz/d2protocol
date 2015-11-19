/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class GameActionMarkedCell implements INetworkType {
    public static ID: number = 85;

    cellId: number;
    zoneSize: number;
    cellColor: number;
    cellsType: number;

    constructor() {
        this.cellId = 0;
        this.zoneSize = 0;
        this.cellColor = 0;
        this.cellsType = 0;
    }

    public getTypeId(): number {
        return GameActionMarkedCell.ID;
    }

    public reset(): void {
        this.cellId = 0;
        this.zoneSize = 0;
        this.cellColor = 0;
        this.cellsType = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GameActionMarkedCell(param1);
    }

    public serializeAs_GameActionMarkedCell(param1: ICustomDataOutput): void {
        if (this.cellId < 0 || this.cellId > 559) {
            throw new Error('Forbidden value (' + this.cellId + ') on element cellId.');
        }
        param1.writeVarShort(this.cellId);
        param1.writeByte(this.zoneSize);
        param1.writeInt(this.cellColor);
        param1.writeByte(this.cellsType);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameActionMarkedCell(param1);
    }

    public deserializeAs_GameActionMarkedCell(param1: ICustomDataInput): void {
        this.cellId = param1.readVarUhShort();
        if (this.cellId < 0 || this.cellId > 559) {
            throw new Error('Forbidden value (' + this.cellId + ') on element of GameActionMarkedCell.cellId.');
        }
        this.zoneSize = param1.readByte();
        this.cellColor = param1.readInt();
        this.cellsType = param1.readByte();

    }
}

export = GameActionMarkedCell;
