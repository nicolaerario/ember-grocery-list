import Component from "@glimmer/component";
import { inject as service } from "@ember/service";

export default class ItemComponent extends Component {
  @service("item-data") items;
}
