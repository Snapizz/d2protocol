/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class GameRolePlayNpcQuestFlag implements INetworkType {
    public static ID: number = 384;

    questsToValidId: number[];
    questsToStartId: number[];

    constructor() {
        this.questsToValidId = [];
        this.questsToStartId = [];
    }

    public getTypeId(): number {
        return GameRolePlayNpcQuestFlag.ID;
    }

    public reset(): void {
        this.questsToValidId = [];
        this.questsToStartId = [];
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GameRolePlayNpcQuestFlag(param1);
    }

    public serializeAs_GameRolePlayNpcQuestFlag(param1: ICustomDataOutput): void {
        param1.writeShort(this.questsToValidId.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.questsToValidId.length) {
            if (this.questsToValidId[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.questsToValidId[_loc2_] + ') on element 1 (starting at 1) of questsToValidId.');
            }
            param1.writeVarShort(this.questsToValidId[_loc2_]);
            _loc2_++;
        }
        param1.writeShort(this.questsToStartId.length);
        var _loc3_: number = 0;
        while (_loc3_ < this.questsToStartId.length) {
            if (this.questsToStartId[_loc3_] < 0) {
                throw new Error('Forbidden value (' + this.questsToStartId[_loc3_] + ') on element 2 (starting at 1) of questsToStartId.');
            }
            param1.writeVarShort(this.questsToStartId[_loc3_]);
            _loc3_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameRolePlayNpcQuestFlag(param1);
    }

    public deserializeAs_GameRolePlayNpcQuestFlag(param1: ICustomDataInput): void {
        var _loc6_: number = 0;
        var _loc7_: number = 0;
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc6_ = param1.readVarUhShort();
            if (_loc6_ < 0) {
                throw new Error('Forbidden value (' + _loc6_ + ') on elements of questsToValidId.');
            }
            this.questsToValidId.push(_loc6_);
            _loc3_++;
        }
        var _loc4_: number = param1.readUnsignedShort();
        var _loc5_: number = 0;
        while (_loc5_ < _loc4_) {
        _loc7_ = param1.readVarUhShort();
            if (_loc7_ < 0) {
                throw new Error('Forbidden value (' + _loc7_ + ') on elements of questsToStartId.');
            }
            this.questsToStartId.push(_loc7_);
            _loc5_++;
        }

    }
}

export = GameRolePlayNpcQuestFlag;
