/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import ObtainedItemMessage = require('./obtained-item-message');

class ObtainedItemWithBonusMessage extends ObtainedItemMessage {
    public static ID: number = 6520;

    bonusQuantity: number;

    constructor() {
        this.bonusQuantity = 0;
        super();
    }

    public getMessageId(): number {
        return ObtainedItemWithBonusMessage.ID;
    }

    public reset(): void {
        this.bonusQuantity = 0;
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
        this.serializeAs_ObtainedItemWithBonusMessage(param1);
    }

    public serializeAs_ObtainedItemWithBonusMessage(param1: ICustomDataOutput): void {
        super.serializeAs_ObtainedItemMessage(param1);
        if (this.bonusQuantity < 0) {
            throw new Error('Forbidden value (' + this.bonusQuantity + ') on element bonusQuantity.');
        }
        param1.writeVarInt(this.bonusQuantity);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ObtainedItemWithBonusMessage(param1);
    }

    public deserializeAs_ObtainedItemWithBonusMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.bonusQuantity = param1.readVarUhInt();
        if (this.bonusQuantity < 0) {
            throw new Error('Forbidden value (' + this.bonusQuantity + ') on element of ObtainedItemWithBonusMessage.bonusQuantity.');
        }

    }
}

export = ObtainedItemWithBonusMessage;
