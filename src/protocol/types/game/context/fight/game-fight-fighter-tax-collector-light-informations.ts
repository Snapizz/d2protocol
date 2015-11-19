/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import GameFightFighterLightInformations = require('./game-fight-fighter-light-informations');

class GameFightFighterTaxCollectorLightInformations extends GameFightFighterLightInformations implements INetworkType {
    public static ID: number = 457;

    firstNameId: number;
    lastNameId: number;

    constructor() {
        this.firstNameId = 0;
        this.lastNameId = 0;
        super();
    }

    public getTypeId(): number {
        return GameFightFighterTaxCollectorLightInformations.ID;
    }

    public reset(): void {
        this.firstNameId = 0;
        this.lastNameId = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GameFightFighterTaxCollectorLightInformations(param1);
    }

    public serializeAs_GameFightFighterTaxCollectorLightInformations(param1: ICustomDataOutput): void {
        super.serializeAs_GameFightFighterLightInformations(param1);
        if (this.firstNameId < 0) {
            throw new Error('Forbidden value (' + this.firstNameId + ') on element firstNameId.');
        }
        param1.writeVarShort(this.firstNameId);
        if (this.lastNameId < 0) {
            throw new Error('Forbidden value (' + this.lastNameId + ') on element lastNameId.');
        }
        param1.writeVarShort(this.lastNameId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameFightFighterTaxCollectorLightInformations(param1);
    }

    public deserializeAs_GameFightFighterTaxCollectorLightInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.firstNameId = param1.readVarUhShort();
        if (this.firstNameId < 0) {
            throw new Error('Forbidden value (' + this.firstNameId + ') on element of GameFightFighterTaxCollectorLightInformations.firstNameId.');
        }
        this.lastNameId = param1.readVarUhShort();
        if (this.lastNameId < 0) {
            throw new Error('Forbidden value (' + this.lastNameId + ') on element of GameFightFighterTaxCollectorLightInformations.lastNameId.');
        }

    }
}

export = GameFightFighterTaxCollectorLightInformations;
