/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import EntityLook = require('../../../types/game/look/entity-look');

class GameContextRefreshEntityLookMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5637;

    id: number;
    look: EntityLook;

    constructor() {
        this.id = 0;
        this.look = new EntityLook();
        super();
    }

    public getMessageId(): number {
        return GameContextRefreshEntityLookMessage.ID;
    }

    public reset(): void {
        this.id = 0;
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
        this.serializeAs_GameContextRefreshEntityLookMessage(param1);
    }

    public serializeAs_GameContextRefreshEntityLookMessage(param1: ICustomDataOutput): void {
        param1.writeInt(this.id);
        this.look.serializeAs_EntityLook(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameContextRefreshEntityLookMessage(param1);
    }

    public deserializeAs_GameContextRefreshEntityLookMessage(param1: ICustomDataInput): void {
        this.id = param1.readInt();
        this.look = new EntityLook();
        this.look.deserialize(param1);

    }
}

export = GameContextRefreshEntityLookMessage;
