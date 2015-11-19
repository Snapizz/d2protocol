/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class NotificationByServerMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6103;

    id: number;
    parameters: string[];
    forceOpen: boolean;

    constructor() {
        this.id = 0;
        this.parameters = [];
        this.forceOpen = false;
        super();
    }

    public getMessageId(): number {
        return NotificationByServerMessage.ID;
    }

    public reset(): void {
        this.id = 0;
        this.parameters = [];
        this.forceOpen = false;
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
        this.serializeAs_NotificationByServerMessage(param1);
    }

    public serializeAs_NotificationByServerMessage(param1: ICustomDataOutput): void {
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element id.');
        }
        param1.writeVarShort(this.id);
        param1.writeShort(this.parameters.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.parameters.length) {
            param1.writeUTF(this.parameters[_loc2_]);
            _loc2_++;
        }
        param1.writeBoolean(this.forceOpen);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_NotificationByServerMessage(param1);
    }

    public deserializeAs_NotificationByServerMessage(param1: ICustomDataInput): void {
        var _loc4_: string = null;
        this.id = param1.readVarUhShort();
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element of NotificationByServerMessage.id.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = param1.readUTF();
            this.parameters.push(_loc4_);
            _loc3_++;
        }
        this.forceOpen = param1.readBoolean();

    }
}

export = NotificationByServerMessage;
