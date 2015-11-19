/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import GameRolePlayActorInformations = require('./game-role-play-actor-informations');
import EntityLook = require('../../look/entity-look');
import EntityDispositionInformations = require('./../entity-disposition-informations');

class GameRolePlayNpcInformations extends GameRolePlayActorInformations implements INetworkType {
    public static ID: number = 156;

    npcId: number;
    sex: boolean;
    specialArtworkId: number;

    constructor() {
        this.npcId = 0;
        this.sex = false;
        this.specialArtworkId = 0;
        super();
    }

    public getTypeId(): number {
        return GameRolePlayNpcInformations.ID;
    }

    public reset(): void {
        this.npcId = 0;
        this.sex = false;
        this.specialArtworkId = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GameRolePlayNpcInformations(param1);
    }

    public serializeAs_GameRolePlayNpcInformations(param1: ICustomDataOutput): void {
        super.serializeAs_GameRolePlayActorInformations(param1);
        if (this.npcId < 0) {
            throw new Error('Forbidden value (' + this.npcId + ') on element npcId.');
        }
        param1.writeVarShort(this.npcId);
        param1.writeBoolean(this.sex);
        if (this.specialArtworkId < 0) {
            throw new Error('Forbidden value (' + this.specialArtworkId + ') on element specialArtworkId.');
        }
        param1.writeVarShort(this.specialArtworkId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameRolePlayNpcInformations(param1);
    }

    public deserializeAs_GameRolePlayNpcInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.npcId = param1.readVarUhShort();
        if (this.npcId < 0) {
            throw new Error('Forbidden value (' + this.npcId + ') on element of GameRolePlayNpcInformations.npcId.');
        }
        this.sex = param1.readBoolean();
        this.specialArtworkId = param1.readVarUhShort();
        if (this.specialArtworkId < 0) {
            throw new Error('Forbidden value (' + this.specialArtworkId + ') on element of GameRolePlayNpcInformations.specialArtworkId.');
        }

    }
}

export = GameRolePlayNpcInformations;
