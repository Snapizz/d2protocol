/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import GuildInformations = require('../context/roleplay/guild-informations');
import BasicNamedAllianceInformations = require('../context/roleplay/basic-named-alliance-informations');
import GuildEmblem = require('../guild/guild-emblem');

class AlliancedGuildFactSheetInformations extends GuildInformations implements INetworkType {
    public static ID: number = 422;

    allianceInfos: BasicNamedAllianceInformations;

    constructor() {
        this.allianceInfos = new BasicNamedAllianceInformations();
        super();
    }

    public getTypeId(): number {
        return AlliancedGuildFactSheetInformations.ID;
    }

    public reset(): void {
        this.allianceInfos = new BasicNamedAllianceInformations();
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_AlliancedGuildFactSheetInformations(param1);
    }

    public serializeAs_AlliancedGuildFactSheetInformations(param1: ICustomDataOutput): void {
        super.serializeAs_GuildInformations(param1);
        this.allianceInfos.serializeAs_BasicNamedAllianceInformations(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AlliancedGuildFactSheetInformations(param1);
    }

    public deserializeAs_AlliancedGuildFactSheetInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.allianceInfos = new BasicNamedAllianceInformations();
        this.allianceInfos.deserialize(param1);

    }
}

export = AlliancedGuildFactSheetInformations;
