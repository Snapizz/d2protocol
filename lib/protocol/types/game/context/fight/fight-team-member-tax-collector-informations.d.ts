/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import FightTeamMemberInformations = require('./fight-team-member-informations');
declare class FightTeamMemberTaxCollectorInformations extends FightTeamMemberInformations implements INetworkType {
    static ID: number;
    firstNameId: number;
    lastNameId: number;
    level: number;
    guildId: number;
    uid: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_FightTeamMemberTaxCollectorInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_FightTeamMemberTaxCollectorInformations(param1: ICustomDataInput): void;
}
export = FightTeamMemberTaxCollectorInformations;
