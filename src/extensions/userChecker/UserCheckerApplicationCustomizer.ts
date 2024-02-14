import { Log } from "@microsoft/sp-core-library";
import { BaseApplicationCustomizer } from "@microsoft/sp-application-base";
import { Dialog } from "@microsoft/sp-dialog";
import { sp } from "@pnp/sp/presets/all";
import * as strings from "UserCheckerApplicationCustomizerStrings";

const LOG_SOURCE: string = "UserCheckerApplicationCustomizer";

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IUserCheckerApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class UserCheckerApplicationCustomizer extends BaseApplicationCustomizer<IUserCheckerApplicationCustomizerProperties> {
  // public onInit(): Promise<void> {
  //   Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

  //   debugger;
  //   sp.web.currentUser
  //     .get()
  //     .then((res) => {
  //       debugger;
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   let message: string = this.properties.testMessage;
  //   if (!message) {
  //     message = "(No properties were provided.)";
  //   }

  //   Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`);

  //   return Promise.resolve();
  // }
  public onInit(): Promise<void> {
    return super.onInit().then(() => {
      sp.setup({
        spfxContext: this.context,
      });

      this.getListItems();
      //  return Promise.resolve();
    });
  }
  async getListItems() {
    await sp.web.currentUser
      .get()
      .then(async (res) => {
        console.log(res);
        await sp.web.lists
          .getByTitle("ExternalUser")
          .items.get()
          .then((result) => {
            console.log(result);
          });
      })
      .catch((err) => console.log(err));
  }
}
