import { ProtoUser, ServerResp, User } from "../models/user";

export class UserApiRepo {
  url: string;
  constructor() {
    this.url = "https://final-project-festivapp.onrender.com/users";
  }

  async register(user: ProtoUser): Promise<ServerResp> {
    const resp = await fetch(this.url + "/register", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
    const data = await resp.json();
    return data;
  }

  async login(user: ProtoUser): Promise<ServerResp> {
    const resp = await fetch(this.url + "/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
    const data = await resp.json();
    return data;
  }
}
