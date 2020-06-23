import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class IndexRoute extends Route {
  @service("item-data") items;

  model() {
    let items = this.items;

    return {
      get allItems() {
        return items.all;
      },
    };
  }
}
