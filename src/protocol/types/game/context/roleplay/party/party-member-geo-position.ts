/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class PartyMemberGeoPosition implements INetworkType {
    public static ID: number = 378;

    memberId: number;
    worldX: number;
    worldY: number;
    mapId: number;
    subAreaId: number;

    constructor() {
        this.memberId = 0;
        this.worldX = 0;
        this.worldY = 0;
        this.mapId = 0;
        this.subAreaId = 0;
    }

    public getTypeId(): number {
        return PartyMemberGeoPosition.ID;
    }

    public reset(): void {
        this.memberId = 0;
        this.worldX = 0;
        this.worldY = 0;
        this.mapId = 0;
        this.subAreaId = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_PartyMemberGeoPosition(param1);
    }

    public serializeAs_PartyMemberGeoPosition(param1: ICustomDataOutput): void {
        if (this.memberId < 0) {
            throw new Error('Forbidden value (' + this.memberId + ') on element memberId.');
        }
        param1.writeInt(this.memberId);
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
        this.deserializeAs_PartyMemberGeoPosition(param1);
    }

    public deserializeAs_PartyMemberGeoPosition(param1: ICustomDataInput): void {
        this.memberId = param1.readInt();
        if (this.memberId < 0) {
            throw new Error('Forbidden value (' + this.memberId + ') on element of PartyMemberGeoPosition.memberId.');
        }
        this.worldX = param1.readShort();
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element of PartyMemberGeoPosition.worldX.');
        }
        this.worldY = param1.readShort();
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element of PartyMemberGeoPosition.worldY.');
        }
        this.mapId = param1.readInt();
        this.subAreaId = param1.readVarUhShort();
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element of PartyMemberGeoPosition.subAreaId.');
        }

    }
}

export = PartyMemberGeoPosition;
