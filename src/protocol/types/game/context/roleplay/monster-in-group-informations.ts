/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import MonsterInGroupLightInformations = require('./monster-in-group-light-informations');
import EntityLook = require('../../look/entity-look');

class MonsterInGroupInformations extends MonsterInGroupLightInformations implements INetworkType {
    public static ID: number = 144;

    look: EntityLook;

    constructor() {
        this.look = new EntityLook();
        super();
    }

    public getTypeId(): number {
        return MonsterInGroupInformations.ID;
    }

    public reset(): void {
        this.look = new EntityLook();
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_MonsterInGroupInformations(param1);
    }

    public serializeAs_MonsterInGroupInformations(param1: ICustomDataOutput): void {
        super.serializeAs_MonsterInGroupLightInformations(param1);
        this.look.serializeAs_EntityLook(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_MonsterInGroupInformations(param1);
    }

    public deserializeAs_MonsterInGroupInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.look = new EntityLook();
        this.look.deserialize(param1);

    }
}

export = MonsterInGroupInformations;
