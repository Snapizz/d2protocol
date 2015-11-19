/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import TaxCollectorStaticInformations = require('./tax-collector-static-informations');
import AllianceInformations = require('./roleplay/alliance-informations');
import GuildInformations = require('./roleplay/guild-informations');

class TaxCollectorStaticExtendedInformations extends TaxCollectorStaticInformations implements INetworkType {
    public static ID: number = 440;

    allianceIdentity: AllianceInformations;

    constructor() {
        this.allianceIdentity = new AllianceInformations();
        super();
    }

    public getTypeId(): number {
        return TaxCollectorStaticExtendedInformations.ID;
    }

    public reset(): void {
        this.allianceIdentity = new AllianceInformations();
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_TaxCollectorStaticExtendedInformations(param1);
    }

    public serializeAs_TaxCollectorStaticExtendedInformations(param1: ICustomDataOutput): void {
        super.serializeAs_TaxCollectorStaticInformations(param1);
        this.allianceIdentity.serializeAs_AllianceInformations(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_TaxCollectorStaticExtendedInformations(param1);
    }

    public deserializeAs_TaxCollectorStaticExtendedInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.allianceIdentity = new AllianceInformations();
        this.allianceIdentity.deserialize(param1);

    }
}

export = TaxCollectorStaticExtendedInformations;
