/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import GameFightResumeMessage = require('./game-fight-resume-message');
import GameFightResumeSlaveInfo = require('../../../../types/game/context/fight/game-fight-resume-slave-info');
declare class GameFightResumeWithSlavesMessage extends GameFightResumeMessage {
    static ID: number;
    slavesInfo: GameFightResumeSlaveInfo[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameFightResumeWithSlavesMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameFightResumeWithSlavesMessage(param1: ICustomDataInput): void;
}
export = GameFightResumeWithSlavesMessage;
