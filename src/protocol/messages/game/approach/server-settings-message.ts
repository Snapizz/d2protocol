/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class ServerSettingsMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6340;

    lang: string;
    community: number;
    gameType: number;

    constructor() {
        this.lang = '';
        this.community = 0;
        this.gameType = -1;
        super();
    }

    public getMessageId(): number {
        return ServerSettingsMessage.ID;
    }

    public reset(): void {
        this.lang = '';
        this.community = 0;
        this.gameType = -1;
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
        this.serializeAs_ServerSettingsMessage(param1);
    }

    public serializeAs_ServerSettingsMessage(param1: ICustomDataOutput): void {
        param1.writeUTF(this.lang);
        if (this.community < 0) {
            throw new Error('Forbidden value (' + this.community + ') on element community.');
        }
        param1.writeByte(this.community);
        param1.writeByte(this.gameType);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ServerSettingsMessage(param1);
    }

    public deserializeAs_ServerSettingsMessage(param1: ICustomDataInput): void {
        this.lang = param1.readUTF();
        this.community = param1.readByte();
        if (this.community < 0) {
            throw new Error('Forbidden value (' + this.community + ') on element of ServerSettingsMessage.community.');
        }
        this.gameType = param1.readByte();

    }
}

export = ServerSettingsMessage;
