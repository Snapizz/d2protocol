/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import ActorRestrictionsInformations = require('../../../types/game/character/restriction/actor-restrictions-informations');

class SetCharacterRestrictionsMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 170;

    actorId: number;
    restrictions: ActorRestrictionsInformations;

    constructor() {
        this.actorId = 0;
        this.restrictions = new ActorRestrictionsInformations();
        super();
    }

    public getMessageId(): number {
        return SetCharacterRestrictionsMessage.ID;
    }

    public reset(): void {
        this.actorId = 0;
        this.restrictions = new ActorRestrictionsInformations();
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
        this.serializeAs_SetCharacterRestrictionsMessage(param1);
    }

    public serializeAs_SetCharacterRestrictionsMessage(param1: ICustomDataOutput): void {
        param1.writeInt(this.actorId);
        this.restrictions.serializeAs_ActorRestrictionsInformations(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_SetCharacterRestrictionsMessage(param1);
    }

    public deserializeAs_SetCharacterRestrictionsMessage(param1: ICustomDataInput): void {
        this.actorId = param1.readInt();
        this.restrictions = new ActorRestrictionsInformations();
        this.restrictions.deserialize(param1);

    }
}

export = SetCharacterRestrictionsMessage;
