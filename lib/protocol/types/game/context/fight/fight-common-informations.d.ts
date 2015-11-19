/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import FightTeamInformations = require('./fight-team-informations');
import FightOptionsInformations = require('./fight-options-informations');
declare class FightCommonInformations implements INetworkType {
    static ID: number;
    fightId: number;
    fightType: number;
    fightTeams: FightTeamInformations[];
    fightTeamsPositions: number[];
    fightTeamsOptions: FightOptionsInformations[];
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_FightCommonInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_FightCommonInformations(param1: ICustomDataInput): void;
}
export = FightCommonInformations;
