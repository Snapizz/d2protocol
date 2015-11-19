/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import GameFightFighterLightInformations = require('./game-fight-fighter-light-informations');

class GameFightFighterCompanionLightInformations extends GameFightFighterLightInformations implements INetworkType {
    public static ID: number = 454;

    companionId: number;
    masterId: number;

    constructor() {
        this.companionId = 0;
        this.masterId = 0;
        super();
    }

    public getTypeId(): number {
        return GameFightFighterCompanionLightInformations.ID;
    }

    public reset(): void {
        this.companionId = 0;
        this.masterId = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GameFightFighterCompanionLightInformations(param1);
    }

    public serializeAs_GameFightFighterCompanionLightInformations(param1: ICustomDataOutput): void {
        super.serializeAs_GameFightFighterLightInformations(param1);
        if (this.companionId < 0) {
            throw new Error('Forbidden value (' + this.companionId + ') on element companionId.');
        }
        param1.writeByte(this.companionId);
        param1.writeInt(this.masterId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameFightFighterCompanionLightInformations(param1);
    }

    public deserializeAs_GameFightFighterCompanionLightInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.companionId = param1.readByte();
        if (this.companionId < 0) {
            throw new Error('Forbidden value (' + this.companionId + ') on element of GameFightFighterCompanionLightInformations.companionId.');
        }
        this.masterId = param1.readInt();

    }
}

export = GameFightFighterCompanionLightInformations;
