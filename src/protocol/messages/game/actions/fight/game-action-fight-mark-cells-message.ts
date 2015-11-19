/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import AbstractGameActionMessage = require('./../abstract-game-action-message');
import GameActionMark = require('../../../../types/game/actions/fight/game-action-mark');

class GameActionFightMarkCellsMessage extends AbstractGameActionMessage {
    public static ID: number = 5540;

    mark: GameActionMark;

    constructor() {
        this.mark = new GameActionMark();
        super();
    }

    public getMessageId(): number {
        return GameActionFightMarkCellsMessage.ID;
    }

    public reset(): void {
        this.mark = new GameActionMark();
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
        this.serializeAs_GameActionFightMarkCellsMessage(param1);
    }

    public serializeAs_GameActionFightMarkCellsMessage(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractGameActionMessage(param1);
        this.mark.serializeAs_GameActionMark(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameActionFightMarkCellsMessage(param1);
    }

    public deserializeAs_GameActionFightMarkCellsMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.mark = new GameActionMark();
        this.mark.deserialize(param1);

    }
}

export = GameActionFightMarkCellsMessage;
