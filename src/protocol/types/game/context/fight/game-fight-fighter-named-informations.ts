/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import GameFightFighterInformations = require('./game-fight-fighter-informations');
import PlayerStatus = require('../../character/status/player-status');
import EntityLook = require('../../look/entity-look');
import EntityDispositionInformations = require('./../entity-disposition-informations');

class GameFightFighterNamedInformations extends GameFightFighterInformations implements INetworkType {
    public static ID: number = 158;

    name: string;
    status: PlayerStatus;

    constructor() {
        this.name = '';
        this.status = new PlayerStatus();
        super();
    }

    public getTypeId(): number {
        return GameFightFighterNamedInformations.ID;
    }

    public reset(): void {
        this.name = '';
        this.status = new PlayerStatus();
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GameFightFighterNamedInformations(param1);
    }

    public serializeAs_GameFightFighterNamedInformations(param1: ICustomDataOutput): void {
        super.serializeAs_GameFightFighterInformations(param1);
        param1.writeUTF(this.name);
        this.status.serializeAs_PlayerStatus(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameFightFighterNamedInformations(param1);
    }

    public deserializeAs_GameFightFighterNamedInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.name = param1.readUTF();
        this.status = new PlayerStatus();
        this.status.deserialize(param1);

    }
}

export = GameFightFighterNamedInformations;
