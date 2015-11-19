/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class IdolSelectRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6587;

    idolId: number;
    activate: boolean;
    party: boolean;

    constructor() {
        this.idolId = 0;
        this.activate = false;
        this.party = false;
        super();
    }

    public getMessageId(): number {
        return IdolSelectRequestMessage.ID;
    }

    public reset(): void {
        this.idolId = 0;
        this.activate = false;
        this.party = false;
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
        this.serializeAs_IdolSelectRequestMessage(param1);
    }

    public serializeAs_IdolSelectRequestMessage(param1: ICustomDataOutput): void {
        var _loc2_: number = 0;
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.activate);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.party);
        param1.writeByte(_loc2_);
        if (this.idolId < 0) {
            throw new Error('Forbidden value (' + this.idolId + ') on element idolId.');
        }
        param1.writeVarShort(this.idolId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_IdolSelectRequestMessage(param1);
    }

    public deserializeAs_IdolSelectRequestMessage(param1: ICustomDataInput): void {
        var _loc2_: number = param1.readByte();
        this.activate = BooleanByteWrapper.getFlag(_loc2_, 0);
        this.party = BooleanByteWrapper.getFlag(_loc2_, 1);
        this.idolId = param1.readVarUhShort();
        if (this.idolId < 0) {
            throw new Error('Forbidden value (' + this.idolId + ') on element of IdolSelectRequestMessage.idolId.');
        }

    }
}

export = IdolSelectRequestMessage;
