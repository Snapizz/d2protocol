/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import AllianceInformations = require('../../../types/game/context/roleplay/alliance-informations');

class AllianceJoinedMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6402;

    allianceInfo: AllianceInformations;
    enabled: boolean;

    constructor() {
        this.allianceInfo = new AllianceInformations();
        this.enabled = false;
        super();
    }

    public getMessageId(): number {
        return AllianceJoinedMessage.ID;
    }

    public reset(): void {
        this.allianceInfo = new AllianceInformations();
        this.enabled = false;
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
        this.serializeAs_AllianceJoinedMessage(param1);
    }

    public serializeAs_AllianceJoinedMessage(param1: ICustomDataOutput): void {
        this.allianceInfo.serializeAs_AllianceInformations(param1);
        param1.writeBoolean(this.enabled);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AllianceJoinedMessage(param1);
    }

    public deserializeAs_AllianceJoinedMessage(param1: ICustomDataInput): void {
        this.allianceInfo = new AllianceInformations();
        this.allianceInfo.deserialize(param1);
        this.enabled = param1.readBoolean();

    }
}

export = AllianceJoinedMessage;
