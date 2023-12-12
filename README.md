# Informasjonkiosk
en side som viser info
Prosjekt: Informasjonskiosk
Dette er et tverrfaglig prosjekt som involverer kunnskap fra alle programfagene fra både VG1 og
VG2. Prosjektet gjennomføres individuelt, og det har stort omfang, så planlegg godt. Vær også
obs på at oppgaven kommer til å oppdateres underveis.

```
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

## Visjon
Informasjonskiosken skal kunne vise viktig og interessant informasjon til et større publikum via
automatiserte skjermer som henter informasjon fra en skytjeneste og det skal være lett for dem
som administrerer skjermen å legge til, endre og fjerne informasjon.

## Funksjonell beskrivelse
1. Når brukere slår på skjermen skal den automatisk og uten videre innstillinger vise informasjonen som er konfigurert.
2. Skjermen skal kunne vise bilder i fullskjermmodus
3. Tilpasse bilder som ikke har riktig format slik at det som er størst av høyde eller bredde får maksimal størrelse

4. Skjermen skal kunne vise tekst i forhåndsbestemt størrelse.
5. Skjermen skal kunne vise tekst og bilde i forhåndsbestemte størrelser.
6. Utvikle gjerne noen egne ideer for formatering her.
7. Skjermen skal rullere mellom bilder i intervaller som er forhåndsbestemt.
8. Skjermen skal kunne vise video
9. Bådee i fullskjerm, og sammen med tekst.

## Adminpanel
Adminpanelet er for de som administrerer systemet.
- Det skal være sikker innlogging med mulighet for å lage brukere
- Nye brukere skal godkjennes av en superbruker før de får tilgang
- I adminpanelet skal administrator kunne publisere informasjon i henhold til den
funksjonelle beskrivelsen over.
- Du kan velge selv om innstillingen og konfigureringen skal være tekstbasert eller grafisk,
eller en kombinasjon.

## Milepæl 1 - Lag en plan
Tidsfrist: 1 dag
Lag en kort beskrivelse av hvordan du vil gjennomføre prosjektet.
- Skriv hvilke teknologier du vil bruke
- Skriv litt om hvilken overordnet tilnærming du vil bruke for å løse de forskjellige
oppgavene. Det er lov å endre tilnærming etterhvert, men du må begynne med en plan!
- Gå gjennom stegene i oppgaven og lag et skjema som beskriver de utfordringene du tror
blir de største i oppgaven.
- Lag også et skjema som beskriver hvor lang tid du tror det vil ta.
- Opprett et prosjekt på github og begynn å fylle inn i backlog’en

## Milepæl 2 - Konsept
Tidsfrist: TBA
Konseptet bør inneholde følgende:
- Tegninger som forklarer layout’ene du har tenkt til å bruke.
- Nettverksdiagrammer som beskriver hvordan de forskjellige enhetene skal snakke
sammen.
- En oversikt over eventuell tredjeparts programvare.
- Du bør ha en klar beskrivelse av hva prototypen skal inneholde.
Milepæl 3 - Prototype
Tidsfrist: TBA
Lag en enkel prototype som gir en provisorisk introduksjon til teknologiene du vil bruke, og som
kan fungere som et basisoppsett for prosjektet ditt.
Godkjent prototype skal tilfredstille følgende krav:
- Du kan koble maskinvaren sammen og få vist frem bildet ditt på en skjerm.
- Du kan endre innholdet på skjermen din ved å endre på en nettside.
- Informasjonen kjører i fullskjermmodus
- Du skal ha en klar plan for hva neste steg, demo-versjonen bør inneholde

## Milepæl 4 - Versjon 1 - Demo
Tidsfrist: TBA
- Demo-versjonen bør inneholde de viktigste tingene sluttbrukeren forventer å se i
programmet. Eventuelle bugs bør være usynlige og/eller ubetydelige.
- En demoversjon er ikke forventet å være et ferdig produkt, men det skal være et
betydelig steg frem fra en prototype.
- Ved gjennomgang av demo’en din bør du forklare hva det neste utviklingssteget er, og
du bør ha en viss idé om hvor lang tid det kommer til å ta å fullføre prosjektet.
- Ved avslutning av versjon 1 bør du ha en tydelig beskrivelse av hva versjon 2 skal
inneholde.

## Iterative Milepæler
- Alle milepæler etter milepæl fire er videreutvikling av produktet.
- Hver iterasjon skal inneholde implementering av nye ‘features’
- Eventuelt en korrigering av veldig alvorlige feil

## Sluttprodukt
Sluttproduktet skal svare på følgende krav
- Adminpanel og informasjonskiosken kjører på separate webservere
- Men kan godt være på samme VM.
- Både adminpanel og informasjonskiosken skal svare på domenavn.
- Skjermen skal være plug-and-plan
- Bortsett fra at du må konfigurere nettverket så klart XD;

## Vurdering
Vurderingen vil bli todelt.
Del 1 vil bli gjort som en presentasjon med tilhørende demonstrasjon for klassen.
Del 2 vil bli gjort som en høring der du må forklare den tekniske løsningen og hvordan du jobbet
deg gjennom de forskjellige fasene i prosjektet.
I driftsfaget vil det bli lagt vekt på
- Serverherding
- Brukeradministrasjon
- Installasjon
- Utrulling
- oppkobling
I utviklerfaget vil det bli lagt vekt på
- At du bruker MVC arkitektur
- Ryddig og modulær kode
- God navngiving på funksjoner
- God feilhåndtering
- Minimalisert kode
