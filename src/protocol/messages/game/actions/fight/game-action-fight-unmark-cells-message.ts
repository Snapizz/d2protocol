/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import AbstractGameActionMessage = require('./../abstract-game-action-message');

class GameActionFightUnmarkCellsMessage extends AbstractGameActionMessage {
    public static ID: number = 5570;

    markId: number;

    constructor() {
        this.markId = 0;
        super();
    }

    public getMessageId(): number {
        return GameActionFightUnmarkCellsMessage.ID;
    }

    public reset(): void {
        this.markId = 0;
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
        this.serializeAs_GameActionFightUnmarkCellsMessage(param1);
    }

    public serializeAs_GameActionFightUnmarkCellsMessage(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractGameActionMessage(param1);
        param1.writeShort(this.markId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameActionFightUnmarkCellsMessage(param1);
    }

    public deserializeAs_GameActionFightUnmarkCellsMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.markId = param1.readShort();

    }
}

export = GameActionFightUnmarkCellsMessage;
