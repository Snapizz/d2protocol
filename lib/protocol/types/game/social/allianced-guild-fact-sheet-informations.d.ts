/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import GuildInformations = require('../context/roleplay/guild-informations');
import BasicNamedAllianceInformations = require('../context/roleplay/basic-named-alliance-informations');
declare class AlliancedGuildFactSheetInformations extends GuildInformations implements INetworkType {
    static ID: number;
    allianceInfos: BasicNamedAllianceInformations;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_AlliancedGuildFactSheetInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_AlliancedGuildFactSheetInformations(param1: ICustomDataInput): void;
}
export = AlliancedGuildFactSheetInformations;
