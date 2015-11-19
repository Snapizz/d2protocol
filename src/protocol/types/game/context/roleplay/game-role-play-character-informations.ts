/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import GameRolePlayHumanoidInformations = require('./game-role-play-humanoid-informations');
import ActorAlignmentInformations = require('../../character/alignment/actor-alignment-informations');
import EntityLook = require('../../look/entity-look');
import EntityDispositionInformations = require('./../entity-disposition-informations');

class GameRolePlayCharacterInformations extends GameRolePlayHumanoidInformations implements INetworkType {
    public static ID: number = 36;

    alignmentInfos: ActorAlignmentInformations;

    constructor() {
        this.alignmentInfos = new ActorAlignmentInformations();
        super();
    }

    public getTypeId(): number {
        return GameRolePlayCharacterInformations.ID;
    }

    public reset(): void {
        this.alignmentInfos = new ActorAlignmentInformations();
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GameRolePlayCharacterInformations(param1);
    }

    public serializeAs_GameRolePlayCharacterInformations(param1: ICustomDataOutput): void {
        super.serializeAs_GameRolePlayHumanoidInformations(param1);
        this.alignmentInfos.serializeAs_ActorAlignmentInformations(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameRolePlayCharacterInformations(param1);
    }

    public deserializeAs_GameRolePlayCharacterInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.alignmentInfos = new ActorAlignmentInformations();
        this.alignmentInfos.deserialize(param1);

    }
}

export = GameRolePlayCharacterInformations;
