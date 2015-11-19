/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import GameRolePlayNamedActorInformations = require('./game-role-play-named-actor-informations');
import EntityLook = require('../../look/entity-look');
import EntityDispositionInformations = require('./../entity-disposition-informations');

class GameRolePlayMountInformations extends GameRolePlayNamedActorInformations implements INetworkType {
    public static ID: number = 180;

    ownerName: string;
    level: number;

    constructor() {
        this.ownerName = '';
        this.level = 0;
        super();
    }

    public getTypeId(): number {
        return GameRolePlayMountInformations.ID;
    }

    public reset(): void {
        this.ownerName = '';
        this.level = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GameRolePlayMountInformations(param1);
    }

    public serializeAs_GameRolePlayMountInformations(param1: ICustomDataOutput): void {
        super.serializeAs_GameRolePlayNamedActorInformations(param1);
        param1.writeUTF(this.ownerName);
        if (this.level < 0 || this.level > 255) {
            throw new Error('Forbidden value (' + this.level + ') on element level.');
        }
        param1.writeByte(this.level);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameRolePlayMountInformations(param1);
    }

    public deserializeAs_GameRolePlayMountInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.ownerName = param1.readUTF();
        this.level = param1.readUnsignedByte();
        if (this.level < 0 || this.level > 255) {
            throw new Error('Forbidden value (' + this.level + ') on element of GameRolePlayMountInformations.level.');
        }

    }
}

export = GameRolePlayMountInformations;
