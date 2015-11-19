/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class AccountHouseInformations implements INetworkType {
    public static ID: number = 390;

    houseId: number;
    modelId: number;
    worldX: number;
    worldY: number;
    mapId: number;
    subAreaId: number;

    constructor() {
        this.houseId = 0;
        this.modelId = 0;
        this.worldX = 0;
        this.worldY = 0;
        this.mapId = 0;
        this.subAreaId = 0;
    }

    public getTypeId(): number {
        return AccountHouseInformations.ID;
    }

    public reset(): void {
        this.houseId = 0;
        this.modelId = 0;
        this.worldX = 0;
        this.worldY = 0;
        this.mapId = 0;
        this.subAreaId = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_AccountHouseInformations(param1);
    }

    public serializeAs_AccountHouseInformations(param1: ICustomDataOutput): void {
        if (this.houseId < 0) {
            throw new Error('Forbidden value (' + this.houseId + ') on element houseId.');
        }
        param1.writeVarInt(this.houseId);
        if (this.modelId < 0) {
            throw new Error('Forbidden value (' + this.modelId + ') on element modelId.');
        }
        param1.writeVarShort(this.modelId);
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element worldX.');
        }
        param1.writeShort(this.worldX);
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element worldY.');
        }
        param1.writeShort(this.worldY);
        param1.writeInt(this.mapId);
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
        }
        param1.writeVarShort(this.subAreaId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AccountHouseInformations(param1);
    }

    public deserializeAs_AccountHouseInformations(param1: ICustomDataInput): void {
        this.houseId = param1.readVarUhInt();
        if (this.houseId < 0) {
            throw new Error('Forbidden value (' + this.houseId + ') on element of AccountHouseInformations.houseId.');
        }
        this.modelId = param1.readVarUhShort();
        if (this.modelId < 0) {
            throw new Error('Forbidden value (' + this.modelId + ') on element of AccountHouseInformations.modelId.');
        }
        this.worldX = param1.readShort();
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element of AccountHouseInformations.worldX.');
        }
        this.worldY = param1.readShort();
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element of AccountHouseInformations.worldY.');
        }
        this.mapId = param1.readInt();
        this.subAreaId = param1.readVarUhShort();
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element of AccountHouseInformations.subAreaId.');
        }

    }
}

export = AccountHouseInformations;
