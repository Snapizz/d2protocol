/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import GameFightFighterNamedInformations = require('./game-fight-fighter-named-informations');
import ActorAlignmentInformations = require('../../character/alignment/actor-alignment-informations');
import EntityLook = require('../../look/entity-look');
import EntityDispositionInformations = require('./../entity-disposition-informations');
import PlayerStatus = require('../../character/status/player-status');

class GameFightCharacterInformations extends GameFightFighterNamedInformations implements INetworkType {
    public static ID: number = 46;

    level: number;
    alignmentInfos: ActorAlignmentInformations;
    breed: number;
    sex: boolean;

    constructor() {
        this.level = 0;
        this.alignmentInfos = new ActorAlignmentInformations();
        this.breed = 0;
        this.sex = false;
        super();
    }

    public getTypeId(): number {
        return GameFightCharacterInformations.ID;
    }

    public reset(): void {
        this.level = 0;
        this.alignmentInfos = new ActorAlignmentInformations();
        this.breed = 0;
        this.sex = false;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GameFightCharacterInformations(param1);
    }

    public serializeAs_GameFightCharacterInformations(param1: ICustomDataOutput): void {
        super.serializeAs_GameFightFighterNamedInformations(param1);
        if (this.level < 0 || this.level > 255) {
            throw new Error('Forbidden value (' + this.level + ') on element level.');
        }
        param1.writeByte(this.level);
        this.alignmentInfos.serializeAs_ActorAlignmentInformations(param1);
        param1.writeByte(this.breed);
        param1.writeBoolean(this.sex);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameFightCharacterInformations(param1);
    }

    public deserializeAs_GameFightCharacterInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.level = param1.readUnsignedByte();
        if (this.level < 0 || this.level > 255) {
            throw new Error('Forbidden value (' + this.level + ') on element of GameFightCharacterInformations.level.');
        }
        this.alignmentInfos = new ActorAlignmentInformations();
        this.alignmentInfos.deserialize(param1);
        this.breed = param1.readByte();
        this.sex = param1.readBoolean();

    }
}

export = GameFightCharacterInformations;
