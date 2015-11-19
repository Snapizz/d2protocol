/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import GameFightFighterInformations = require('./game-fight-fighter-informations');
import EntityLook = require('../../look/entity-look');
import EntityDispositionInformations = require('./../entity-disposition-informations');

class GameFightCompanionInformations extends GameFightFighterInformations implements INetworkType {
    public static ID: number = 450;

    companionGenericId: number;
    level: number;
    masterId: number;

    constructor() {
        this.companionGenericId = 0;
        this.level = 0;
        this.masterId = 0;
        super();
    }

    public getTypeId(): number {
        return GameFightCompanionInformations.ID;
    }

    public reset(): void {
        this.companionGenericId = 0;
        this.level = 0;
        this.masterId = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GameFightCompanionInformations(param1);
    }

    public serializeAs_GameFightCompanionInformations(param1: ICustomDataOutput): void {
        super.serializeAs_GameFightFighterInformations(param1);
        if (this.companionGenericId < 0) {
            throw new Error('Forbidden value (' + this.companionGenericId + ') on element companionGenericId.');
        }
        param1.writeByte(this.companionGenericId);
        if (this.level < 0 || this.level > 255) {
            throw new Error('Forbidden value (' + this.level + ') on element level.');
        }
        param1.writeByte(this.level);
        param1.writeInt(this.masterId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameFightCompanionInformations(param1);
    }

    public deserializeAs_GameFightCompanionInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.companionGenericId = param1.readByte();
        if (this.companionGenericId < 0) {
            throw new Error('Forbidden value (' + this.companionGenericId + ') on element of GameFightCompanionInformations.companionGenericId.');
        }
        this.level = param1.readUnsignedByte();
        if (this.level < 0 || this.level > 255) {
            throw new Error('Forbidden value (' + this.level + ') on element of GameFightCompanionInformations.level.');
        }
        this.masterId = param1.readInt();

    }
}

export = GameFightCompanionInformations;
