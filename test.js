fetch("https://training-v6.certified.opquast.com/irvaq/plongeons-dans-la-qualite-web/#", {
  method: "GET",
  headers: {
    "Cache-Control": "no-cache, must-revalidate, max-age=0, no-store, private",
    "Connection": "Keep-Alive",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "Accept-Encoding": "gzip, deflate, br, zstd",
    "Accept-Language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
    "Cookie": "PHPSESSID=mp9qft1hfcbhfm4imc6t8903vf; pll_language=fr; wordpress_test_cookie=WP%20Cookie%20check; ab.storage.deviceId.f9c2b69f-2136-44e0-a55a-dff72d99aa19=g%3ARr3pjzhM7vhUwDGqqEMcfkTKWf03%7Ce%3Aundefined%7Cc%3A1734358762251%7Cl%3A1734358762251; ab.storage.sessionId.f9c2b69f-2136-44e0-a55a-dff72d99aa19=g%3A8266cb6f-cef5-eafd-fd39-e36367d2eaa8%7Ce%3A1734360562260%7Cc%3A1734358762261%7Cl%3A1734358762261; wordpress_logged_in_b24092def5a90469f80578c2eea4f372=nathan.morel%40efrei.net%7C1735568494%7CPeedhRur0FsTxTEFacCH9FbHaDLqXtKztGGik2lDYtA%7C788e969c1f4d2393b53d920258c7f33b1f556ba361405280e75479988cd5a62e",
    "Host": "training-v6.certified.opquast.com",
    "Pragma": "no-cache",
    "Referer": "https://training-v6.certified.opquast.com/login-dh65tgr?action=wordpress_social_authenticate&mode=login&provider=OpquastConnect&redirect_to=https%3A%2F%2Ftraining-v6.certified.opquast.com%2Flogin-dh65tgr&redirect_to_provider=true",
    "Sec-CH-UA": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
    "Sec-CH-UA-Mobile": "?0",
    "Sec-CH-UA-Platform": "\"Windows\"",
    "Sec-Fetch-Dest": "document",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-User": "?1",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
  }
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.text();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });