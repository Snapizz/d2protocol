/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import AbstractGameActionMessage = require('./../abstract-game-action-message');

class AbstractGameActionFightTargetedAbilityMessage extends AbstractGameActionMessage {
    public static ID: number = 6118;

    targetId: number;
    destinationCellId: number;
    critical: number;
    silentCast: boolean;

    constructor() {
        this.targetId = 0;
        this.destinationCellId = 0;
        this.critical = 1;
        this.silentCast = false;
        super();
    }

    public getMessageId(): number {
        return AbstractGameActionFightTargetedAbilityMessage.ID;
    }

    public reset(): void {
        this.targetId = 0;
        this.destinationCellId = 0;
        this.critical = 1;
        this.silentCast = false;
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
        this.serializeAs_AbstractGameActionFightTargetedAbilityMessage(param1);
    }

    public serializeAs_AbstractGameActionFightTargetedAbilityMessage(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractGameActionMessage(param1);
        param1.writeInt(this.targetId);
        if (this.destinationCellId < -1 || this.destinationCellId > 559) {
            throw new Error('Forbidden value (' + this.destinationCellId + ') on element destinationCellId.');
        }
        param1.writeShort(this.destinationCellId);
        param1.writeByte(this.critical);
        param1.writeBoolean(this.silentCast);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AbstractGameActionFightTargetedAbilityMessage(param1);
    }

    public deserializeAs_AbstractGameActionFightTargetedAbilityMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.targetId = param1.readInt();
        this.destinationCellId = param1.readShort();
        if (this.destinationCellId < -1 || this.destinationCellId > 559) {
            throw new Error('Forbidden value (' + this.destinationCellId + ') on element of AbstractGameActionFightTargetedAbilityMessage.destinationCellId.');
        }
        this.critical = param1.readByte();
        if (this.critical < 0) {
            throw new Error('Forbidden value (' + this.critical + ') on element of AbstractGameActionFightTargetedAbilityMessage.critical.');
        }
        this.silentCast = param1.readBoolean();

    }
}

export = AbstractGameActionFightTargetedAbilityMessage;
