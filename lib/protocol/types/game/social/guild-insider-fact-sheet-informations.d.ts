/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import GuildFactSheetInformations = require('./guild-fact-sheet-informations');
declare class GuildInsiderFactSheetInformations extends GuildFactSheetInformations implements INetworkType {
    static ID: number;
    leaderName: string;
    nbConnectedMembers: number;
    nbTaxCollectors: number;
    lastActivity: number;
    enabled: boolean;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GuildInsiderFactSheetInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GuildInsiderFactSheetInformations(param1: ICustomDataInput): void;
}
export = GuildInsiderFactSheetInformations;
