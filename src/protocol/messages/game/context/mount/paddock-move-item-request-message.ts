/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class PaddockMoveItemRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6052;

    oldCellId: number;
    newCellId: number;

    constructor() {
        this.oldCellId = 0;
        this.newCellId = 0;
        super();
    }

    public getMessageId(): number {
        return PaddockMoveItemRequestMessage.ID;
    }

    public reset(): void {
        this.oldCellId = 0;
        this.newCellId = 0;
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
        this.serializeAs_PaddockMoveItemRequestMessage(param1);
    }

    public serializeAs_PaddockMoveItemRequestMessage(param1: ICustomDataOutput): void {
        if (this.oldCellId < 0 || this.oldCellId > 559) {
            throw new Error('Forbidden value (' + this.oldCellId + ') on element oldCellId.');
        }
        param1.writeVarShort(this.oldCellId);
        if (this.newCellId < 0 || this.newCellId > 559) {
            throw new Error('Forbidden value (' + this.newCellId + ') on element newCellId.');
        }
        param1.writeVarShort(this.newCellId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PaddockMoveItemRequestMessage(param1);
    }

    public deserializeAs_PaddockMoveItemRequestMessage(param1: ICustomDataInput): void {
        this.oldCellId = param1.readVarUhShort();
        if (this.oldCellId < 0 || this.oldCellId > 559) {
            throw new Error('Forbidden value (' + this.oldCellId + ') on element of PaddockMoveItemRequestMessage.oldCellId.');
        }
        this.newCellId = param1.readVarUhShort();
        if (this.newCellId < 0 || this.newCellId > 559) {
            throw new Error('Forbidden value (' + this.newCellId + ') on element of PaddockMoveItemRequestMessage.newCellId.');
        }

    }
}

export = PaddockMoveItemRequestMessage;
