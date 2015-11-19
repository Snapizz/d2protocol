/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import HumanOption = require('./human-option');
import ActorRestrictionsInformations = require('../../character/restriction/actor-restrictions-informations');
import ProtocolTypeManager = require('../../../../protocol-type-manager');

class HumanInformations implements INetworkType {
    public static ID: number = 157;

    restrictions: ActorRestrictionsInformations;
    sex: boolean;
    options: HumanOption[];

    constructor() {
        this.restrictions = new ActorRestrictionsInformations();
        this.sex = false;
        this.options = [];
    }

    public getTypeId(): number {
        return HumanInformations.ID;
    }

    public reset(): void {
        this.restrictions = new ActorRestrictionsInformations();
        this.sex = false;
        this.options = [];
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_HumanInformations(param1);
    }

    public serializeAs_HumanInformations(param1: ICustomDataOutput): void {
        this.restrictions.serializeAs_ActorRestrictionsInformations(param1);
        param1.writeBoolean(this.sex);
        param1.writeShort(this.options.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.options.length) {
            param1.writeShort((this.options[_loc2_]).getTypeId());
            (this.options[_loc2_]).serialize(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_HumanInformations(param1);
    }

    public deserializeAs_HumanInformations(param1: ICustomDataInput): void {
        var _loc4_: number = 0;
        var _loc5_: HumanOption = null;
        this.restrictions = new ActorRestrictionsInformations();
        this.restrictions.deserialize(param1);
        this.sex = param1.readBoolean();
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

export = HumanInformations;
