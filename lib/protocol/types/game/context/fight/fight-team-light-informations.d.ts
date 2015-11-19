/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import AbstractFightTeamInformations = require('./abstract-fight-team-informations');
declare class FightTeamLightInformations extends AbstractFightTeamInformations implements INetworkType {
    static ID: number;
    teamMembersCount: number;
    meanLevel: number;
    hasFriend: boolean;
    hasGuildMember: boolean;
    hasAllianceMember: boolean;
    hasGroupMember: boolean;
    hasMyTaxCollector: boolean;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_FightTeamLightInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_FightTeamLightInformations(param1: ICustomDataInput): void;
}
export = FightTeamLightInformations;
