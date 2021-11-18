import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ItemStockService {
  url = "http://56c0ac127c37.ngrok.io";

  itemList = [];

  constructor(private http: HttpClient) {
    this.getItemsfromDatabase();
  }

  addItemInDatabase(itemInfo: string) {
    this.http.get(this.url + "/additem?item=" + itemInfo).subscribe();
  }

  getItemsfromDatabase() {
    this.http.get(this.url + "/getitems").subscribe((data) => {
      for (let i = 0; i < data["data"].length; i++) {
        this.itemList.push(data["data"][i]);
      }
    });
  }
}
