import { FestivalServerResp, Festival } from "../../models/festival";

export class FestivalApiRepo {
  url: string;
  actualPage: number;
  constructor() {
    this.url = "https://final-project-festivapp.onrender.com/festivals";
    this.actualPage = 1;
  }
  async loadFestivals(pageChange: number): Promise<FestivalServerResp> {
    this.actualPage = this.actualPage + pageChange;
    if (this.actualPage === 0 || pageChange === 0) this.actualPage = 1;
    const pageString = this.actualPage.toString();
    const urlPage = this.url + "/?page=" + pageString;
    const resp = await fetch(urlPage);
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + "/" + resp.statusText);
    const data = await resp.json();
    return data;
  }
  async loadByMusic(
    filter: Festival["musicType"]
  ): Promise<FestivalServerResp> {
    const url = this.url + "/musicType/" + filter;
    const resp = await fetch(url);

    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + resp.statusText);

    const data = await resp.json();
    return data;
  }

  async loadOneFestival(id: Festival["id"]): Promise<FestivalServerResp> {
    const url = this.url + "/" + id;
    const resp = await fetch(url);
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + "/ " + resp.statusText);
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
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
  }
}
