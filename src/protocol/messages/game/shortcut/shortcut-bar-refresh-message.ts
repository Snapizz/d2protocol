/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import Shortcut = require('../../../types/game/shortcut/shortcut');
import ProtocolTypeManager = require('../../../protocol-type-manager');

class ShortcutBarRefreshMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6229;

    barType: number;
    shortcut: Shortcut;

    constructor() {
        this.barType = 0;
        this.shortcut = new Shortcut();
        super();
    }

    public getMessageId(): number {
        return ShortcutBarRefreshMessage.ID;
    }

    public reset(): void {
        this.barType = 0;
        this.shortcut = new Shortcut();
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
        this.serializeAs_ShortcutBarRefreshMessage(param1);
    }

    public serializeAs_ShortcutBarRefreshMessage(param1: ICustomDataOutput): void {
        param1.writeByte(this.barType);
        param1.writeShort(this.shortcut.getTypeId());
        this.shortcut.serialize(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ShortcutBarRefreshMessage(param1);
    }

    public deserializeAs_ShortcutBarRefreshMessage(param1: ICustomDataInput): void {
        this.barType = param1.readByte();
        if (this.barType < 0) {
            throw new Error('Forbidden value (' + this.barType + ') on element of ShortcutBarRefreshMessage.barType.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        this.shortcut = <Shortcut>ProtocolTypeManager.getInstance(Shortcut, _loc2_);
        this.shortcut.deserialize(param1);

    }
}

export = ShortcutBarRefreshMessage;
