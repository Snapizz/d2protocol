/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import BasicNamedAllianceInformations = require('../../../types/game/context/roleplay/basic-named-alliance-informations');

class AllianceInvitedMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6397;

    recruterId: number;
    recruterName: string;
    allianceInfo: BasicNamedAllianceInformations;

    constructor() {
        this.recruterId = 0;
        this.recruterName = '';
        this.allianceInfo = new BasicNamedAllianceInformations();
        super();
    }

    public getMessageId(): number {
        return AllianceInvitedMessage.ID;
    }

    public reset(): void {
        this.recruterId = 0;
        this.recruterName = '';
        this.allianceInfo = new BasicNamedAllianceInformations();
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
        this.serializeAs_AllianceInvitedMessage(param1);
    }

    public serializeAs_AllianceInvitedMessage(param1: ICustomDataOutput): void {
        if (this.recruterId < 0) {
            throw new Error('Forbidden value (' + this.recruterId + ') on element recruterId.');
        }
        param1.writeVarInt(this.recruterId);
        param1.writeUTF(this.recruterName);
        this.allianceInfo.serializeAs_BasicNamedAllianceInformations(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AllianceInvitedMessage(param1);
    }

    public deserializeAs_AllianceInvitedMessage(param1: ICustomDataInput): void {
        this.recruterId = param1.readVarUhInt();
        if (this.recruterId < 0) {
            throw new Error('Forbidden value (' + this.recruterId + ') on element of AllianceInvitedMessage.recruterId.');
        }
        this.recruterName = param1.readUTF();
        this.allianceInfo = new BasicNamedAllianceInformations();
        this.allianceInfo.deserialize(param1);

    }
}

export = AllianceInvitedMessage;
