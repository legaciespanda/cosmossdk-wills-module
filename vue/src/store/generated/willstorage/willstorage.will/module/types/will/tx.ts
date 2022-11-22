/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "willstorage.will";

export interface MsgCreateWills {
  creator: string;
  testatorname: string;
  testatorid: string;
  beneficiaries: string;
  assets: string;
  executorname: string;
  executorid: string;
  datecreated: string;
  timecreated: string;
  dateexecuted: string;
  timeexecuted: string;
  status: string;
}

export interface MsgCreateWillsResponse {}

const baseMsgCreateWills: object = {
  creator: "",
  testatorname: "",
  testatorid: "",
  beneficiaries: "",
  assets: "",
  executorname: "",
  executorid: "",
  datecreated: "",
  timecreated: "",
  dateexecuted: "",
  timeexecuted: "",
  status: "",
};

export const MsgCreateWills = {
  encode(message: MsgCreateWills, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.testatorname !== "") {
      writer.uint32(18).string(message.testatorname);
    }
    if (message.testatorid !== "") {
      writer.uint32(26).string(message.testatorid);
    }
    if (message.beneficiaries !== "") {
      writer.uint32(34).string(message.beneficiaries);
    }
    if (message.assets !== "") {
      writer.uint32(42).string(message.assets);
    }
    if (message.executorname !== "") {
      writer.uint32(50).string(message.executorname);
    }
    if (message.executorid !== "") {
      writer.uint32(58).string(message.executorid);
    }
    if (message.datecreated !== "") {
      writer.uint32(66).string(message.datecreated);
    }
    if (message.timecreated !== "") {
      writer.uint32(74).string(message.timecreated);
    }
    if (message.dateexecuted !== "") {
      writer.uint32(82).string(message.dateexecuted);
    }
    if (message.timeexecuted !== "") {
      writer.uint32(90).string(message.timeexecuted);
    }
    if (message.status !== "") {
      writer.uint32(98).string(message.status);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateWills {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateWills } as MsgCreateWills;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.testatorname = reader.string();
          break;
        case 3:
          message.testatorid = reader.string();
          break;
        case 4:
          message.beneficiaries = reader.string();
          break;
        case 5:
          message.assets = reader.string();
          break;
        case 6:
          message.executorname = reader.string();
          break;
        case 7:
          message.executorid = reader.string();
          break;
        case 8:
          message.datecreated = reader.string();
          break;
        case 9:
          message.timecreated = reader.string();
          break;
        case 10:
          message.dateexecuted = reader.string();
          break;
        case 11:
          message.timeexecuted = reader.string();
          break;
        case 12:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateWills {
    const message = { ...baseMsgCreateWills } as MsgCreateWills;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.testatorname !== undefined && object.testatorname !== null) {
      message.testatorname = String(object.testatorname);
    } else {
      message.testatorname = "";
    }
    if (object.testatorid !== undefined && object.testatorid !== null) {
      message.testatorid = String(object.testatorid);
    } else {
      message.testatorid = "";
    }
    if (object.beneficiaries !== undefined && object.beneficiaries !== null) {
      message.beneficiaries = String(object.beneficiaries);
    } else {
      message.beneficiaries = "";
    }
    if (object.assets !== undefined && object.assets !== null) {
      message.assets = String(object.assets);
    } else {
      message.assets = "";
    }
    if (object.executorname !== undefined && object.executorname !== null) {
      message.executorname = String(object.executorname);
    } else {
      message.executorname = "";
    }
    if (object.executorid !== undefined && object.executorid !== null) {
      message.executorid = String(object.executorid);
    } else {
      message.executorid = "";
    }
    if (object.datecreated !== undefined && object.datecreated !== null) {
      message.datecreated = String(object.datecreated);
    } else {
      message.datecreated = "";
    }
    if (object.timecreated !== undefined && object.timecreated !== null) {
      message.timecreated = String(object.timecreated);
    } else {
      message.timecreated = "";
    }
    if (object.dateexecuted !== undefined && object.dateexecuted !== null) {
      message.dateexecuted = String(object.dateexecuted);
    } else {
      message.dateexecuted = "";
    }
    if (object.timeexecuted !== undefined && object.timeexecuted !== null) {
      message.timeexecuted = String(object.timeexecuted);
    } else {
      message.timeexecuted = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    return message;
  },

  toJSON(message: MsgCreateWills): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.testatorname !== undefined &&
      (obj.testatorname = message.testatorname);
    message.testatorid !== undefined && (obj.testatorid = message.testatorid);
    message.beneficiaries !== undefined &&
      (obj.beneficiaries = message.beneficiaries);
    message.assets !== undefined && (obj.assets = message.assets);
    message.executorname !== undefined &&
      (obj.executorname = message.executorname);
    message.executorid !== undefined && (obj.executorid = message.executorid);
    message.datecreated !== undefined &&
      (obj.datecreated = message.datecreated);
    message.timecreated !== undefined &&
      (obj.timecreated = message.timecreated);
    message.dateexecuted !== undefined &&
      (obj.dateexecuted = message.dateexecuted);
    message.timeexecuted !== undefined &&
      (obj.timeexecuted = message.timeexecuted);
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateWills>): MsgCreateWills {
    const message = { ...baseMsgCreateWills } as MsgCreateWills;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.testatorname !== undefined && object.testatorname !== null) {
      message.testatorname = object.testatorname;
    } else {
      message.testatorname = "";
    }
    if (object.testatorid !== undefined && object.testatorid !== null) {
      message.testatorid = object.testatorid;
    } else {
      message.testatorid = "";
    }
    if (object.beneficiaries !== undefined && object.beneficiaries !== null) {
      message.beneficiaries = object.beneficiaries;
    } else {
      message.beneficiaries = "";
    }
    if (object.assets !== undefined && object.assets !== null) {
      message.assets = object.assets;
    } else {
      message.assets = "";
    }
    if (object.executorname !== undefined && object.executorname !== null) {
      message.executorname = object.executorname;
    } else {
      message.executorname = "";
    }
    if (object.executorid !== undefined && object.executorid !== null) {
      message.executorid = object.executorid;
    } else {
      message.executorid = "";
    }
    if (object.datecreated !== undefined && object.datecreated !== null) {
      message.datecreated = object.datecreated;
    } else {
      message.datecreated = "";
    }
    if (object.timecreated !== undefined && object.timecreated !== null) {
      message.timecreated = object.timecreated;
    } else {
      message.timecreated = "";
    }
    if (object.dateexecuted !== undefined && object.dateexecuted !== null) {
      message.dateexecuted = object.dateexecuted;
    } else {
      message.dateexecuted = "";
    }
    if (object.timeexecuted !== undefined && object.timeexecuted !== null) {
      message.timeexecuted = object.timeexecuted;
    } else {
      message.timeexecuted = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    return message;
  },
};

const baseMsgCreateWillsResponse: object = {};

export const MsgCreateWillsResponse = {
  encode(_: MsgCreateWillsResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateWillsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateWillsResponse } as MsgCreateWillsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateWillsResponse {
    const message = { ...baseMsgCreateWillsResponse } as MsgCreateWillsResponse;
    return message;
  },

  toJSON(_: MsgCreateWillsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateWillsResponse>): MsgCreateWillsResponse {
    const message = { ...baseMsgCreateWillsResponse } as MsgCreateWillsResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateWills(request: MsgCreateWills): Promise<MsgCreateWillsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateWills(request: MsgCreateWills): Promise<MsgCreateWillsResponse> {
    const data = MsgCreateWills.encode(request).finish();
    const promise = this.rpc.request(
      "willstorage.will.Msg",
      "CreateWills",
      data
    );
    return promise.then((data) =>
      MsgCreateWillsResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
