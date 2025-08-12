
# RÉV Books – statikus weboldal (affiliate/dropshipping modell)

Ez egy kész, statikus, többoldalas weboldal sablon:
- `index.html`: nyitóoldal YouTube blokkal és kiemelt termékekkel
- `catalog.html`: katalógus (a `products.json`-ból tölti a termékeket)
- `product.html`: termék részletező oldal (URL paraméter `?id=` alapján)
- `styles.css`, `scripts.js`: stílusok és logika
- `assets/img`: logó, favicon, hero kép
- `products.json`: termékadatok `affiliate_url` mezővel

## Hogyan használjam?
1. **Termékek frissítése**: szerkeszd a `products.json`-t. Cseréld `affiliate_url` mezőket a saját partnereid linkjeire.
2. **YouTube beágyazás**: az `index.html`-ben cseréld az `iframe` URL-t a saját videódra.
3. **SEO meta**: a `head`-ben módosítsd a leírást és a `og:` tageket.
4. **Adatkezelés/Impresszum**: az `index.html` láblécében találod a hivatkozásokat – készíts külön oldalakat ha szükséges.

## Telepítés (ingyenes):
- **Netlify**: húzd rá a mappát a Netlify felületére (Drag & Drop).
- **GitHub Pages**: töltsd fel egy repo-ba, majd aktiváld a Pages-t (main branch / root).

## Kapcsolatfelvételi űrlap (opcionális)
Használhatsz olyan szolgáltatást, mint a **Formspree**, és egy egyszerű `<form>`-ot beszúrhatsz az `index.html`-be.

## Megjegyzés
A képek Unsplash stock URL-ek, szabadon lecserélhetők. A dizájn "Hamptons" ihletésű (pasztell kék, bézs, fehér).
