/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class MapCoordinates implements INetworkType {
    public static ID: number = 174;

    worldX: number;
    worldY: number;

    constructor() {
        this.worldX = 0;
        this.worldY = 0;
    }

    public getTypeId(): number {
        return MapCoordinates.ID;
    }

    public reset(): void {
        this.worldX = 0;
        this.worldY = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_MapCoordinates(param1);
    }

    public serializeAs_MapCoordinates(param1: ICustomDataOutput): void {
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element worldX.');
        }
        param1.writeShort(this.worldX);
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element worldY.');
        }
        param1.writeShort(this.worldY);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_MapCoordinates(param1);
    }

    public deserializeAs_MapCoordinates(param1: ICustomDataInput): void {
        this.worldX = param1.readShort();
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element of MapCoordinates.worldX.');
        }
        this.worldY = param1.readShort();
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element of MapCoordinates.worldY.');
        }

    }
}

export = MapCoordinates;
