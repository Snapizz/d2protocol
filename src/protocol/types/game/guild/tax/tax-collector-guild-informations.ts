/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import TaxCollectorComplementaryInformations = require('./tax-collector-complementary-informations');
import BasicGuildInformations = require('../../context/roleplay/basic-guild-informations');

class TaxCollectorGuildInformations extends TaxCollectorComplementaryInformations implements INetworkType {
    public static ID: number = 446;

    guild: BasicGuildInformations;

    constructor() {
        this.guild = new BasicGuildInformations();
        super();
    }

    public getTypeId(): number {
        return TaxCollectorGuildInformations.ID;
    }

    public reset(): void {
        this.guild = new BasicGuildInformations();
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_TaxCollectorGuildInformations(param1);
    }

    public serializeAs_TaxCollectorGuildInformations(param1: ICustomDataOutput): void {
        super.serializeAs_TaxCollectorComplementaryInformations(param1);
        this.guild.serializeAs_BasicGuildInformations(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_TaxCollectorGuildInformations(param1);
    }

    public deserializeAs_TaxCollectorGuildInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.guild = new BasicGuildInformations();
        this.guild.deserialize(param1);

    }
}

export = TaxCollectorGuildInformations;
