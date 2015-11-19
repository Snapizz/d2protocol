/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import AbstractGameActionMessage = require('./../abstract-game-action-message');

class GameActionFightInvisibilityMessage extends AbstractGameActionMessage {
    public static ID: number = 5821;

    targetId: number;
    state: number;

    constructor() {
        this.targetId = 0;
        this.state = 0;
        super();
    }

    public getMessageId(): number {
        return GameActionFightInvisibilityMessage.ID;
    }

    public reset(): void {
        this.targetId = 0;
        this.state = 0;
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
        this.serializeAs_GameActionFightInvisibilityMessage(param1);
    }

    public serializeAs_GameActionFightInvisibilityMessage(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractGameActionMessage(param1);
        param1.writeInt(this.targetId);
        param1.writeByte(this.state);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameActionFightInvisibilityMessage(param1);
    }

    public deserializeAs_GameActionFightInvisibilityMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.targetId = param1.readInt();
        this.state = param1.readByte();
        if (this.state < 0) {
            throw new Error('Forbidden value (' + this.state + ') on element of GameActionFightInvisibilityMessage.state.');
        }

    }
}

export = GameActionFightInvisibilityMessage;
