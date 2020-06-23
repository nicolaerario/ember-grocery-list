import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class ActiveRoute extends Route {
  @service("item-data") items;

  model() {
    let items = this.items;

    return {
      get activeItems() {
        return items.incomplete;
      },
    };
  }
}
