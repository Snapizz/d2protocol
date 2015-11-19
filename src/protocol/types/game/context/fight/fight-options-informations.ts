/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class FightOptionsInformations implements INetworkType {
    public static ID: number = 20;

    isSecret: boolean;
    isRestrictedToPartyOnly: boolean;
    isClosed: boolean;
    isAskingForHelp: boolean;

    constructor() {
        this.isSecret = false;
        this.isRestrictedToPartyOnly = false;
        this.isClosed = false;
        this.isAskingForHelp = false;
    }

    public getTypeId(): number {
        return FightOptionsInformations.ID;
    }

    public reset(): void {
        this.isSecret = false;
        this.isRestrictedToPartyOnly = false;
        this.isClosed = false;
        this.isAskingForHelp = false;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_FightOptionsInformations(param1);
    }

    public serializeAs_FightOptionsInformations(param1: ICustomDataOutput): void {
        var _loc2_: number = 0;
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.isSecret);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.isRestrictedToPartyOnly);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 2, this.isClosed);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 3, this.isAskingForHelp);
        param1.writeByte(_loc2_);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_FightOptionsInformations(param1);
    }

    public deserializeAs_FightOptionsInformations(param1: ICustomDataInput): void {
        var _loc2_: number = param1.readByte();
        this.isSecret = BooleanByteWrapper.getFlag(_loc2_, 0);
        this.isRestrictedToPartyOnly = BooleanByteWrapper.getFlag(_loc2_, 1);
        this.isClosed = BooleanByteWrapper.getFlag(_loc2_, 2);
        this.isAskingForHelp = BooleanByteWrapper.getFlag(_loc2_, 3);

    }
}

export = FightOptionsInformations;
