/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import GameFightSpellCooldown = require('./game-fight-spell-cooldown');

class GameFightResumeSlaveInfo implements INetworkType {
    public static ID: number = 364;

    slaveId: number;
    spellCooldowns: GameFightSpellCooldown[];
    summonCount: number;
    bombCount: number;

    constructor() {
        this.slaveId = 0;
        this.spellCooldowns = [];
        this.summonCount = 0;
        this.bombCount = 0;
    }

    public getTypeId(): number {
        return GameFightResumeSlaveInfo.ID;
    }

    public reset(): void {
        this.slaveId = 0;
        this.spellCooldowns = [];
        this.summonCount = 0;
        this.bombCount = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GameFightResumeSlaveInfo(param1);
    }

    public serializeAs_GameFightResumeSlaveInfo(param1: ICustomDataOutput): void {
        param1.writeInt(this.slaveId);
        param1.writeShort(this.spellCooldowns.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.spellCooldowns.length) {
            (this.spellCooldowns[_loc2_]).serializeAs_GameFightSpellCooldown(param1);
            _loc2_++;
        }
        if (this.summonCount < 0) {
            throw new Error('Forbidden value (' + this.summonCount + ') on element summonCount.');
        }
        param1.writeByte(this.summonCount);
        if (this.bombCount < 0) {
            throw new Error('Forbidden value (' + this.bombCount + ') on element bombCount.');
        }
        param1.writeByte(this.bombCount);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameFightResumeSlaveInfo(param1);
    }

    public deserializeAs_GameFightResumeSlaveInfo(param1: ICustomDataInput): void {
        var _loc4_: GameFightSpellCooldown = null;
        this.slaveId = param1.readInt();
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = new GameFightSpellCooldown();
            _loc4_.deserialize(param1);
            this.spellCooldowns.push(_loc4_);
            _loc3_++;
        }
        this.summonCount = param1.readByte();
        if (this.summonCount < 0) {
            throw new Error('Forbidden value (' + this.summonCount + ') on element of GameFightResumeSlaveInfo.summonCount.');
        }
        this.bombCount = param1.readByte();
        if (this.bombCount < 0) {
            throw new Error('Forbidden value (' + this.bombCount + ') on element of GameFightResumeSlaveInfo.bombCount.');
        }

    }
}

export = GameFightResumeSlaveInfo;
