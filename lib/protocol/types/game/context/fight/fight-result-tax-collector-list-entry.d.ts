/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import FightResultFighterListEntry = require('./fight-result-fighter-list-entry');
import BasicGuildInformations = require('../roleplay/basic-guild-informations');
declare class FightResultTaxCollectorListEntry extends FightResultFighterListEntry implements INetworkType {
    static ID: number;
    level: number;
    guildInfo: BasicGuildInformations;
    experienceForGuild: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_FightResultTaxCollectorListEntry(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_FightResultTaxCollectorListEntry(param1: ICustomDataInput): void;
}
export = FightResultTaxCollectorListEntry;
