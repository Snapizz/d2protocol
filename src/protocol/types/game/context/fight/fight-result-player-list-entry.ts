/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import FightResultAdditionalData = require('./fight-result-additional-data');
import FightResultFighterListEntry = require('./fight-result-fighter-list-entry');
import ProtocolTypeManager = require('../../../../protocol-type-manager');

class FightResultPlayerListEntry extends FightResultFighterListEntry implements INetworkType {
    public static ID: number = 24;

    level: number;
    additional: FightResultAdditionalData[];

    constructor() {
        this.level = 0;
        this.additional = [];
        super();
    }

    public getTypeId(): number {
        return FightResultPlayerListEntry.ID;
    }

    public reset(): void {
        this.level = 0;
        this.additional = [];
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_FightResultPlayerListEntry(param1);
    }

    public serializeAs_FightResultPlayerListEntry(param1: ICustomDataOutput): void {
        super.serializeAs_FightResultFighterListEntry(param1);
        if (this.level < 1 || this.level > 200) {
            throw new Error('Forbidden value (' + this.level + ') on element level.');
        }
        param1.writeByte(this.level);
        param1.writeShort(this.additional.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.additional.length) {
            param1.writeShort((this.additional[_loc2_]).getTypeId());
            (this.additional[_loc2_]).serialize(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_FightResultPlayerListEntry(param1);
    }

    public deserializeAs_FightResultPlayerListEntry(param1: ICustomDataInput): void {
        var _loc4_: number = 0;
        var _loc5_: FightResultAdditionalData = null;
        super.deserialize(param1);
        this.level = param1.readUnsignedByte();
        if (this.level < 1 || this.level > 200) {
            throw new Error('Forbidden value (' + this.level + ') on element of FightResultPlayerListEntry.level.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = param1.readUnsignedShort();
            _loc5_ = <FightResultAdditionalData>ProtocolTypeManager.getInstance(FightResultAdditionalData, _loc4_);
            _loc5_.deserialize(param1);
            this.additional.push(_loc5_);
            _loc3_++;
        }

    }
}

export = FightResultPlayerListEntry;
