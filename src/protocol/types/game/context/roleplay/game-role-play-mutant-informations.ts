/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import GameRolePlayHumanoidInformations = require('./game-role-play-humanoid-informations');
import EntityLook = require('../../look/entity-look');
import EntityDispositionInformations = require('./../entity-disposition-informations');

class GameRolePlayMutantInformations extends GameRolePlayHumanoidInformations implements INetworkType {
    public static ID: number = 3;

    monsterId: number;
    powerLevel: number;

    constructor() {
        this.monsterId = 0;
        this.powerLevel = 0;
        super();
    }

    public getTypeId(): number {
        return GameRolePlayMutantInformations.ID;
    }

    public reset(): void {
        this.monsterId = 0;
        this.powerLevel = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GameRolePlayMutantInformations(param1);
    }

    public serializeAs_GameRolePlayMutantInformations(param1: ICustomDataOutput): void {
        super.serializeAs_GameRolePlayHumanoidInformations(param1);
        if (this.monsterId < 0) {
            throw new Error('Forbidden value (' + this.monsterId + ') on element monsterId.');
        }
        param1.writeVarShort(this.monsterId);
        param1.writeByte(this.powerLevel);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameRolePlayMutantInformations(param1);
    }

    public deserializeAs_GameRolePlayMutantInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.monsterId = param1.readVarUhShort();
        if (this.monsterId < 0) {
            throw new Error('Forbidden value (' + this.monsterId + ') on element of GameRolePlayMutantInformations.monsterId.');
        }
        this.powerLevel = param1.readByte();

    }
}

export = GameRolePlayMutantInformations;
