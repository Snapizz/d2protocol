/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import AbstractGameActionMessage = require('./../abstract-game-action-message');

class GameActionFightSlideMessage extends AbstractGameActionMessage {
    public static ID: number = 5525;

    targetId: number;
    startCellId: number;
    endCellId: number;

    constructor() {
        this.targetId = 0;
        this.startCellId = 0;
        this.endCellId = 0;
        super();
    }

    public getMessageId(): number {
        return GameActionFightSlideMessage.ID;
    }

    public reset(): void {
        this.targetId = 0;
        this.startCellId = 0;
        this.endCellId = 0;
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
        this.serializeAs_GameActionFightSlideMessage(param1);
    }

    public serializeAs_GameActionFightSlideMessage(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractGameActionMessage(param1);
        param1.writeInt(this.targetId);
        if (this.startCellId < -1 || this.startCellId > 559) {
            throw new Error('Forbidden value (' + this.startCellId + ') on element startCellId.');
        }
        param1.writeShort(this.startCellId);
        if (this.endCellId < -1 || this.endCellId > 559) {
            throw new Error('Forbidden value (' + this.endCellId + ') on element endCellId.');
        }
        param1.writeShort(this.endCellId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameActionFightSlideMessage(param1);
    }

    public deserializeAs_GameActionFightSlideMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.targetId = param1.readInt();
        this.startCellId = param1.readShort();
        if (this.startCellId < -1 || this.startCellId > 559) {
            throw new Error('Forbidden value (' + this.startCellId + ') on element of GameActionFightSlideMessage.startCellId.');
        }
        this.endCellId = param1.readShort();
        if (this.endCellId < -1 || this.endCellId > 559) {
            throw new Error('Forbidden value (' + this.endCellId + ') on element of GameActionFightSlideMessage.endCellId.');
        }

    }
}

export = GameActionFightSlideMessage;
