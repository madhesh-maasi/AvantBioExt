import React,{ useState, useEffect } from "react";
import { DefaultButton, Modal, PrimaryButton, } from "office-ui-fabric-react";
import { sp } from "@pnp/sp/presets/all";

const MainComponent = (props:any) => {
  const [isopen, setIsopen] = useState(false);
   function onback(){
    setIsopen(false);
    history.back()
   }

  function adddetails() {
    sp.web.lists
      .getByTitle("ExternalUser")
      .items.add({
        Title: props.userEmail,
      })
      .then((arr) => {
        setIsopen(false);
        console.log(arr);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  


  useEffect(() => {
    setIsopen(props.isOpen);
    console.log('check')
  }, []);

  return (
    <>
    
    {isopen &&
    <Modal
      styles={{
        main: {
          width: "75%",
          borderRadius: "5px",
          padding: "16px 24px",
          height: "85vh",
          position: "relative",
        },
      }}
      isOpen={isopen}
    >
      <h1 style={{ textAlign: "center" }}>DISCLAMER</h1>
    
      <div
        style={{
          maxHeight: 470,
          overflowY: "auto",
          textAlign: "justify",
          paddingRight: "10px",
          lineHeight: "20px",
        //   fontWeight: "500",
        }}
      >
        The documents and information posted to this dataroom by Avant Bio LLC
        (the "<b><i>Sponsor</i></b>") on behalf of Avant Bio Fund II, LP (the "<b><i>Fund</i></b>"),
        including any attachments relating any co-investment or syndication
        (collectively, the "<b><i>Materials</i></b>"), are private and confidential.
        References in these Confidential Investor Dataroom Terms ("<b><i>Terms</i></b>") to
        "<b><i>you</i></b>" apply to you in your individual capacity and your capacity as the
        authorized representative or adviser of the firm you represent. The
        Materials are the confidential, proprietary and/or trade secret
        information of the Sponsor, may include material non-public information,
        and are being made available to you in accordance with these Terms,
        except to the extent superseded by a written confidentiality agreement
        that you have entered into with us (the "<b><i>Confidentiality Agreement</i></b>"). By
        accepting these Terms and accessing the Materials, you agree to (a)
        receive and maintain the Materials in strict confidence, (b) take normal
        and reasonable precautions to maintain such confidentiality so that you
        do not divulge the Materials to any third party, (c) ensure that the
        Materials are protected with security measures and a degree of care that
        would apply to your own confidential information, and (d) never release,
        reveal or share any information, in whole or in part, with any
        third-party without the prior consent of the Sponsor. <br></br> <br></br> 
        The Materials are
        provided for informational and discussion purposes only, may be amended
        and/or supplemented without notice, and do not constitute an offer to
        buy, or solicitation of an offer to purchase, interests in any
        investment vehicle managed, sponsored by, or affiliated with, the
        Sponsor or its affiliates. The Materials are not intended to be, and
        shall not be regarded or construed as, a recommendation for any
        investment or business, financial, tax, legal or other advice of any
        kind, nor constitute or imply any commitment whatsoever, including,
        without limitation, an offer to purchase, sell or hold any security,
        investment, loan, or other financial product, or to enter into or
        arrange any type of transaction or investment. Neither the Sponsor nor
        any affiliate thereof makes any representation or warranty, express or
        implied, as to the accuracy or completeness of the Materials. No
        third-party company name used in this document is a trademark or
        registered trademark of the Sponsor and its inclusion in the Materials
        does not imply that Sponsor or any of its personnel are affiliated with,
        or endorsed by, such third-party company. <br></br><br></br>
        The Sponsor is not soliciting
        any indications of interest from any person or entity based on the
        Materials, and any indications of interest submitted by recipients in
        response to the Materials involve no obligation or commitment of any
        kind. Neither the U.S. Securities and Exchange Commission, nor any other
        regulatory or governmental authority has reviewed, approved,
        passed-upon, or endorsed the merits of the Materials, nor have any of
        foregoing authorities confirmed the accuracy or determined the adequacy
        of the Materials. Any representation to the contrary is a criminal
        offense. The Materials have not been independently verified by any
        independent public accountant and any statistical, financial, or
        historic information contained herein has been supplied for
        informational purposes only. Nothing contained herein shall be relied
        upon as a promise or representation as to past or future performance.
        Any views or terms contained herein are based on financial, economic,
        market and other conditions prevailing as of the date of this document
        and are subject to change. The Sponsor does not have, and does not
        undertake any obligation to, update or keep current the Materials.<br></br><br></br>
        
         By
        accessing the files in this SharePoint, you are confirming that (1) the
        Materials shall be treated in accordance with the confidentiality
        provisions set forth in these Terms, or the Confidentiality Agreement,
        as applicable, (2) you will only use the Materials in accordance with
        applicable law and regulation, (3) you are authorized to enter into the
        Terms on behalf of yourself and any firm you represent, (4) any
        undertakings and warranties provided by you in these Terms are provided
        to the Sponsor and its affiliates, (5) any reproduction or
        redistribution of the Materials without the consent of the Sponsor, in
        whole or in part, is prohibited, (6) upon the Sponsor's request, you
        will promptly return or destroy all the Materials in your possession (in
        whatever format) and all copies thereof, and certify to the Sponsor that
        you have complied with such request, (7) you or the firm you represent
        are an "accredited investor" as defined in Rule 501 of Regulation D
        under the Securities Act of 1933, as amended, and a "qualified
        purchaser" as defined in Section 2(a)(51) of the Investment Company Act
        of 1940, as amended, and (8) you have read the Terms in their entirety
        and accept and agree to be bound hereby.<br></br><br></br> 
        If you do not agree to these
        Terms or do not wish to be bound by these Terms, do not open any files
        and please exit the dataroom without accessing the Materials.
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "end",
          gap:"10px",
          position: "absolute",
          bottom: "15px",
          right: "30px",
        }}
      >
         <PrimaryButton
          text="Agree"
          styles={{
            root: {
              background: "rgb(44, 104, 254)",
              border: "none",
              borderRadius: "4px",
              ":active": {
                background: "rgb(180, 201, 253 ) !important",
                border: "1px solid  rgb(210 150 2 / 44%)  !important",
                color: "#8E8E8E !important",
              },
            },
            rootHovered: {
              border: "none",
              background: "rgb(44, 104, 254)",
            },
          }}
          onClick={() => {
           adddetails();
          }}
        />
      </div>
    </Modal>
}
    </>
  );
};

export default MainComponent;
