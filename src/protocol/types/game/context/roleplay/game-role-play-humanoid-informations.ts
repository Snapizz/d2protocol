/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import HumanInformations = require('./human-informations');
import GameRolePlayNamedActorInformations = require('./game-role-play-named-actor-informations');
import EntityLook = require('../../look/entity-look');
import EntityDispositionInformations = require('./../entity-disposition-informations');
import ProtocolTypeManager = require('../../../../protocol-type-manager');

class GameRolePlayHumanoidInformations extends GameRolePlayNamedActorInformations implements INetworkType {
    public static ID: number = 159;

    humanoidInfo: HumanInformations;
    accountId: number;

    constructor() {
        this.humanoidInfo = new HumanInformations();
        this.accountId = 0;
        super();
    }

    public getTypeId(): number {
        return GameRolePlayHumanoidInformations.ID;
    }

    public reset(): void {
        this.humanoidInfo = new HumanInformations();
        this.accountId = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GameRolePlayHumanoidInformations(param1);
    }

    public serializeAs_GameRolePlayHumanoidInformations(param1: ICustomDataOutput): void {
        super.serializeAs_GameRolePlayNamedActorInformations(param1);
        param1.writeShort(this.humanoidInfo.getTypeId());
        this.humanoidInfo.serialize(param1);
        if (this.accountId < 0) {
            throw new Error('Forbidden value (' + this.accountId + ') on element accountId.');
        }
        param1.writeInt(this.accountId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameRolePlayHumanoidInformations(param1);
    }

    public deserializeAs_GameRolePlayHumanoidInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        var _loc2_: number = param1.readUnsignedShort();
        this.humanoidInfo = <HumanInformations>ProtocolTypeManager.getInstance(HumanInformations, _loc2_);
        this.humanoidInfo.deserialize(param1);
        this.accountId = param1.readInt();
        if (this.accountId < 0) {
            throw new Error('Forbidden value (' + this.accountId + ') on element of GameRolePlayHumanoidInformations.accountId.');
        }

    }
}

export = GameRolePlayHumanoidInformations;
