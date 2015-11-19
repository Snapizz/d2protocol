/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import GuildInformations = require('./roleplay/guild-informations');

class TaxCollectorStaticInformations implements INetworkType {
    public static ID: number = 147;

    firstNameId: number;
    lastNameId: number;
    guildIdentity: GuildInformations;

    constructor() {
        this.firstNameId = 0;
        this.lastNameId = 0;
        this.guildIdentity = new GuildInformations();
    }

    public getTypeId(): number {
        return TaxCollectorStaticInformations.ID;
    }

    public reset(): void {
        this.firstNameId = 0;
        this.lastNameId = 0;
        this.guildIdentity = new GuildInformations();
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_TaxCollectorStaticInformations(param1);
    }

    public serializeAs_TaxCollectorStaticInformations(param1: ICustomDataOutput): void {
        if (this.firstNameId < 0) {
            throw new Error('Forbidden value (' + this.firstNameId + ') on element firstNameId.');
        }
        param1.writeVarShort(this.firstNameId);
        if (this.lastNameId < 0) {
            throw new Error('Forbidden value (' + this.lastNameId + ') on element lastNameId.');
        }
        param1.writeVarShort(this.lastNameId);
        this.guildIdentity.serializeAs_GuildInformations(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_TaxCollectorStaticInformations(param1);
    }

    public deserializeAs_TaxCollectorStaticInformations(param1: ICustomDataInput): void {
        this.firstNameId = param1.readVarUhShort();
        if (this.firstNameId < 0) {
            throw new Error('Forbidden value (' + this.firstNameId + ') on element of TaxCollectorStaticInformations.firstNameId.');
        }
        this.lastNameId = param1.readVarUhShort();
        if (this.lastNameId < 0) {
            throw new Error('Forbidden value (' + this.lastNameId + ') on element of TaxCollectorStaticInformations.lastNameId.');
        }
        this.guildIdentity = new GuildInformations();
        this.guildIdentity.deserialize(param1);

    }
}

export = TaxCollectorStaticInformations;
