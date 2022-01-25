import { LightningElement,track } from "lwc";

export default class App extends LightningElement {
  title = "Welcome to Lightning Web Components!";
@track textColorClass;
@track checked;
@track Zone;
  showFeatures = true;

handle_Click (event){
  this.Zone='toBack';
this.textColorClass = 'yellow';
console.log(this.textColorClass);
this.checked="checked";

}
rightZone(event){
this.Zone='toFront';
console.log(this.Zone);
}
  /**
   * Getter for the features property
   */
  get features() {
    return [
      {
        label: "Learn in the browser.",
        icon: "utility:edit",
      },
      {
        label: "View changes to code instantly with Live Compilation.",
        icon: "utility:refresh",
      },
      {
        label: "Style your components with SLDS.",
        icon: "utility:brush",
      },
    ];
  }
}
