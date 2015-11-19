/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import GuildEmblem = require('../../../types/game/guild/guild-emblem');

class AllianceCreationValidMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6393;

    allianceName: string;
    allianceTag: string;
    allianceEmblem: GuildEmblem;

    constructor() {
        this.allianceName = '';
        this.allianceTag = '';
        this.allianceEmblem = new GuildEmblem();
        super();
    }

    public getMessageId(): number {
        return AllianceCreationValidMessage.ID;
    }

    public reset(): void {
        this.allianceName = '';
        this.allianceTag = '';
        this.allianceEmblem = new GuildEmblem();
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
        this.serializeAs_AllianceCreationValidMessage(param1);
    }

    public serializeAs_AllianceCreationValidMessage(param1: ICustomDataOutput): void {
        param1.writeUTF(this.allianceName);
        param1.writeUTF(this.allianceTag);
        this.allianceEmblem.serializeAs_GuildEmblem(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AllianceCreationValidMessage(param1);
    }

    public deserializeAs_AllianceCreationValidMessage(param1: ICustomDataInput): void {
        this.allianceName = param1.readUTF();
        this.allianceTag = param1.readUTF();
        this.allianceEmblem = new GuildEmblem();
        this.allianceEmblem.deserialize(param1);

    }
}

export = AllianceCreationValidMessage;
