/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import MountInformationsForPaddock = require('./mount-informations-for-paddock');
import PaddockInformations = require('./paddock-informations');

class PaddockContentInformations extends PaddockInformations implements INetworkType {
    public static ID: number = 183;

    paddockId: number;
    worldX: number;
    worldY: number;
    mapId: number;
    subAreaId: number;
    abandonned: boolean;
    mountsInformations: MountInformationsForPaddock[];

    constructor() {
        this.paddockId = 0;
        this.worldX = 0;
        this.worldY = 0;
        this.mapId = 0;
        this.subAreaId = 0;
        this.abandonned = false;
        this.mountsInformations = [];
        super();
    }

    public getTypeId(): number {
        return PaddockContentInformations.ID;
    }

    public reset(): void {
        this.paddockId = 0;
        this.worldX = 0;
        this.worldY = 0;
        this.mapId = 0;
        this.subAreaId = 0;
        this.abandonned = false;
        this.mountsInformations = [];
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_PaddockContentInformations(param1);
    }

    public serializeAs_PaddockContentInformations(param1: ICustomDataOutput): void {
        super.serializeAs_PaddockInformations(param1);
        param1.writeInt(this.paddockId);
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
        param1.writeBoolean(this.abandonned);
        param1.writeShort(this.mountsInformations.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.mountsInformations.length) {
            (this.mountsInformations[_loc2_]).serializeAs_MountInformationsForPaddock(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PaddockContentInformations(param1);
    }

    public deserializeAs_PaddockContentInformations(param1: ICustomDataInput): void {
        var _loc4_: MountInformationsForPaddock = null;
        super.deserialize(param1);
        this.paddockId = param1.readInt();
        this.worldX = param1.readShort();
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element of PaddockContentInformations.worldX.');
        }
        this.worldY = param1.readShort();
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element of PaddockContentInformations.worldY.');
        }
        this.mapId = param1.readInt();
        this.subAreaId = param1.readVarUhShort();
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element of PaddockContentInformations.subAreaId.');
        }
        this.abandonned = param1.readBoolean();
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = new MountInformationsForPaddock();
            _loc4_.deserialize(param1);
            this.mountsInformations.push(_loc4_);
            _loc3_++;
        }

    }
}

export = PaddockContentInformations;
