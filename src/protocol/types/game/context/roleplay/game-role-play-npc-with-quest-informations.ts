/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import GameRolePlayNpcInformations = require('./game-role-play-npc-informations');
import GameRolePlayNpcQuestFlag = require('./quest/game-role-play-npc-quest-flag');
import EntityLook = require('../../look/entity-look');
import EntityDispositionInformations = require('./../entity-disposition-informations');

class GameRolePlayNpcWithQuestInformations extends GameRolePlayNpcInformations implements INetworkType {
    public static ID: number = 383;

    questFlag: GameRolePlayNpcQuestFlag;

    constructor() {
        this.questFlag = new GameRolePlayNpcQuestFlag();
        super();
    }

    public getTypeId(): number {
        return GameRolePlayNpcWithQuestInformations.ID;
    }

    public reset(): void {
        this.questFlag = new GameRolePlayNpcQuestFlag();
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GameRolePlayNpcWithQuestInformations(param1);
    }

    public serializeAs_GameRolePlayNpcWithQuestInformations(param1: ICustomDataOutput): void {
        super.serializeAs_GameRolePlayNpcInformations(param1);
        this.questFlag.serializeAs_GameRolePlayNpcQuestFlag(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameRolePlayNpcWithQuestInformations(param1);
    }

    public deserializeAs_GameRolePlayNpcWithQuestInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.questFlag = new GameRolePlayNpcQuestFlag();
        this.questFlag.deserialize(param1);

    }
}

export = GameRolePlayNpcWithQuestInformations;
