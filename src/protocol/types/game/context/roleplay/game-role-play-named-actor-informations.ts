/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import GameRolePlayActorInformations = require('./game-role-play-actor-informations');
import EntityLook = require('../../look/entity-look');
import EntityDispositionInformations = require('./../entity-disposition-informations');

class GameRolePlayNamedActorInformations extends GameRolePlayActorInformations implements INetworkType {
    public static ID: number = 154;

    name: string;

    constructor() {
        this.name = '';
        super();
    }

    public getTypeId(): number {
        return GameRolePlayNamedActorInformations.ID;
    }

    public reset(): void {
        this.name = '';
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GameRolePlayNamedActorInformations(param1);
    }

    public serializeAs_GameRolePlayNamedActorInformations(param1: ICustomDataOutput): void {
        super.serializeAs_GameRolePlayActorInformations(param1);
        param1.writeUTF(this.name);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameRolePlayNamedActorInformations(param1);
    }

    public deserializeAs_GameRolePlayNamedActorInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.name = param1.readUTF();

    }
}

export = GameRolePlayNamedActorInformations;
