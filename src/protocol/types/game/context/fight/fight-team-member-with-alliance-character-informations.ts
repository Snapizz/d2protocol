/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import FightTeamMemberCharacterInformations = require('./fight-team-member-character-informations');
import BasicAllianceInformations = require('../roleplay/basic-alliance-informations');

class FightTeamMemberWithAllianceCharacterInformations extends FightTeamMemberCharacterInformations implements INetworkType {
    public static ID: number = 426;

    allianceInfos: BasicAllianceInformations;

    constructor() {
        this.allianceInfos = new BasicAllianceInformations();
        super();
    }

    public getTypeId(): number {
        return FightTeamMemberWithAllianceCharacterInformations.ID;
    }

    public reset(): void {
        this.allianceInfos = new BasicAllianceInformations();
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_FightTeamMemberWithAllianceCharacterInformations(param1);
    }

    public serializeAs_FightTeamMemberWithAllianceCharacterInformations(param1: ICustomDataOutput): void {
        super.serializeAs_FightTeamMemberCharacterInformations(param1);
        this.allianceInfos.serializeAs_BasicAllianceInformations(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_FightTeamMemberWithAllianceCharacterInformations(param1);
    }

    public deserializeAs_FightTeamMemberWithAllianceCharacterInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.allianceInfos = new BasicAllianceInformations();
        this.allianceInfos.deserialize(param1);

    }
}

export = FightTeamMemberWithAllianceCharacterInformations;
