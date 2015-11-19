/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import FightTeamLightInformations = require('./fight-team-light-informations');
import FightOptionsInformations = require('./fight-options-informations');

class FightExternalInformations implements INetworkType {
    public static ID: number = 117;

    fightId: number;
    fightType: number;
    fightStart: number;
    fightSpectatorLocked: boolean;
    fightTeams: FightTeamLightInformations[];
    fightTeamsOptions: FightOptionsInformations[];

    constructor() {
        this.fightId = 0;
        this.fightType = 0;
        this.fightStart = 0;
        this.fightSpectatorLocked = false;
        this.fightTeams = [];
        this.fightTeamsOptions = [];
    }

    public getTypeId(): number {
        return FightExternalInformations.ID;
    }

    public reset(): void {
        this.fightId = 0;
        this.fightType = 0;
        this.fightStart = 0;
        this.fightSpectatorLocked = false;
        this.fightTeams = [];
        this.fightTeamsOptions = [];
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_FightExternalInformations(param1);
    }

    public serializeAs_FightExternalInformations(param1: ICustomDataOutput): void {
        param1.writeInt(this.fightId);
        param1.writeByte(this.fightType);
        if (this.fightStart < 0) {
            throw new Error('Forbidden value (' + this.fightStart + ') on element fightStart.');
        }
        param1.writeInt(this.fightStart);
        param1.writeBoolean(this.fightSpectatorLocked);
        var _loc2_: number = 0;
        while (_loc2_ < 2) {
        this.fightTeams[_loc2_].serializeAs_FightTeamLightInformations(param1);
            _loc2_++;
        }
        var _loc3_: number = 0;
        while (_loc3_ < 2) {
        this.fightTeamsOptions[_loc3_].serializeAs_FightOptionsInformations(param1);
            _loc3_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_FightExternalInformations(param1);
    }

    public deserializeAs_FightExternalInformations(param1: ICustomDataInput): void {
        this.fightId = param1.readInt();
        this.fightType = param1.readByte();
        if (this.fightType < 0) {
            throw new Error('Forbidden value (' + this.fightType + ') on element of FightExternalInformations.fightType.');
        }
        this.fightStart = param1.readInt();
        if (this.fightStart < 0) {
            throw new Error('Forbidden value (' + this.fightStart + ') on element of FightExternalInformations.fightStart.');
        }
        this.fightSpectatorLocked = param1.readBoolean();
        var _loc2_: number = 0;
        while (_loc2_ < 2) {
        this.fightTeams[_loc2_] = new FightTeamLightInformations();
            this.fightTeams[_loc2_].deserialize(param1);
            _loc2_++;
        }
        var _loc3_: number = 0;
        while (_loc3_ < 2) {
        this.fightTeamsOptions[_loc3_] = new FightOptionsInformations();
            this.fightTeamsOptions[_loc3_].deserialize(param1);
            _loc3_++;
        }

    }
}

export = FightExternalInformations;
