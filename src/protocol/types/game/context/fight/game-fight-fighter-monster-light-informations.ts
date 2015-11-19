/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import GameFightFighterLightInformations = require('./game-fight-fighter-light-informations');

class GameFightFighterMonsterLightInformations extends GameFightFighterLightInformations implements INetworkType {
    public static ID: number = 455;

    creatureGenericId: number;

    constructor() {
        this.creatureGenericId = 0;
        super();
    }

    public getTypeId(): number {
        return GameFightFighterMonsterLightInformations.ID;
    }

    public reset(): void {
        this.creatureGenericId = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GameFightFighterMonsterLightInformations(param1);
    }

    public serializeAs_GameFightFighterMonsterLightInformations(param1: ICustomDataOutput): void {
        super.serializeAs_GameFightFighterLightInformations(param1);
        if (this.creatureGenericId < 0) {
            throw new Error('Forbidden value (' + this.creatureGenericId + ') on element creatureGenericId.');
        }
        param1.writeVarShort(this.creatureGenericId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameFightFighterMonsterLightInformations(param1);
    }

    public deserializeAs_GameFightFighterMonsterLightInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.creatureGenericId = param1.readVarUhShort();
        if (this.creatureGenericId < 0) {
            throw new Error('Forbidden value (' + this.creatureGenericId + ') on element of GameFightFighterMonsterLightInformations.creatureGenericId.');
        }

    }
}

export = GameFightFighterMonsterLightInformations;
