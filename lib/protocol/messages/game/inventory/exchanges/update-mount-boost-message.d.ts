/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import UpdateMountBoost = require('../../../../types/game/mount/update-mount-boost');
declare class UpdateMountBoostMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    rideId: number;
    boostToUpdateList: UpdateMountBoost[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_UpdateMountBoostMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_UpdateMountBoostMessage(param1: ICustomDataInput): void;
}
export = UpdateMountBoostMessage;
