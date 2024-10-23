export interface UserUidGetReq {
    uid:           number;
    user_name:     string;
    user_phone:    string;
    user_password: string;
    user_image:    string;
    user_address:  string;
    user_lat:      number;
    user_lng:      number;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toUserUidGetResponse(json: string): UserUidGetReq {
        return JSON.parse(json);
    }

    public static userUidGetResponseToJson(value: UserUidGetReq): string {
        return JSON.stringify(value);
    }
}