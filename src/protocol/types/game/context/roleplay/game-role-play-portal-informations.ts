/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import GameRolePlayActorInformations = require('./game-role-play-actor-informations');
import PortalInformation = require('./treasureHunt/portal-information');
import EntityLook = require('../../look/entity-look');
import EntityDispositionInformations = require('./../entity-disposition-informations');
import ProtocolTypeManager = require('../../../../protocol-type-manager');

class GameRolePlayPortalInformations extends GameRolePlayActorInformations implements INetworkType {
    public static ID: number = 467;

    portal: PortalInformation;

    constructor() {
        this.portal = new PortalInformation();
        super();
    }

    public getTypeId(): number {
        return GameRolePlayPortalInformations.ID;
    }

    public reset(): void {
        this.portal = new PortalInformation();
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GameRolePlayPortalInformations(param1);
    }

    public serializeAs_GameRolePlayPortalInformations(param1: ICustomDataOutput): void {
        super.serializeAs_GameRolePlayActorInformations(param1);
        param1.writeShort(this.portal.getTypeId());
        this.portal.serialize(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameRolePlayPortalInformations(param1);
    }

    public deserializeAs_GameRolePlayPortalInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        var _loc2_: number = param1.readUnsignedShort();
        this.portal = <PortalInformation>ProtocolTypeManager.getInstance(PortalInformation, _loc2_);
        this.portal.deserialize(param1);

    }
}

export = GameRolePlayPortalInformations;
