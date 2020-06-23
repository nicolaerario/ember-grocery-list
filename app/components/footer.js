import Component from "@glimmer/component";
import { inject as service } from "@ember/service";

export default class FooterComponent extends Component {
  @service("item-data") items;
}
