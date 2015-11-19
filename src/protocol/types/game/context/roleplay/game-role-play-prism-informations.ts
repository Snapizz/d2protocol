/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import GameRolePlayActorInformations = require('./game-role-play-actor-informations');
import PrismInformation = require('../../prism/prism-information');
import EntityLook = require('../../look/entity-look');
import EntityDispositionInformations = require('./../entity-disposition-informations');
import ProtocolTypeManager = require('../../../../protocol-type-manager');

class GameRolePlayPrismInformations extends GameRolePlayActorInformations implements INetworkType {
    public static ID: number = 161;

    prism: PrismInformation;

    constructor() {
        this.prism = new PrismInformation();
        super();
    }

    public getTypeId(): number {
        return GameRolePlayPrismInformations.ID;
    }

    public reset(): void {
        this.prism = new PrismInformation();
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GameRolePlayPrismInformations(param1);
    }

    public serializeAs_GameRolePlayPrismInformations(param1: ICustomDataOutput): void {
        super.serializeAs_GameRolePlayActorInformations(param1);
        param1.writeShort(this.prism.getTypeId());
        this.prism.serialize(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameRolePlayPrismInformations(param1);
    }

    public deserializeAs_GameRolePlayPrismInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        var _loc2_: number = param1.readUnsignedShort();
        this.prism = <PrismInformation>ProtocolTypeManager.getInstance(PrismInformation, _loc2_);
        this.prism.deserialize(param1);

    }
}

export = GameRolePlayPrismInformations;
