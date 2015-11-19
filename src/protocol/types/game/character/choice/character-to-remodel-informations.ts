/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import CharacterRemodelingInformation = require('./character-remodeling-information');

class CharacterToRemodelInformations extends CharacterRemodelingInformation implements INetworkType {
    public static ID: number = 477;

    possibleChangeMask: number;
    mandatoryChangeMask: number;

    constructor() {
        this.possibleChangeMask = 0;
        this.mandatoryChangeMask = 0;
        super();
    }

    public getTypeId(): number {
        return CharacterToRemodelInformations.ID;
    }

    public reset(): void {
        this.possibleChangeMask = 0;
        this.mandatoryChangeMask = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_CharacterToRemodelInformations(param1);
    }

    public serializeAs_CharacterToRemodelInformations(param1: ICustomDataOutput): void {
        super.serializeAs_CharacterRemodelingInformation(param1);
        if (this.possibleChangeMask < 0) {
            throw new Error('Forbidden value (' + this.possibleChangeMask + ') on element possibleChangeMask.');
        }
        param1.writeByte(this.possibleChangeMask);
        if (this.mandatoryChangeMask < 0) {
            throw new Error('Forbidden value (' + this.mandatoryChangeMask + ') on element mandatoryChangeMask.');
        }
        param1.writeByte(this.mandatoryChangeMask);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_CharacterToRemodelInformations(param1);
    }

    public deserializeAs_CharacterToRemodelInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.possibleChangeMask = param1.readByte();
        if (this.possibleChangeMask < 0) {
            throw new Error('Forbidden value (' + this.possibleChangeMask + ') on element of CharacterToRemodelInformations.possibleChangeMask.');
        }
        this.mandatoryChangeMask = param1.readByte();
        if (this.mandatoryChangeMask < 0) {
            throw new Error('Forbidden value (' + this.mandatoryChangeMask + ') on element of CharacterToRemodelInformations.mandatoryChangeMask.');
        }

    }
}

export = CharacterToRemodelInformations;
