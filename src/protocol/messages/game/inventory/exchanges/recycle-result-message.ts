/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class RecycleResultMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6601;

    nuggetsForPrism: number;
    nuggetsForPlayer: number;

    constructor() {
        this.nuggetsForPrism = 0;
        this.nuggetsForPlayer = 0;
        super();
    }

    public getMessageId(): number {
        return RecycleResultMessage.ID;
    }

    public reset(): void {
        this.nuggetsForPrism = 0;
        this.nuggetsForPlayer = 0;
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
        this.serializeAs_RecycleResultMessage(param1);
    }

    public serializeAs_RecycleResultMessage(param1: ICustomDataOutput): void {
        if (this.nuggetsForPrism < 0) {
            throw new Error('Forbidden value (' + this.nuggetsForPrism + ') on element nuggetsForPrism.');
        }
        param1.writeVarInt(this.nuggetsForPrism);
        if (this.nuggetsForPlayer < 0) {
            throw new Error('Forbidden value (' + this.nuggetsForPlayer + ') on element nuggetsForPlayer.');
        }
        param1.writeVarInt(this.nuggetsForPlayer);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_RecycleResultMessage(param1);
    }

    public deserializeAs_RecycleResultMessage(param1: ICustomDataInput): void {
        this.nuggetsForPrism = param1.readVarUhInt();
        if (this.nuggetsForPrism < 0) {
            throw new Error('Forbidden value (' + this.nuggetsForPrism + ') on element of RecycleResultMessage.nuggetsForPrism.');
        }
        this.nuggetsForPlayer = param1.readVarUhInt();
        if (this.nuggetsForPlayer < 0) {
            throw new Error('Forbidden value (' + this.nuggetsForPlayer + ') on element of RecycleResultMessage.nuggetsForPlayer.');
        }

    }
}

export = RecycleResultMessage;
