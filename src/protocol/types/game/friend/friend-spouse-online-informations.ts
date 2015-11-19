/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import FriendSpouseInformations = require('./friend-spouse-informations');
import EntityLook = require('../look/entity-look');
import BasicGuildInformations = require('../context/roleplay/basic-guild-informations');

class FriendSpouseOnlineInformations extends FriendSpouseInformations implements INetworkType {
    public static ID: number = 93;

    mapId: number;
    subAreaId: number;
    inFight: boolean;
    followSpouse: boolean;

    constructor() {
        this.mapId = 0;
        this.subAreaId = 0;
        this.inFight = false;
        this.followSpouse = false;
        super();
    }

    public getTypeId(): number {
        return FriendSpouseOnlineInformations.ID;
    }

    public reset(): void {
        this.mapId = 0;
        this.subAreaId = 0;
        this.inFight = false;
        this.followSpouse = false;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_FriendSpouseOnlineInformations(param1);
    }

    public serializeAs_FriendSpouseOnlineInformations(param1: ICustomDataOutput): void {
        super.serializeAs_FriendSpouseInformations(param1);
        var _loc2_: number = 0;
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.inFight);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.followSpouse);
        param1.writeByte(_loc2_);
        if (this.mapId < 0) {
            throw new Error('Forbidden value (' + this.mapId + ') on element mapId.');
        }
        param1.writeInt(this.mapId);
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
        }
        param1.writeVarShort(this.subAreaId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_FriendSpouseOnlineInformations(param1);
    }

    public deserializeAs_FriendSpouseOnlineInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        var _loc2_: number = param1.readByte();
        this.inFight = BooleanByteWrapper.getFlag(_loc2_, 0);
        this.followSpouse = BooleanByteWrapper.getFlag(_loc2_, 1);
        this.mapId = param1.readInt();
        if (this.mapId < 0) {
            throw new Error('Forbidden value (' + this.mapId + ') on element of FriendSpouseOnlineInformations.mapId.');
        }
        this.subAreaId = param1.readVarUhShort();
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element of FriendSpouseOnlineInformations.subAreaId.');
        }

    }
}

export = FriendSpouseOnlineInformations;
