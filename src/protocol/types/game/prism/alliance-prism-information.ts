/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import PrismInformation = require('./prism-information');
import AllianceInformations = require('../context/roleplay/alliance-informations');

class AlliancePrismInformation extends PrismInformation implements INetworkType {
    public static ID: number = 427;

    alliance: AllianceInformations;

    constructor() {
        this.alliance = new AllianceInformations();
        super();
    }

    public getTypeId(): number {
        return AlliancePrismInformation.ID;
    }

    public reset(): void {
        this.alliance = new AllianceInformations();
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_AlliancePrismInformation(param1);
    }

    public serializeAs_AlliancePrismInformation(param1: ICustomDataOutput): void {
        super.serializeAs_PrismInformation(param1);
        this.alliance.serializeAs_AllianceInformations(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AlliancePrismInformation(param1);
    }

    public deserializeAs_AlliancePrismInformation(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.alliance = new AllianceInformations();
        this.alliance.deserialize(param1);

    }
}

export = AlliancePrismInformation;
