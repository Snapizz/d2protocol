/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import HumanOption = require('./human-option');
import GameRolePlayNamedActorInformations = require('./game-role-play-named-actor-informations');
import EntityLook = require('../../look/entity-look');
import EntityDispositionInformations = require('./../entity-disposition-informations');
import ProtocolTypeManager = require('../../../../protocol-type-manager');

class GameRolePlayMerchantInformations extends GameRolePlayNamedActorInformations implements INetworkType {
    public static ID: number = 129;

    sellType: number;
    options: HumanOption[];

    constructor() {
        this.sellType = 0;
        this.options = [];
        super();
    }

    public getTypeId(): number {
        return GameRolePlayMerchantInformations.ID;
    }

    public reset(): void {
        this.sellType = 0;
        this.options = [];
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GameRolePlayMerchantInformations(param1);
    }

    public serializeAs_GameRolePlayMerchantInformations(param1: ICustomDataOutput): void {
        super.serializeAs_GameRolePlayNamedActorInformations(param1);
        if (this.sellType < 0) {
            throw new Error('Forbidden value (' + this.sellType + ') on element sellType.');
        }
        param1.writeByte(this.sellType);
        param1.writeShort(this.options.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.options.length) {
            param1.writeShort((this.options[_loc2_]).getTypeId());
            (this.options[_loc2_]).serialize(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameRolePlayMerchantInformations(param1);
    }

    public deserializeAs_GameRolePlayMerchantInformations(param1: ICustomDataInput): void {
        var _loc4_: number = 0;
        var _loc5_: HumanOption = null;
        super.deserialize(param1);
        this.sellType = param1.readByte();
        if (this.sellType < 0) {
            throw new Error('Forbidden value (' + this.sellType + ') on element of GameRolePlayMerchantInformations.sellType.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = param1.readUnsignedShort();
            _loc5_ = <HumanOption>ProtocolTypeManager.getInstance(HumanOption, _loc4_);
            _loc5_.deserialize(param1);
            this.options.push(_loc5_);
            _loc3_++;
        }

    }
}

export = GameRolePlayMerchantInformations;
