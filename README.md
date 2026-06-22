# Angular + MongoDB Projekt

Ett skolprojekt som kombinerar Angular-frontend med en Express-backend och MongoDB-databas. Applikationen har stöd för offline-användning via cachning och kan installeras som en app på din enhet.

![App-screenshot](screenshot.png)


##  Funktioner

-  **Angular frontend** med modern UI
-  **Express backend** med REST-API
-  **MongoDB** som databas
-  **Offline-stöd** via cache (fungerar utan wifi)
-  **Installationsbar som app** (PWA - Progressive Web App)

## Starta projek

Projektet går endast att starta via dist mappen

Först startar du upp mongodb, ser till att den fungerar som den ska
Öppna backend mappen i terminalen via node server.js och det bör stå IT works! den bör köras på localhost 5000

Sedan öppna en ny terminal sedan cd my-angular-project
npm install
npm run build
npx http-server -p 1240
eller(om man vill hamna i rätt mapp direkt) npx http-server -p 1240 -o /my-angular-project


## Installera som app
Applikationen kan installeras som en fristående app på din enhet:

## På dator (Chrome/Edge)
Öppna http://localhost:1240 i webbläsaren

Klicka på installationsikonen i adressfältet (🔽 eller ⊕)

Välj "Installera" eller "Lägg till på skrivbordet"

Appen öppnas nu i ett eget fönster utan webbläsargränssnitt

## På mobil (Chrome/Safari)
Öppna http://localhost:1240 i webbläsaren

Android (Chrome): Tryck på ☰ → "Lägg till på hemskärmen"

iOS (Safari): Tryck på ⬆️ → "Lägg till på hemskärmen"

Appen visas nu som en vanlig app på din startskärm

## Fördelar med att installera appen
 Fungerar offline (cachad data)

 Startar snabbare

 Eget fönster utan webbläsar-gränssnitt

 Kan ta emot push-notiser (om konfigurerat)


## Teknologier
Frontend: Angular 17+

Backend: Node.js, Express

Databas: MongoDB (Mongoose)

Offline-stöd: Service Workers / Cache

PWA: Manifest.json för installationsbar app

Servering: http-server

## Säkerhet
API-nycklar och känslig information hanteras via .env-filer

.env är exkluderad från versionhantering via .gitignore

Alla anslutningssträngar är lokala och inte hårdkodade
