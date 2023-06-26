// TO-DO: set up proper auth

const authBase = "https://authenticate.cypress.io/";

export class CypressAuth {
  static readonly ssoDiscover = `${authBase}sso/discover`;

  /* static async loginViaSSO(email: string) {
    const options = {
      method: "POST",
      body: JSON.stringify({ email: email }),
      headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(this.ssoDiscover, options);
    const connectionLink = await response.json();

    console.log(connectionLink.connection);

    const responseTwo = await fetch(connectionLink.connection);
    const jsonResponseTwo = await responseTwo.json();
    console.log(JSON.stringify(jsonResponseTwo));
  } */

  static setCookie() {}
}
