import Component from "@glimmer/component";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class HeaderComponent extends Component {
  @service("item-data") items;
  @action
  onKeyDown({ target, key }) {
    let text = target.value.trim();
    let hasValue = Boolean(text);

    if (key === "Enter" && hasValue) {
      this.items.add(text);

      target.value = "";
    }
  }
}
