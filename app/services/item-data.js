import Service from "@ember/service";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class ItemDataService extends Service {
  @tracked items = [];
  get all() {
    return this.items;
  }

  get incomplete() {
    return this.items.filter((item) => {
      return item.isCompleted === false;
    });
  }

  get itemCountIsOne() {
    return this.incomplete.length === 1;
  }

  get completed() {
    return this.items.filter((item) => item.isCompleted);
  }

  @action
  add(text) {
    let newItem = new Item(text);

    this.items = [...this.items, newItem];
  }

  @action
  clearCompleted() {
    this.items = this.incomplete;
  }

  @action
  toggleCompletion(item) {
    item.isCompleted = !item.isCompleted;
  }
}
class Item {
  @tracked text = "";
  @tracked isCompleted = false;

  constructor(text) {
    this.text = text;
  }
}
