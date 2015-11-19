/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import EntityDispositionInformations = require('./entity-disposition-informations');
import EntityLook = require('../look/entity-look');
import ProtocolTypeManager = require('../../../protocol-type-manager');

class GameContextActorInformations implements INetworkType {
    public static ID: number = 150;

    contextualId: number;
    look: EntityLook;
    disposition: EntityDispositionInformations;

    constructor() {
        this.contextualId = 0;
        this.look = new EntityLook();
        this.disposition = new EntityDispositionInformations();
    }

    public getTypeId(): number {
        return GameContextActorInformations.ID;
    }

    public reset(): void {
        this.contextualId = 0;
        this.look = new EntityLook();
        this.disposition = new EntityDispositionInformations();
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GameContextActorInformations(param1);
    }

    public serializeAs_GameContextActorInformations(param1: ICustomDataOutput): void {
        param1.writeInt(this.contextualId);
        this.look.serializeAs_EntityLook(param1);
        param1.writeShort(this.disposition.getTypeId());
        this.disposition.serialize(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameContextActorInformations(param1);
    }

    public deserializeAs_GameContextActorInformations(param1: ICustomDataInput): void {
        this.contextualId = param1.readInt();
        this.look = new EntityLook();
        this.look.deserialize(param1);
        var _loc2_: number = param1.readUnsignedShort();
        this.disposition = <EntityDispositionInformations>ProtocolTypeManager.getInstance(EntityDispositionInformations, _loc2_);
        this.disposition.deserialize(param1);

    }
}

export = GameContextActorInformations;
