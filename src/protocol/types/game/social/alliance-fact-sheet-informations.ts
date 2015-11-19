/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import AllianceInformations = require('../context/roleplay/alliance-informations');
import GuildEmblem = require('../guild/guild-emblem');

class AllianceFactSheetInformations extends AllianceInformations implements INetworkType {
    public static ID: number = 421;

    creationDate: number;

    constructor() {
        this.creationDate = 0;
        super();
    }

    public getTypeId(): number {
        return AllianceFactSheetInformations.ID;
    }

    public reset(): void {
        this.creationDate = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_AllianceFactSheetInformations(param1);
    }

    public serializeAs_AllianceFactSheetInformations(param1: ICustomDataOutput): void {
        super.serializeAs_AllianceInformations(param1);
        if (this.creationDate < 0) {
            throw new Error('Forbidden value (' + this.creationDate + ') on element creationDate.');
        }
        param1.writeInt(this.creationDate);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AllianceFactSheetInformations(param1);
    }

    public deserializeAs_AllianceFactSheetInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.creationDate = param1.readInt();
        if (this.creationDate < 0) {
            throw new Error('Forbidden value (' + this.creationDate + ') on element of AllianceFactSheetInformations.creationDate.');
        }

    }
}

export = AllianceFactSheetInformations;
