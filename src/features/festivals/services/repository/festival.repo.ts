import { FestivalServerResp, Festival } from "../../models/festival";

export class FestivalApiRepo {
  url: string;
  constructor() {
    this.url = "http://localhost:5000/festivals";
  }
  async loadFestivals(): Promise<FestivalServerResp> {
    const resp = await fetch(this.url);
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
    const data = await resp.json();
    return data;
  }

  async loadOneFestival(id: Festival["id"]): Promise<FestivalServerResp> {
    const url = this.url + "/" + id;
    const resp = await fetch(url);
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
    const data = await resp.json();

    return data;
  }

  async createFestival(
    festival: Partial<Festival>
  ): Promise<FestivalServerResp> {
    const resp = await fetch(this.url, {
      method: "POST",
      body: JSON.stringify(festival),
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
    const data = await resp.json();
    return data;
  }

  async updateFestival(
    festival: Partial<Festival>
  ): Promise<FestivalServerResp> {
    const url = this.url + "/edit" + festival.id;
    const resp = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(festival),
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
    const data = await resp.json();
    return data;
  }

  async deleteFestival(id: Festival["id"]): Promise<void> {
    const url = this.url + "/" + id;
    const resp = await fetch(url, {
      method: "DELETE",
    });
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
  }
}
