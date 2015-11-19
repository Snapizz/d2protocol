/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import HouseInformations = require('./house-informations');
import GuildInformations = require('../context/roleplay/guild-informations');

class HouseInformationsExtended extends HouseInformations implements INetworkType {
    public static ID: number = 112;

    guildInfo: GuildInformations;

    constructor() {
        this.guildInfo = new GuildInformations();
        super();
    }

    public getTypeId(): number {
        return HouseInformationsExtended.ID;
    }

    public reset(): void {
        this.guildInfo = new GuildInformations();
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_HouseInformationsExtended(param1);
    }

    public serializeAs_HouseInformationsExtended(param1: ICustomDataOutput): void {
        super.serializeAs_HouseInformations(param1);
        this.guildInfo.serializeAs_GuildInformations(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_HouseInformationsExtended(param1);
    }

    public deserializeAs_HouseInformationsExtended(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.guildInfo = new GuildInformations();
        this.guildInfo.deserialize(param1);

    }
}

export = HouseInformationsExtended;
