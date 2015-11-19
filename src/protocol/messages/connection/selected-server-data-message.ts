/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../boolean-byte-wrapper');

class SelectedServerDataMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 42;

    serverId: number;
    address: string;
    port: number;
    canCreateNewCharacter: boolean;
    ticket: number[];

    constructor() {
        this.serverId = 0;
        this.address = '';
        this.port = 0;
        this.canCreateNewCharacter = false;
        this.ticket = [];
        super();
    }

    public getMessageId(): number {
        return SelectedServerDataMessage.ID;
    }

    public reset(): void {
        this.serverId = 0;
        this.address = '';
        this.port = 0;
        this.canCreateNewCharacter = false;
        this.ticket = [];
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
        this.serializeAs_SelectedServerDataMessage(param1);
    }

    public serializeAs_SelectedServerDataMessage(param1: ICustomDataOutput): void {
        if (this.serverId < 0) {
            throw new Error('Forbidden value (' + this.serverId + ') on element serverId.');
        }
        param1.writeVarShort(this.serverId);
        param1.writeUTF(this.address);
        if (this.port < 0 || this.port > 65535) {
            throw new Error('Forbidden value (' + this.port + ') on element port.');
        }
        param1.writeShort(this.port);
        param1.writeBoolean(this.canCreateNewCharacter);
        param1.writeVarInt(this.ticket.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.ticket.length) {
            param1.writeByte(this.ticket[_loc2_]);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_SelectedServerDataMessage(param1);
    }

    public deserializeAs_SelectedServerDataMessage(param1: ICustomDataInput): void {
        var _loc4_: any = 0;
        this.serverId = param1.readVarUhShort();
        if (this.serverId < 0) {
            throw new Error('Forbidden value (' + this.serverId + ') on element of SelectedServerDataMessage.serverId.');
        }
        this.address = param1.readUTF();
        this.port = param1.readUnsignedShort();
        if (this.port < 0 || this.port > 65535) {
            throw new Error('Forbidden value (' + this.port + ') on element of SelectedServerDataMessage.port.');
        }
        this.canCreateNewCharacter = param1.readBoolean();
        var _loc2_: number = param1.readVarInt();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = param1.readByte();
            this.ticket.push(_loc4_);
            _loc3_++;
        }

    }
}

export = SelectedServerDataMessage;
