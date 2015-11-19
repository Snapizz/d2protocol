/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../boolean-byte-wrapper');

class ConsoleCommandsListMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6127;

    aliases: string[];
    args: string[];
    descriptions: string[];

    constructor() {
        this.aliases = [];
        this.args = [];
        this.descriptions = [];
        super();
    }

    public getMessageId(): number {
        return ConsoleCommandsListMessage.ID;
    }

    public reset(): void {
        this.aliases = [];
        this.args = [];
        this.descriptions = [];
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
        this.serializeAs_ConsoleCommandsListMessage(param1);
    }

    public serializeAs_ConsoleCommandsListMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.aliases.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.aliases.length) {
            param1.writeUTF(this.aliases[_loc2_]);
            _loc2_++;
        }
        param1.writeShort(this.args.length);
        var _loc3_: number = 0;
        while (_loc3_ < this.args.length) {
            param1.writeUTF(this.args[_loc3_]);
            _loc3_++;
        }
        param1.writeShort(this.descriptions.length);
        var _loc4_: number = 0;
        while (_loc4_ < this.descriptions.length) {
            param1.writeUTF(this.descriptions[_loc4_]);
            _loc4_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ConsoleCommandsListMessage(param1);
    }

    public deserializeAs_ConsoleCommandsListMessage(param1: ICustomDataInput): void {
        var _loc8_: string = null;
        var _loc9_: string = null;
        var _loc10_: string = null;
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc8_ = param1.readUTF();
            this.aliases.push(_loc8_);
            _loc3_++;
        }
        var _loc4_: number = param1.readUnsignedShort();
        var _loc5_: number = 0;
        while (_loc5_ < _loc4_) {
        _loc9_ = param1.readUTF();
            this.args.push(_loc9_);
            _loc5_++;
        }
        var _loc6_: number = param1.readUnsignedShort();
        var _loc7_: number = 0;
        while (_loc7_ < _loc6_) {
        _loc10_ = param1.readUTF();
            this.descriptions.push(_loc10_);
            _loc7_++;
        }

    }
}

export = ConsoleCommandsListMessage;
