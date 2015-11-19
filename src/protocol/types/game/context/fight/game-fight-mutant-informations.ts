/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import GameFightFighterNamedInformations = require('./game-fight-fighter-named-informations');
import EntityLook = require('../../look/entity-look');
import EntityDispositionInformations = require('./../entity-disposition-informations');
import PlayerStatus = require('../../character/status/player-status');

class GameFightMutantInformations extends GameFightFighterNamedInformations implements INetworkType {
    public static ID: number = 50;

    powerLevel: number;

    constructor() {
        this.powerLevel = 0;
        super();
    }

    public getTypeId(): number {
        return GameFightMutantInformations.ID;
    }

    public reset(): void {
        this.powerLevel = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GameFightMutantInformations(param1);
    }

    public serializeAs_GameFightMutantInformations(param1: ICustomDataOutput): void {
        super.serializeAs_GameFightFighterNamedInformations(param1);
        if (this.powerLevel < 0) {
            throw new Error('Forbidden value (' + this.powerLevel + ') on element powerLevel.');
        }
        param1.writeByte(this.powerLevel);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameFightMutantInformations(param1);
    }

    public deserializeAs_GameFightMutantInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.powerLevel = param1.readByte();
        if (this.powerLevel < 0) {
            throw new Error('Forbidden value (' + this.powerLevel + ') on element of GameFightMutantInformations.powerLevel.');
        }

    }
}

export = GameFightMutantInformations;
