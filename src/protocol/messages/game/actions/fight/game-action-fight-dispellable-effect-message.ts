/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import AbstractGameActionMessage = require('./../abstract-game-action-message');
import AbstractFightDispellableEffect = require('../../../../types/game/actions/fight/abstract-fight-dispellable-effect');
import ProtocolTypeManager = require('../../../../protocol-type-manager');

class GameActionFightDispellableEffectMessage extends AbstractGameActionMessage {
    public static ID: number = 6070;

    effect: AbstractFightDispellableEffect;

    constructor() {
        this.effect = new AbstractFightDispellableEffect();
        super();
    }

    public getMessageId(): number {
        return GameActionFightDispellableEffectMessage.ID;
    }

    public reset(): void {
        this.effect = new AbstractFightDispellableEffect();
    }

    public pack(param1: ICustomDataOutput): void {
        let loc2 = new ByteArray();
        this.serialize(new CustomDataWrapper(loc2));
        NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    }

    public unpack(param1: ICustomDataInput, param2: number): void {
        this.deserialize(param1);
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GameActionFightDispellableEffectMessage(param1);
    }

    public serializeAs_GameActionFightDispellableEffectMessage(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractGameActionMessage(param1);
        param1.writeShort(this.effect.getTypeId());
        this.effect.serialize(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameActionFightDispellableEffectMessage(param1);
    }

    public deserializeAs_GameActionFightDispellableEffectMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        var _loc2_: number = param1.readUnsignedShort();
        this.effect = <AbstractFightDispellableEffect>ProtocolTypeManager.getInstance(AbstractFightDispellableEffect, _loc2_);
        this.effect.deserialize(param1);

    }
}

export = GameActionFightDispellableEffectMessage;
