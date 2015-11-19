/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import AbstractGameActionMessage = require('./../abstract-game-action-message');

class GameActionFightReflectDamagesMessage extends AbstractGameActionMessage {
    public static ID: number = 5530;

    targetId: number;

    constructor() {
        this.targetId = 0;
        super();
    }

    public getMessageId(): number {
        return GameActionFightReflectDamagesMessage.ID;
    }

    public reset(): void {
        this.targetId = 0;
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
        this.serializeAs_GameActionFightReflectDamagesMessage(param1);
    }

    public serializeAs_GameActionFightReflectDamagesMessage(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractGameActionMessage(param1);
        param1.writeInt(this.targetId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameActionFightReflectDamagesMessage(param1);
    }

    public deserializeAs_GameActionFightReflectDamagesMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.targetId = param1.readInt();

    }
}

export = GameActionFightReflectDamagesMessage;
