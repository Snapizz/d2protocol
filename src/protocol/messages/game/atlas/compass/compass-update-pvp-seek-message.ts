/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import CompassUpdateMessage = require('./compass-update-message');
import MapCoordinates = require('../../../../types/game/context/map-coordinates');

class CompassUpdatePvpSeekMessage extends CompassUpdateMessage {
    public static ID: number = 6013;

    memberId: number;
    memberName: string;

    constructor() {
        this.memberId = 0;
        this.memberName = '';
        super();
    }

    public getMessageId(): number {
        return CompassUpdatePvpSeekMessage.ID;
    }

    public reset(): void {
        this.memberId = 0;
        this.memberName = '';
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
        this.serializeAs_CompassUpdatePvpSeekMessage(param1);
    }

    public serializeAs_CompassUpdatePvpSeekMessage(param1: ICustomDataOutput): void {
        super.serializeAs_CompassUpdateMessage(param1);
        if (this.memberId < 0) {
            throw new Error('Forbidden value (' + this.memberId + ') on element memberId.');
        }
        param1.writeVarInt(this.memberId);
        param1.writeUTF(this.memberName);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_CompassUpdatePvpSeekMessage(param1);
    }

    public deserializeAs_CompassUpdatePvpSeekMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.memberId = param1.readVarUhInt();
        if (this.memberId < 0) {
            throw new Error('Forbidden value (' + this.memberId + ') on element of CompassUpdatePvpSeekMessage.memberId.');
        }
        this.memberName = param1.readUTF();

    }
}

export = CompassUpdatePvpSeekMessage;
