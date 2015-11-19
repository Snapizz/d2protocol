/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import GameFightAIInformations = require('./game-fight-a-i-informations');
import EntityLook = require('../../look/entity-look');
import EntityDispositionInformations = require('./../entity-disposition-informations');

class GameFightTaxCollectorInformations extends GameFightAIInformations implements INetworkType {
    public static ID: number = 48;

    firstNameId: number;
    lastNameId: number;
    level: number;

    constructor() {
        this.firstNameId = 0;
        this.lastNameId = 0;
        this.level = 0;
        super();
    }

    public getTypeId(): number {
        return GameFightTaxCollectorInformations.ID;
    }

    public reset(): void {
        this.firstNameId = 0;
        this.lastNameId = 0;
        this.level = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GameFightTaxCollectorInformations(param1);
    }

    public serializeAs_GameFightTaxCollectorInformations(param1: ICustomDataOutput): void {
        super.serializeAs_GameFightAIInformations(param1);
        if (this.firstNameId < 0) {
            throw new Error('Forbidden value (' + this.firstNameId + ') on element firstNameId.');
        }
        param1.writeVarShort(this.firstNameId);
        if (this.lastNameId < 0) {
            throw new Error('Forbidden value (' + this.lastNameId + ') on element lastNameId.');
        }
        param1.writeVarShort(this.lastNameId);
        if (this.level < 0 || this.level > 255) {
            throw new Error('Forbidden value (' + this.level + ') on element level.');
        }
        param1.writeByte(this.level);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameFightTaxCollectorInformations(param1);
    }

    public deserializeAs_GameFightTaxCollectorInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.firstNameId = param1.readVarUhShort();
        if (this.firstNameId < 0) {
            throw new Error('Forbidden value (' + this.firstNameId + ') on element of GameFightTaxCollectorInformations.firstNameId.');
        }
        this.lastNameId = param1.readVarUhShort();
        if (this.lastNameId < 0) {
            throw new Error('Forbidden value (' + this.lastNameId + ') on element of GameFightTaxCollectorInformations.lastNameId.');
        }
        this.level = param1.readUnsignedByte();
        if (this.level < 0 || this.level > 255) {
            throw new Error('Forbidden value (' + this.level + ') on element of GameFightTaxCollectorInformations.level.');
        }

    }
}

export = GameFightTaxCollectorInformations;
