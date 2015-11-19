/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import GameRolePlayActorInformations = require('./game-role-play-actor-informations');
import EntityLook = require('../../look/entity-look');
import EntityDispositionInformations = require('./../entity-disposition-informations');

class GameRolePlayTreasureHintInformations extends GameRolePlayActorInformations implements INetworkType {
    public static ID: number = 471;

    npcId: number;

    constructor() {
        this.npcId = 0;
        super();
    }

    public getTypeId(): number {
        return GameRolePlayTreasureHintInformations.ID;
    }

    public reset(): void {
        this.npcId = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GameRolePlayTreasureHintInformations(param1);
    }

    public serializeAs_GameRolePlayTreasureHintInformations(param1: ICustomDataOutput): void {
        super.serializeAs_GameRolePlayActorInformations(param1);
        if (this.npcId < 0) {
            throw new Error('Forbidden value (' + this.npcId + ') on element npcId.');
        }
        param1.writeVarShort(this.npcId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameRolePlayTreasureHintInformations(param1);
    }

    public deserializeAs_GameRolePlayTreasureHintInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.npcId = param1.readVarUhShort();
        if (this.npcId < 0) {
            throw new Error('Forbidden value (' + this.npcId + ') on element of GameRolePlayTreasureHintInformations.npcId.');
        }

    }
}

export = GameRolePlayTreasureHintInformations;
