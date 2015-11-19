/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class MapFightCountMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 210;

    fightCount: number;

    constructor() {
        this.fightCount = 0;
        super();
    }

    public getMessageId(): number {
        return MapFightCountMessage.ID;
    }

    public reset(): void {
        this.fightCount = 0;
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
        this.serializeAs_MapFightCountMessage(param1);
    }

    public serializeAs_MapFightCountMessage(param1: ICustomDataOutput): void {
        if (this.fightCount < 0) {
            throw new Error('Forbidden value (' + this.fightCount + ') on element fightCount.');
        }
        param1.writeVarShort(this.fightCount);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_MapFightCountMessage(param1);
    }

    public deserializeAs_MapFightCountMessage(param1: ICustomDataInput): void {
        this.fightCount = param1.readVarUhShort();
        if (this.fightCount < 0) {
            throw new Error('Forbidden value (' + this.fightCount + ') on element of MapFightCountMessage.fightCount.');
        }

    }
}

export = MapFightCountMessage;
