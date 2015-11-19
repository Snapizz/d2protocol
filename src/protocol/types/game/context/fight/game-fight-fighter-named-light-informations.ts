/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import GameFightFighterLightInformations = require('./game-fight-fighter-light-informations');

class GameFightFighterNamedLightInformations extends GameFightFighterLightInformations implements INetworkType {
    public static ID: number = 456;

    name: string;

    constructor() {
        this.name = '';
        super();
    }

    public getTypeId(): number {
        return GameFightFighterNamedLightInformations.ID;
    }

    public reset(): void {
        this.name = '';
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GameFightFighterNamedLightInformations(param1);
    }

    public serializeAs_GameFightFighterNamedLightInformations(param1: ICustomDataOutput): void {
        super.serializeAs_GameFightFighterLightInformations(param1);
        param1.writeUTF(this.name);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameFightFighterNamedLightInformations(param1);
    }

    public deserializeAs_GameFightFighterNamedLightInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.name = param1.readUTF();

    }
}

export = GameFightFighterNamedLightInformations;
