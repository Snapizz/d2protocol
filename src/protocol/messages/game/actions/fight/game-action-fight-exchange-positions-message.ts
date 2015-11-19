/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import AbstractGameActionMessage = require('./../abstract-game-action-message');

class GameActionFightExchangePositionsMessage extends AbstractGameActionMessage {
    public static ID: number = 5527;

    targetId: number;
    casterCellId: number;
    targetCellId: number;

    constructor() {
        this.targetId = 0;
        this.casterCellId = 0;
        this.targetCellId = 0;
        super();
    }

    public getMessageId(): number {
        return GameActionFightExchangePositionsMessage.ID;
    }

    public reset(): void {
        this.targetId = 0;
        this.casterCellId = 0;
        this.targetCellId = 0;
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
        this.serializeAs_GameActionFightExchangePositionsMessage(param1);
    }

    public serializeAs_GameActionFightExchangePositionsMessage(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractGameActionMessage(param1);
        param1.writeInt(this.targetId);
        if (this.casterCellId < -1 || this.casterCellId > 559) {
            throw new Error('Forbidden value (' + this.casterCellId + ') on element casterCellId.');
        }
        param1.writeShort(this.casterCellId);
        if (this.targetCellId < -1 || this.targetCellId > 559) {
            throw new Error('Forbidden value (' + this.targetCellId + ') on element targetCellId.');
        }
        param1.writeShort(this.targetCellId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameActionFightExchangePositionsMessage(param1);
    }

    public deserializeAs_GameActionFightExchangePositionsMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.targetId = param1.readInt();
        this.casterCellId = param1.readShort();
        if (this.casterCellId < -1 || this.casterCellId > 559) {
            throw new Error('Forbidden value (' + this.casterCellId + ') on element of GameActionFightExchangePositionsMessage.casterCellId.');
        }
        this.targetCellId = param1.readShort();
        if (this.targetCellId < -1 || this.targetCellId > 559) {
            throw new Error('Forbidden value (' + this.targetCellId + ') on element of GameActionFightExchangePositionsMessage.targetCellId.');
        }

    }
}

export = GameActionFightExchangePositionsMessage;
