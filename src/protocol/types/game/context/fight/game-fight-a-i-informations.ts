/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import GameFightFighterInformations = require('./game-fight-fighter-informations');
import EntityLook = require('../../look/entity-look');
import EntityDispositionInformations = require('./../entity-disposition-informations');

class GameFightAIInformations extends GameFightFighterInformations implements INetworkType {
    public static ID: number = 151;



    constructor() {

        super();
    }

    public getTypeId(): number {
        return GameFightAIInformations.ID;
    }

    public reset(): void {

    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GameFightAIInformations(param1);
    }

    public serializeAs_GameFightAIInformations(param1: ICustomDataOutput): void {
        super.serializeAs_GameFightFighterInformations(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameFightAIInformations(param1);
    }

    public deserializeAs_GameFightAIInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);

    }
}

export = GameFightAIInformations;
