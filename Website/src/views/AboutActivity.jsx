import React from "react";
import { Card, Page } from "react-onsenui";
import MyToolbar from "./../components/Toolbar";

const AboutActivty = ({ pushPage, popPage }) => {
  return (
    <Page
      renderToolbar={() => <MyToolbar title={"Über"} onBackButton={popPage} />}
    >
      <div
        style={{
          textAlign: "center",
        }}
      >
        <Card>
          <article className="markdown-body">
            <p>
              Dieses Projekt fällt unter die{" "}
              <a href="https://github.com/DerGoogler/FPL/blob/master/LICENSE">
                BSL-1.0
              </a>{" "}
              Lizenz Text können frei verwendet werden.
            </p>
            <p>
              Diese App wurde in meiner Freizeit entwickelt. Ich möchte mit
              dieser App das allgemeine &quot;Lernkateikarten schreiben&quot;
              abnehmen, diese App funktioniert komplett offline und kann überall
              mit hingenommen werden. Du kannst dir bei der Zugfahrt entspannt
              dein Stoff reinziehen, den du brauchst :)
            </p>
            <p>
              Solltest du einen Fehler finden kannst du dies in den{" "}
              <a href="https://github.com/DerGoogler/FPL/issues">Issues</a>{" "}
              mitteilen (Konto erforderlich). Andernfalls kannst du mir das über
              Instagram mitteilen, aber Instagram werde ich aber größtenteils
              nicht antworten.
            </p>
            <p>Viel Spaß mit der App!</p>
          </article>
        </Card>
      </div>
    </Page>
  );
};

export default AboutActivty;
