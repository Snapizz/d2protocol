/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import GroupMonsterStaticInformations = require('./group-monster-static-informations');
import GameRolePlayGroupMonsterInformations = require('./game-role-play-group-monster-informations');
import EntityLook = require('../../look/entity-look');
import EntityDispositionInformations = require('./../entity-disposition-informations');
import ProtocolTypeManager = require('../../../../protocol-type-manager');

class GameRolePlayGroupMonsterWaveInformations extends GameRolePlayGroupMonsterInformations implements INetworkType {
    public static ID: number = 464;

    nbWaves: number;
    alternatives: GroupMonsterStaticInformations[];

    constructor() {
        this.nbWaves = 0;
        this.alternatives = [];
        super();
    }

    public getTypeId(): number {
        return GameRolePlayGroupMonsterWaveInformations.ID;
    }

    public reset(): void {
        this.nbWaves = 0;
        this.alternatives = [];
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GameRolePlayGroupMonsterWaveInformations(param1);
    }

    public serializeAs_GameRolePlayGroupMonsterWaveInformations(param1: ICustomDataOutput): void {
        super.serializeAs_GameRolePlayGroupMonsterInformations(param1);
        if (this.nbWaves < 0) {
            throw new Error('Forbidden value (' + this.nbWaves + ') on element nbWaves.');
        }
        param1.writeByte(this.nbWaves);
        param1.writeShort(this.alternatives.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.alternatives.length) {
            param1.writeShort((this.alternatives[_loc2_]).getTypeId());
            (this.alternatives[_loc2_]).serialize(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameRolePlayGroupMonsterWaveInformations(param1);
    }

    public deserializeAs_GameRolePlayGroupMonsterWaveInformations(param1: ICustomDataInput): void {
        var _loc4_: number = 0;
        var _loc5_: GroupMonsterStaticInformations = null;
        super.deserialize(param1);
        this.nbWaves = param1.readByte();
        if (this.nbWaves < 0) {
            throw new Error('Forbidden value (' + this.nbWaves + ') on element of GameRolePlayGroupMonsterWaveInformations.nbWaves.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = param1.readUnsignedShort();
            _loc5_ = <GroupMonsterStaticInformations>ProtocolTypeManager.getInstance(GroupMonsterStaticInformations, _loc4_);
            _loc5_.deserialize(param1);
            this.alternatives.push(_loc5_);
            _loc3_++;
        }

    }
}

export = GameRolePlayGroupMonsterWaveInformations;
