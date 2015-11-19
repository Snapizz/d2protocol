/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class SpellForgetUIMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5565;

    open: boolean;

    constructor() {
        this.open = false;
        super();
    }

    public getMessageId(): number {
        return SpellForgetUIMessage.ID;
    }

    public reset(): void {
        this.open = false;
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
        this.serializeAs_SpellForgetUIMessage(param1);
    }

    public serializeAs_SpellForgetUIMessage(param1: ICustomDataOutput): void {
        param1.writeBoolean(this.open);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_SpellForgetUIMessage(param1);
    }

    public deserializeAs_SpellForgetUIMessage(param1: ICustomDataInput): void {
        this.open = param1.readBoolean();

    }
}

export = SpellForgetUIMessage;
