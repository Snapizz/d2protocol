/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import AbstractFightDispellableEffect = require('../../actions/fight/abstract-fight-dispellable-effect');
import ProtocolTypeManager = require('../../../../protocol-type-manager');

class FightDispellableEffectExtendedInformations implements INetworkType {
    public static ID: number = 208;

    actionId: number;
    sourceId: number;
    effect: AbstractFightDispellableEffect;

    constructor() {
        this.actionId = 0;
        this.sourceId = 0;
        this.effect = new AbstractFightDispellableEffect();
    }

    public getTypeId(): number {
        return FightDispellableEffectExtendedInformations.ID;
    }

    public reset(): void {
        this.actionId = 0;
        this.sourceId = 0;
        this.effect = new AbstractFightDispellableEffect();
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_FightDispellableEffectExtendedInformations(param1);
    }

    public serializeAs_FightDispellableEffectExtendedInformations(param1: ICustomDataOutput): void {
        if (this.actionId < 0) {
            throw new Error('Forbidden value (' + this.actionId + ') on element actionId.');
        }
        param1.writeVarShort(this.actionId);
        param1.writeInt(this.sourceId);
        param1.writeShort(this.effect.getTypeId());
        this.effect.serialize(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_FightDispellableEffectExtendedInformations(param1);
    }

    public deserializeAs_FightDispellableEffectExtendedInformations(param1: ICustomDataInput): void {
        this.actionId = param1.readVarUhShort();
        if (this.actionId < 0) {
            throw new Error('Forbidden value (' + this.actionId + ') on element of FightDispellableEffectExtendedInformations.actionId.');
        }
        this.sourceId = param1.readInt();
        var _loc2_: number = param1.readUnsignedShort();
        this.effect = <AbstractFightDispellableEffect>ProtocolTypeManager.getInstance(AbstractFightDispellableEffect, _loc2_);
        this.effect.deserialize(param1);

    }
}

export = FightDispellableEffectExtendedInformations;
