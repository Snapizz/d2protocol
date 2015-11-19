/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import FightCommonInformations = require('../../../../../types/game/context/fight/fight-common-informations');

class GameRolePlayShowChallengeMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 301;

    commonsInfos: FightCommonInformations;

    constructor() {
        this.commonsInfos = new FightCommonInformations();
        super();
    }

    public getMessageId(): number {
        return GameRolePlayShowChallengeMessage.ID;
    }

    public reset(): void {
        this.commonsInfos = new FightCommonInformations();
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
        this.serializeAs_GameRolePlayShowChallengeMessage(param1);
    }

    public serializeAs_GameRolePlayShowChallengeMessage(param1: ICustomDataOutput): void {
        this.commonsInfos.serializeAs_FightCommonInformations(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameRolePlayShowChallengeMessage(param1);
    }

    public deserializeAs_GameRolePlayShowChallengeMessage(param1: ICustomDataInput): void {
        this.commonsInfos = new FightCommonInformations();
        this.commonsInfos.deserialize(param1);

    }
}

export = GameRolePlayShowChallengeMessage;
