/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import EntityLook = require('../../../types/game/look/entity-look');

class ContactLookMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5934;

    requestId: number;
    playerName: string;
    playerId: number;
    look: EntityLook;

    constructor() {
        this.requestId = 0;
        this.playerName = '';
        this.playerId = 0;
        this.look = new EntityLook();
        super();
    }

    public getMessageId(): number {
        return ContactLookMessage.ID;
    }

    public reset(): void {
        this.requestId = 0;
        this.playerName = '';
        this.playerId = 0;
        this.look = new EntityLook();
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
        this.serializeAs_ContactLookMessage(param1);
    }

    public serializeAs_ContactLookMessage(param1: ICustomDataOutput): void {
        if (this.requestId < 0) {
            throw new Error('Forbidden value (' + this.requestId + ') on element requestId.');
        }
        param1.writeVarInt(this.requestId);
        param1.writeUTF(this.playerName);
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element playerId.');
        }
        param1.writeVarInt(this.playerId);
        this.look.serializeAs_EntityLook(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ContactLookMessage(param1);
    }

    public deserializeAs_ContactLookMessage(param1: ICustomDataInput): void {
        this.requestId = param1.readVarUhInt();
        if (this.requestId < 0) {
            throw new Error('Forbidden value (' + this.requestId + ') on element of ContactLookMessage.requestId.');
        }
        this.playerName = param1.readUTF();
        this.playerId = param1.readVarUhInt();
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element of ContactLookMessage.playerId.');
        }
        this.look = new EntityLook();
        this.look.deserialize(param1);

    }
}

export = ContactLookMessage;
