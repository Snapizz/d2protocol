/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import ShowCellMessage = require('./show-cell-message');

class ShowCellSpectatorMessage extends ShowCellMessage {
    public static ID: number = 6158;

    playerName: string;

    constructor() {
        this.playerName = '';
        super();
    }

    public getMessageId(): number {
        return ShowCellSpectatorMessage.ID;
    }

    public reset(): void {
        this.playerName = '';
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
        this.serializeAs_ShowCellSpectatorMessage(param1);
    }

    public serializeAs_ShowCellSpectatorMessage(param1: ICustomDataOutput): void {
        super.serializeAs_ShowCellMessage(param1);
        param1.writeUTF(this.playerName);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ShowCellSpectatorMessage(param1);
    }

    public deserializeAs_ShowCellSpectatorMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.playerName = param1.readUTF();

    }
}

export = ShowCellSpectatorMessage;
