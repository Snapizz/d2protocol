/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import FightTeamInformations = require('./fight-team-informations');
declare class FightAllianceTeamInformations extends FightTeamInformations implements INetworkType {
    static ID: number;
    relation: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_FightAllianceTeamInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_FightAllianceTeamInformations(param1: ICustomDataInput): void;
}
export = FightAllianceTeamInformations;
