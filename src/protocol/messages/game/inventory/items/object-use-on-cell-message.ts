/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import ObjectUseMessage = require('./object-use-message');

class ObjectUseOnCellMessage extends ObjectUseMessage {
    public static ID: number = 3013;

    cells: number;

    constructor() {
        this.cells = 0;
        super();
    }

    public getMessageId(): number {
        return ObjectUseOnCellMessage.ID;
    }

    public reset(): void {
        this.cells = 0;
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
        this.serializeAs_ObjectUseOnCellMessage(param1);
    }

    public serializeAs_ObjectUseOnCellMessage(param1: ICustomDataOutput): void {
        super.serializeAs_ObjectUseMessage(param1);
        if (this.cells < 0 || this.cells > 559) {
            throw new Error('Forbidden value (' + this.cells + ') on element cells.');
        }
        param1.writeVarShort(this.cells);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ObjectUseOnCellMessage(param1);
    }

    public deserializeAs_ObjectUseOnCellMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.cells = param1.readVarUhShort();
        if (this.cells < 0 || this.cells > 559) {
            throw new Error('Forbidden value (' + this.cells + ') on element of ObjectUseOnCellMessage.cells.');
        }

    }
}

export = ObjectUseOnCellMessage;
