import React from "react";
import * as ReactDom from "react-dom";
import { Log } from "@microsoft/sp-core-library";
import {
  BaseApplicationCustomizer,
  PlaceholderName,
} from "@microsoft/sp-application-base";
import { Dialog } from "@microsoft/sp-dialog";
import { sp } from "@pnp/sp/presets/all";
import * as strings from "UserCheckerApplicationCustomizerStrings";
import MainComponent from "./MainComponent";

const LOG_SOURCE: string = "UserCheckerApplicationCustomizer";

let IsMailDatas = [];

export interface IUserCheckerApplicationCustomizerProperties {
  testMessage: string;
}

export default class UserCheckerApplicationCustomizer extends BaseApplicationCustomizer<IUserCheckerApplicationCustomizerProperties> {
  public onInit(): Promise<void> {
    return super.onInit().then(() => {
      sp.setup({
        spfxContext: this.context,
      });

      this.getListItems();
    });
  }
  getListItems() {
    const placeholder = this.context.placeholderProvider.tryCreateContent(
      PlaceholderName.Top
    );
    sp.web.currentUser
      .get()
      .then(async (res) => {
        console.log(res);
        let userEmail = res && res.Email ? res.Email : "";
        let UserPrincipalName =
          res && res.UserPrincipalName ? res.UserPrincipalName : "";
        //  sp.web.lists
        //   .getByTitle("ExternalUser")
        //   .items.filter("Title eq '" + userEmail + "'").get()
        //   .then((result) => {
        //     console.log('result',result)
        let isOpen = false;

        if (
          UserPrincipalName &&
          UserPrincipalName.toLowerCase().includes("#ext#")
        ) {
          isOpen = true;
        }
        //console.log(result);
        let data = {
          UserPrincipalName,
          userEmail,
          isOpen,
        };
        const element: React.ReactElement = React.createElement(
          MainComponent,
          data
        );

        return ReactDom.render(element, placeholder.domElement);
        //});
      })
      .catch((err) => console.log(err));
  }
}
