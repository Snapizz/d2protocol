/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import GameFightAIInformations = require('./game-fight-a-i-informations');
import EntityLook = require('../../look/entity-look');
import EntityDispositionInformations = require('./../entity-disposition-informations');

class GameFightMonsterInformations extends GameFightAIInformations implements INetworkType {
    public static ID: number = 29;

    creatureGenericId: number;
    creatureGrade: number;

    constructor() {
        this.creatureGenericId = 0;
        this.creatureGrade = 0;
        super();
    }

    public getTypeId(): number {
        return GameFightMonsterInformations.ID;
    }

    public reset(): void {
        this.creatureGenericId = 0;
        this.creatureGrade = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GameFightMonsterInformations(param1);
    }

    public serializeAs_GameFightMonsterInformations(param1: ICustomDataOutput): void {
        super.serializeAs_GameFightAIInformations(param1);
        if (this.creatureGenericId < 0) {
            throw new Error('Forbidden value (' + this.creatureGenericId + ') on element creatureGenericId.');
        }
        param1.writeVarShort(this.creatureGenericId);
        if (this.creatureGrade < 0) {
            throw new Error('Forbidden value (' + this.creatureGrade + ') on element creatureGrade.');
        }
        param1.writeByte(this.creatureGrade);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameFightMonsterInformations(param1);
    }

    public deserializeAs_GameFightMonsterInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.creatureGenericId = param1.readVarUhShort();
        if (this.creatureGenericId < 0) {
            throw new Error('Forbidden value (' + this.creatureGenericId + ') on element of GameFightMonsterInformations.creatureGenericId.');
        }
        this.creatureGrade = param1.readByte();
        if (this.creatureGrade < 0) {
            throw new Error('Forbidden value (' + this.creatureGrade + ') on element of GameFightMonsterInformations.creatureGrade.');
        }

    }
}

export = GameFightMonsterInformations;
