/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import GameContextActorInformations = require('./../game-context-actor-informations');
import EntityLook = require('../../look/entity-look');
import EntityDispositionInformations = require('./../entity-disposition-informations');

class GameRolePlayActorInformations extends GameContextActorInformations implements INetworkType {
    public static ID: number = 141;



    constructor() {

        super();
    }

    public getTypeId(): number {
        return GameRolePlayActorInformations.ID;
    }

    public reset(): void {

    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GameRolePlayActorInformations(param1);
    }

    public serializeAs_GameRolePlayActorInformations(param1: ICustomDataOutput): void {
        super.serializeAs_GameContextActorInformations(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameRolePlayActorInformations(param1);
    }

    public deserializeAs_GameRolePlayActorInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);

    }
}

export = GameRolePlayActorInformations;
