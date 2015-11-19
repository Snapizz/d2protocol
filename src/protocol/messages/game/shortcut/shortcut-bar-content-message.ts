/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import Shortcut = require('../../../types/game/shortcut/shortcut');
import ProtocolTypeManager = require('../../../protocol-type-manager');

class ShortcutBarContentMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6231;

    barType: number;
    shortcuts: Shortcut[];

    constructor() {
        this.barType = 0;
        this.shortcuts = [];
        super();
    }

    public getMessageId(): number {
        return ShortcutBarContentMessage.ID;
    }

    public reset(): void {
        this.barType = 0;
        this.shortcuts = [];
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
        this.serializeAs_ShortcutBarContentMessage(param1);
    }

    public serializeAs_ShortcutBarContentMessage(param1: ICustomDataOutput): void {
        param1.writeByte(this.barType);
        param1.writeShort(this.shortcuts.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.shortcuts.length) {
            param1.writeShort((this.shortcuts[_loc2_]).getTypeId());
            (this.shortcuts[_loc2_]).serialize(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ShortcutBarContentMessage(param1);
    }

    public deserializeAs_ShortcutBarContentMessage(param1: ICustomDataInput): void {
        var _loc4_: number = 0;
        var _loc5_: Shortcut = null;
        this.barType = param1.readByte();
        if (this.barType < 0) {
            throw new Error('Forbidden value (' + this.barType + ') on element of ShortcutBarContentMessage.barType.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = param1.readUnsignedShort();
            _loc5_ = <Shortcut>ProtocolTypeManager.getInstance(Shortcut, _loc4_);
            _loc5_.deserialize(param1);
            this.shortcuts.push(_loc5_);
            _loc3_++;
        }

    }
}

export = ShortcutBarContentMessage;
