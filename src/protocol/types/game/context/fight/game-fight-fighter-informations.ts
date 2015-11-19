/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import GameFightMinimalStats = require('./game-fight-minimal-stats');
import GameContextActorInformations = require('./../game-context-actor-informations');
import EntityLook = require('../../look/entity-look');
import EntityDispositionInformations = require('./../entity-disposition-informations');
import ProtocolTypeManager = require('../../../../protocol-type-manager');

class GameFightFighterInformations extends GameContextActorInformations implements INetworkType {
    public static ID: number = 143;

    teamId: number;
    wave: number;
    alive: boolean;
    stats: GameFightMinimalStats;
    previousPositions: number[];

    constructor() {
        this.teamId = 2;
        this.wave = 0;
        this.alive = false;
        this.stats = new GameFightMinimalStats();
        this.previousPositions = [];
        super();
    }

    public getTypeId(): number {
        return GameFightFighterInformations.ID;
    }

    public reset(): void {
        this.teamId = 2;
        this.wave = 0;
        this.alive = false;
        this.stats = new GameFightMinimalStats();
        this.previousPositions = [];
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GameFightFighterInformations(param1);
    }

    public serializeAs_GameFightFighterInformations(param1: ICustomDataOutput): void {
        super.serializeAs_GameContextActorInformations(param1);
        param1.writeByte(this.teamId);
        if (this.wave < 0) {
            throw new Error('Forbidden value (' + this.wave + ') on element wave.');
        }
        param1.writeByte(this.wave);
        param1.writeBoolean(this.alive);
        param1.writeShort(this.stats.getTypeId());
        this.stats.serialize(param1);
        param1.writeShort(this.previousPositions.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.previousPositions.length) {
            if (this.previousPositions[_loc2_] < 0 || this.previousPositions[_loc2_] > 559) {
                throw new Error('Forbidden value (' + this.previousPositions[_loc2_] + ') on element 5 (starting at 1) of previousPositions.');
            }
            param1.writeVarShort(this.previousPositions[_loc2_]);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameFightFighterInformations(param1);
    }

    public deserializeAs_GameFightFighterInformations(param1: ICustomDataInput): void {
        var _loc5_: number = 0;
        super.deserialize(param1);
        this.teamId = param1.readByte();
        if (this.teamId < 0) {
            throw new Error('Forbidden value (' + this.teamId + ') on element of GameFightFighterInformations.teamId.');
        }
        this.wave = param1.readByte();
        if (this.wave < 0) {
            throw new Error('Forbidden value (' + this.wave + ') on element of GameFightFighterInformations.wave.');
        }
        this.alive = param1.readBoolean();
        var _loc2_: number = param1.readUnsignedShort();
        this.stats = <GameFightMinimalStats>ProtocolTypeManager.getInstance(GameFightMinimalStats, _loc2_);
        this.stats.deserialize(param1);
        var _loc3_: number = param1.readUnsignedShort();
        var _loc4_: number = 0;
        while (_loc4_ < _loc3_) {
        _loc5_ = param1.readVarUhShort();
            if (_loc5_ < 0 || _loc5_ > 559) {
                throw new Error('Forbidden value (' + _loc5_ + ') on elements of previousPositions.');
            }
            this.previousPositions.push(_loc5_);
            _loc4_++;
        }

    }
}

export = GameFightFighterInformations;
