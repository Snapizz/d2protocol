/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import AbstractGameActionMessage = require('./../abstract-game-action-message');
import EntityLook = require('../../../../types/game/look/entity-look');

class GameActionFightChangeLookMessage extends AbstractGameActionMessage {
    public static ID: number = 5532;

    targetId: number;
    entityLook: EntityLook;

    constructor() {
        this.targetId = 0;
        this.entityLook = new EntityLook();
        super();
    }

    public getMessageId(): number {
        return GameActionFightChangeLookMessage.ID;
    }

    public reset(): void {
        this.targetId = 0;
        this.entityLook = new EntityLook();
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
        this.serializeAs_GameActionFightChangeLookMessage(param1);
    }

    public serializeAs_GameActionFightChangeLookMessage(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractGameActionMessage(param1);
        param1.writeInt(this.targetId);
        this.entityLook.serializeAs_EntityLook(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameActionFightChangeLookMessage(param1);
    }

    public deserializeAs_GameActionFightChangeLookMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.targetId = param1.readInt();
        this.entityLook = new EntityLook();
        this.entityLook.deserialize(param1);

    }
}

export = GameActionFightChangeLookMessage;
