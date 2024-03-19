import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { WavyBackground } from "../components/ui/wavy-background";

// Import the images
import about_us from "../assets/Fenster-25-Jahre.png";
import wirbildenaus from "../assets/wirbildenaus-removebg.png";
import Raab from "../assets/Raab.svg";
import Ulber from "../assets/Ulber.png";
import Hoegner from "../assets/Hoegner.png";
import MetzgereiRumpel from "../assets/Metzgerei_Rumpel_Bruckmühl.jpg";
import Wohnhaus_Hohenthann from "../assets/Wohnhaus_Hohenthann.jpg";
import Wohnhaus_Bad_Aibling from "../assets/Wohnhaus _Bad_Aibling.jpg";
import Bauernhof_Brannenburg from "../assets/Bauernhof_Brannenburg.jpg";
import Bauernhof_Oberpframmern from "../assets/Bauernhof_Oberpframmern.jpg";

// Footer
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import ContactNew from "../components/ui/contact-section-new";
import References from "../components/ui/references";

const service_innenbereich = [
  {
    title: "Innenanstrich",
    description: "Wir führen sämtliche Anstriche im Innenbereich aus.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img src={Wohnhaus_Hohenthann} alt="About Us" />
      </div>
    ),
  },
  {
    title: "Bodenbeschichtungen",
    description:
      "Anfragen von speziellen Beschichtungen auf verschiedenen Böden wie Epoxidharz oder Betonversiegelung.",
    content: (
      <div className="h-full w-full flex items-center justify-center ">
        <img src={Wohnhaus_Bad_Aibling} alt="About Us" />
      </div>
    ),
  },
  {
    title: "Lackierarbeiten",
    description:
      "Sämtliche Lackierarbeiten werden bei Ihnen vor Ort durchgeführt.",
    content: (
      <div className="h-full w-full flex items-center justify-center ">
        <img src={Wohnhaus_Hohenthann} alt="About Us" />
      </div>
    ),
  },
  {
    title: "Individuelle Farbberatung",
    description:
      "Beratung und Farbgestaltung bei der Auswahl im Innen- und Außenbereich.",
    content: (
      <div className="h-full w-full flex items-center justify-center ">
        <img src={Wohnhaus_Bad_Aibling} alt="About Us" />
      </div>
    ),
  },
  {
    title: "Spachteltechniken",
    description:
      "Wir führen für Sie klassische Glättetechniken an Wänden und Decken durch.",
    content: (
      <div className="h-full w-full flex items-center justify-center ">
        <img src={Wohnhaus_Hohenthann} alt="About Us" />
      </div>
    ),
  },
  {
    title: "Renovierungsarbeiten",
    description: "Wir bringen auch alte Gemäuer wieder auf Vordermann.",
    content: (
      <div className="h-full w-full flex items-center justify-center ">
        <img src={Wohnhaus_Bad_Aibling} alt="About Us" />
      </div>
    ),
  },
  {
    title: "Tapezierarbeiten",
    description:
      "Egal ob Fototapeten oder moderne Wandbeläge, wir bringen hochwertige italienische Wandbeläge für unsere Kunden an die Wand.",
    content: (
      <div className="h-full w-full flex items-center justify-center ">
        <img src={Wohnhaus_Hohenthann} alt="About Us" />
      </div>
    ),
  },
  {
    title: "Betonoptik",
    description:
      "Malerarbeiten in Betonoptik können eine moderne und industrielle Ästhetik in einem Raum schaffen. Hier wird die Textur und Optik von Beton nachgeahmt.",
    content: (
      <div className="h-full w-full flex items-center justify-center ">
        <img src={Wohnhaus_Bad_Aibling} alt="About Us" />
      </div>
    ),
  },
  {
    title: "Verputzarbeiten",
    description:
      "Vorbereitende Arbeiten wie Spachteln, Verputzen und Glätten von Oberflächen.",
    content: (
      <div className="h-full w-full flex items-center justify-center ">
        <img src={Wohnhaus_Hohenthann} alt="About Us" />
      </div>
    ),
  },
];

const service_aussenbereich = [
  {
    title: "Holzanstriche aller Art",
    description:
      "Neu und abgewitterte Holzbauteile sowie Hagelschäden am Gebäude.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img src={Wohnhaus_Hohenthann} alt="About Us" />
      </div>
    ),
  },
  {
    title: "Eigener Gerüstbau",
    description:
      "Wir bauen für unseren Eigengebrauch an Ihrem Gebäude Arbeitsschutzgerüste auf.",
    content: (
      <div className="h-full w-full flex items-center justify-center ">
        <img src={Wohnhaus_Bad_Aibling} alt="About Us" />
      </div>
    ),
  },
  {
    title: "Putzausbesserungen",
    description:
      "Vorbereitende Arbeiten wie Spachteln, Verputzen und Glätten von Oberflächen.",
    content: (
      <div className="h-full w-full flex items-center justify-center ">
        <img src={Wohnhaus_Hohenthann} alt="About Us" />
      </div>
    ),
  },
  {
    title: "Fassadenanstriche",
    description:
      "Von der Untergrundvorbereitung, der Auswahl von Farbtönen und der richtigen Materialen bis hin zur Ausführung.",
    content: (
      <div className="h-full w-full flex items-center justify-center ">
        <img src={Wohnhaus_Bad_Aibling} alt="About Us" />
      </div>
    ),
  },
  {
    title: "Hochdruck-Wasser-Reiniger",
    description: "Reinigung von verschmutzen Flächen am Gebäude.",
    content: (
      <div className="h-full w-full flex items-center justify-center ">
        <img src={Wohnhaus_Hohenthann} alt="About Us" />
      </div>
    ),
  },
  {
    title: "Renovierungsarbeiten",
    description:
      "Wir bringen stark renovierungsbedürftige Fassaden wieder auf Vordemann.",
    content: (
      <div className="h-full w-full flex items-center justify-center ">
        <img src={Wohnhaus_Bad_Aibling} alt="About Us" />
      </div>
    ),
  },
  {
    title: "Individuelle Farbberatung",
    description:
      "Beratung und Farbgestaltung bei der Auswahl im Innen und Außenbereich.",
    content: (
      <div className="h-full w-full flex items-center justify-center ">
        <img src={Wohnhaus_Hohenthann} alt="About Us" />
      </div>
    ),
  },
  {
    title: "Lackierarbeiten",
    description: "Sämtliche Lackierarbeiten bei Ihnen vor Ort.",
    content: (
      <div className="h-full w-full flex items-center justify-center ">
        <img src={Wohnhaus_Bad_Aibling} alt="About Us" />
      </div>
    ),
  },
  {
    title: "Renova-Fenster-Flügel",
    description:
      "Lieferung und Montage von Renova Alu-Fensterflügel und Fensterstock Abdeckungen.",
    content: (
      <div className="h-full w-full flex items-center justify-center ">
        <img src={Wohnhaus_Hohenthann} alt="About Us" />
      </div>
    ),
  },
];

function Home() {
  return (
    <>
      {/* Hero */}

      <div className="container-waves flex flex-col items-center justify-center">
        <WavyBackground className="max-w-4xl mx-auto ">
          <h2 className="md:text-2xl text-xl mb-4 text-center">Malerbetrieb Kühnle</h2>

          <h1 className="md:text-7xl text-4xl font-bold text-center">
            Farbe schafft{" "}
            <span className="bg-gradient-to-r from-[#008ED7] to-[#257D46] text-transparent bg-clip-text">
              Atmosphäre
            </span>
            .
          </h1>
          <div className="flex justify-center pt-8">
            <Button variant="default">Kontakt</Button>
          </div>
        </WavyBackground>
      </div>

      {/* About us */}

      <div className="container-about min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={about_us}
            className="max-w-full lg:max-w-lg"
            alt="About Us"
          />
          <div className="ml-0 lg:ml-12 mt-6 lg:mt-0">
            <h1 className="text-4xl lg:text-6xl mb-4 lg:mb-6 font-bold">
              Ihr Malerbetrieb.
            </h1>
            <p className="text-sm lg:text-base text-gray-500">
              Norbert Kühnle gründete vor 25 Jahren seinen Malerbetrieb mit Sitz
              in Bad Aibling. Als Meisterbetrieb im Maler- und Lackiererhandwerk
              stehen Qualitätsarbeit, Zuverlässigkeit und termingerechte
              Abwicklung der Aufträge im Vordergrund.
              <br />
              <br /> Wir stehen für fachmännische Handwerksarbeit komplexer
              Arbeiten rund um die Innen- und Außengestaltung von Räumen,
              Gebäuden und Fassaden – im Großen wie im Kleinen.
              <br />
              <br />
              Regelmäßige Fortbildungen und der Einsatz neuester Materialien und
              Arbeitstechniken sichern bis heute die hohe Qualität und
              Modernität der Leistungen. Von der ersten Beratung über die
              Planung und Materialauswahl bis hin zur Fertigstellung, sind wir
              gerne für Sie da.
            </p>
            <Button variant="default" className="mt-4 lg:mt-6">
              Kontakt
            </Button>
          </div>
        </div>
      </div>

      {/* Services */}
      <div
        className="container-services flex flex-col items-center justify-center"
        id="services"
      >
        <h1 className="text-6xl mb-4 font-bold text-white">Services.</h1>
        <Tabs defaultValue="innenbereich">
          <div className="max-w-max mx-auto">
            <TabsList className="flex">
              <TabsTrigger value="innenbereich">Innenbereich</TabsTrigger>
              <TabsTrigger value="aussenbereich">Außenbereich</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="innenbereich">
            <StickyScroll content={service_innenbereich} />
          </TabsContent>
          <TabsContent value="aussenbereich">
            <StickyScroll content={service_aussenbereich} />
          </TabsContent>
        </Tabs>
      </div>

      {/* Ausbildung */}

      <div className="container-about min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={wirbildenaus}
            className="max-w-full lg:max-w-lg"
            alt="About Us"
          />
          <div className="ml-0 lg:ml-12 mt-6 lg:mt-0">
            <h1 className="text-4xl lg:text-6xl mb-4 lg:mb-6 font-bold">
              Ausbildung.
            </h1>
            <p className="text-gray-500">
              Wir bilden seit Jahren mit Erfolg Lehrlinge in diesem
              interessanten und absolut vielseitigem Beruf aus. Wer sich dafür
              entscheidet, gestaltet Innenräume und Fassaden, verlegt
              Bodenbeläge und verschönert Wände mit verschiedenen Maltechniken,
              Tapeten oder Dekorputzen. <br />
              <br /> Das Berufsbild ist traditionsreich und modern zugleich, nie
              langweilig, immer fordernd was Fachwissen, Materialkunde und
              individuelles Gespür für die Interessen der Kunden angeht.
              <br />
              <br />
              Der Malerberuf hat Zukunft!
            </p>
            <Button variant="default" className="mt-4 lg:mt-6">
              Jetzt Bewerben
            </Button>
          </div>
        </div>
      </div>

      <div className="container-references flex flex-col">
        <References />
      </div>

      <div className="partner-section py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-3xl mb-4 font-bold text-center">
            Partner & Lieferanten
          </h1>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4 ">
            <img
              className="logo-images col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcYAAABvCAMAAABB2JCJAAABI1BMVEX////jBhPmBhMAAADqBhRtAACHjIzu7u67AAgLKCfeBRJEAACytbXrBhRYAACanp729vasAAAqNzd6AACGAAByeHhlZWVcZGSMAAA9AAD09PRnAAB1AABSW1uRAAC1AAYQAADi4uJKAACYAACIAABbAAAoLi4vAADXBBEmAACgAAA2AADn5+fIAADKAA/Y2dkeAADGx8dSAADLzMwZAAAoAAA5REQ4AAC4urqoqqoAGBgwAABudXWeoKAAFBSzAAs2QkKNkJBJSUk4ODgTExPTAAAcHh5YFBYAHx9IJCWqAAwdMTHSBRJVVVUUHBwAFRVJNDVBICFWU1NCQkJYKSpbQ0NUNDQyIiJRYGAWICBMFRdlFBZ5c3NaJidBODhqeHgrISGAyjwoAAAd0ElEQVR4nO1de18iR9ZuqooGW1pAQJSbIjICoogogiMKzmiMMpNskk3ivrOb/f6f4q1bX+k6NDCZZH8/nv1jsjNNd3VdzvU5pzVNhd4gqa/xlyHRTXmWozOYBF43GaQUC8gwfG3Wi9E1/jLU995GrvWY4M3g64rH/ZhqEdtlXGmYZI2/DqaRxs465vB9JHg9TOM4p1rFjc0pQZE1/lKQM9yzZCM+I8rL9t/awat4U0frRfzrYe6OC3xBqvhFuYqRiHHQC1rFVH/T/HZjXUONBu7yFRkduv8WSVj/X7GM+mVjfRb/FjCLeb4i5ax9GJFpNE45ptbfNA46AavYAU/wGt8QKL3NlwTfW+cKPWY2/1P+neHO+qv4x2rAMpbr61X8mwDFN5gzEcOG/Asz/d+EtU6X1kXpfoDnGMNna5H6NwE6+8jkZeJA/n/SKtMVK3QYkhm5TKR0O2veaMn3DWNJILL2Ur4qUJz7EpOinFbjqa2l8j9+x1C0T+hx0ruGXX3n4eEj3lsWW9HK1OupoKUw//XC7Rc05yqE5jrhgTeYd1+J2V/Ped7sg+KvTF7mK+KfUJYuWLl2SkwG6yITewzV4RP+pA9dSITFQCIxLOMtt5+KXl7SC2I/fjY1TWieEDGntWx9az6iu+mIqboTnYuzdG03C6Ni+H9HHx+vlEI8fStTi3tfBJ1lgEcd1Rr+hSSVPl2Ywmta3gVr2iDqeyN0ht3BuBz2nc2lENPddi7Cd9sLYuMGU5TiqoVE5nT3AN/qyRCY5Pq4GA883aRRaeLXfv42p+cBPJd8M4tIvIjHuUmYx+v5V7w7de/qsyucCw5wM5Txve9p5hZTe23cED+P/6FpO6fIFLBUY2vssnAmONCHXBwJ1zqie9xNLYZCoRBrD/K4PrM15fRncHlQCDuYVDX3OehOdGDlRCwF5Qb4zx1LXz4+vvmU68z7mfP7QRlXIs4tUGRPBy4fXfvOvnnO7NIBFgLUzAy09vcmKf7je4oLaYmSjCuk2sGDsGObh4HL1DWj5eVu0ilfxQNOEXppbi+43TrlA/8mj6DMD8Mwv+1hr6Y3sjgX5KMBGDxvTV3ruB/o49mP8zoJaIqZoaofSj34XUHrZszTn6ptikFdXnvoSNHUzzuLjQ5C7spWvz7BvQj0gCiEWcHQblYgiV+8wUWz+BwU9wgYw6H7h8jYksGxRRDrnxvO4pDjhPrSwUnDu9vuuaEqLRx0+qBpt3GSFqcvdSjuarjGNMDBQfLl8LprLQCaHiz+4hLDGQeW7GJgEtQYeXcEqb+G21upfsuzk/a2l9qT5XNndczirJNnQy96txupMVkW297n84DS9Nj9eIoa78f9TyktISaZnljnBg9f8TAy9WjJ+FWWUdNPfDbZ/bKSf3LgihKj0l3IPVv1bCRSXG4VtcKDszxkc6K+cHvXK39InR28zoEYhRntaZ3vCBUKj6d5OjtC6ZDWjWu8X8m+kcA1OR4qVMOJryCkvIeIbollbenUQ9SZyFpoyTg8d50O9IIXVIs2OralBM8H9pkDJmYavHsl/tb8pa0NuOVMaiOt8LMYGynl7d8nPoS2/UIhuWUP+25Z3Ugx8eRnSHR76Ts5xgOdyNH86wXKLncDNcL/bgb6pvX0VlD8U6KDfYYq4htHv+ALhh5/ojPCPUhU7GjtPbnFLhxjLaeiASwJe9ZIa2OF21Sx28iLryIy8laqx7wKrT9ir67TYZZel396wTpnQkwqMHrvXUaqRNia94+EEox/of/9yO5jnFNJIe2e6bkjW3Ao83sBWHEHUszPv1iN55pzHMiyvgtH4kBMEXkJb8x1my7DsdFcyrqSKJek6wfZaHrJ56RW+Bs/x6WFQ410PiJ0+rumfZF/e+ZS9EtLfeWwM2L+yd5KGyTnypmRg1U825QlH5rhPRbd9XS0H9K6DcZw05CSWb2JUv2az6SLsrF25MhRmhpHTYMQZB4ltMI/H8U1aUdI9HDouERITKTD1ThfyXYabro90JX2Gn5B4jCGtwKeXe4G2V1FFmjdc64e0Mub+vEFv4VjHLMzYDmTKE5dFX1rt1LJ/FjQOnVzRkYlnlYZYhAS74Vajj+tNPfdY1tboNZ4JTNMGvMX4Q+jRzObYBRtLuSRQkeA19jBPgaUwa3aiSUT0K90AnosZUH/1KXWMvccwyv5sMoQg9C9Ego43V/tNo52IqXVzDBuKKCzBcwkj52MVnPJLA90E3CZJlfeZaQ2HR+4ZZyhdNkWmoNDub8bl8649K9sqNJNcynnXmnhtB/6HGVI47mX8XJ5e5+BW0ukApibsXaVg+fWq9WhOyxOp3SlMJc8jQa0GW4zPud/lw/WxcNJ/6L36Miq3Z26DGd4xN0XILIQDJ6MAP69d8l3i3mi3H0dXKm1Wun9LOSMd68cWxFWjXOTFXw2TLVMHeS3nw6wCwfu2AOplcEHzHu80I1UGAC36Kd9hmqRnS6RpTIeHw1knLZK0SJDJn0akXaPyw/dWXSj99h7voOG3eRzYKp33+DSpEYXQmAOpHtiH4d7yAxr515xGXYIuKJrnKv2zARn0vGzqY14POIJwxYh1TgoPz/DmY8Et1RBYVCdsXD22BsxTwnt9h8efithPZHIbZ6eXtM/9R/TxC/uPi26jLm96VkNcocTx0zO092nFEUTaYSS1rP6NiM7w0CygAM6wPVWfBc/AAs9YBEStP9OMZ4hPjMhJgmB/L0czt7fR8Egz44IokGboXfgeSKdPM4iZjwctEsto66cgP6b8Hx+P2Xi5cqVpXrgzl0v9yXnBjCqcsUkaWgZh9d8GQHrMh+V/JIXQNDkivaRuFAbB4VxhR5sYpwAQ55c8PGoTj6uefWSD9TfU3uNPXxGxQoB4/Z3LbYtGifAZphs+i2cZzZ5eWZhm7/FtLZW7bATP2jH+J88w0FcIdrUz3QZU1/wTg5vFS1cALPbfosj0oIinGJMBLCv+3LiSA0I19lWmk2DD0JPpABI/J16rvPMUCWqLFEXwzx5BMUUcyLmaWbU9n4BS9UIxMXLfgunMma/fKY6HZ2yAOLORfSCnfjJr3UWFxjQN6KWl/PKqXcDrfP0saPFMLKKr8w4sIy9yykiWcgfFuFcdKi2nWQSLUIywH3wvhPQVl81vJZBR7WTWnh+4SJIIfiGezPMKe+UZoCDLjck9CIDzAe4D+gP7XXfu5MED4czjUmLzmN+3zQfqWBNRk3T/CGlJeljvTycTzs6ZuMcOpwF0rpTPzFJVZYJBXktkak+QtXPUqGbW+qldhxwaXwHoyweJpKsqjuxdVJaXIMDb9rdDwOIKVbfxJuYx2rlqHPCBRgVtrKKztZpMiGdYDEBltGIHRK+nKk7M4Ief6dT/Ih826u6s8PnWy86yxgFEgF9ev7Jeyha2mfxd6pRlEZH71KO2rhWq5SB7W+QOmAc3AjPyrxQb6whj5A0VE5LDNaN9EXU0rAn42xT4JoyT0eYUIB5hsAhJDAXa+hAZDQQSxwXTbphk1qsyd5oL8hisGitDJuANqamMbWjoHwwT/GgF/WJ7h7LSCF0n6TFGoo0jtWLbcWOTcDGuGW2EuDDD3EcWEfq7SjvTEWTEOn3KiuY7pI7ttHQ9BJw/nVf5Yy0qtmS8MOXYzN6TjUjNZZQtMuXk4q7gDvG3pyAwRnwyB6VdV6pPHOnZzazkJMwPJSGanqsvk3fIjXIWoZgJN7zHUGPg9LCSfWZpUhnWnnFBLfUFGeSAWKKfWGakIr6ZTvYtTAKbGd9Fo7k4aQRP3w82f845jzViHEsEsgeHo4NVyxYlvIEY3gYMQ3QTRKCHtXVTsKtdCXMa7VqLNj2o1UgFghdqsbWtnJjVT9y6dDqq6PrA7x5ryopIIfAy0qvHYqdJy/NCKy7ZwkcZIvzcJikIVSWVqk5glpUlv7IVOO2WE5SC7KZEk6IXbDOFShf7GfxDhR+GnCR2WiqpdxYbD4SB2Jsw0vrzcw6kBl4FWk6BFiTPZ40huexoN8c7E6DagU8GfaZW8u9bwIeUZ47/+YhYBR2sM/Ikjycc/pL40TTRswuZbK0Lpaz/YvJGAlB0yIdIH4TKKEzedjOwylcnlyhR169RPiFuzbGJRDOtYkXEXIOaWppLL0HLEXhxlaAzUARG/Zx9Gy2VkDWNQXDSggDhNzCmEdLId2tDX0EjojB9TizcDg/dYceVuNfBW1EtYNJl7PHVeNFkM1UdiwcAvMS52X+to+InWgJBs7WKDJNIMRWddOg1Kqxi633Vl8jwggkOzeT033A9anf2AFFU64kvR21rdA5iCM4Msk0g5/MeccmmaXXUGukFX416HL+LGRp5N9tLclV42XAKsUcB3TlVLuwcNRv3/7As1R5yGnJ2QFVqhrVmnpyIWQqYE2mNrjiEaSIOejk8W7Eu5CgNLwRFAHo3t1zvtBg3rtf8cdwWEqFD9ws9rQel6VUcv36KE7nA13OYAlgu3I8/7FKqr0rnO2LhfNfbnTu7F1FMoA0lF4SAWJhMlqHSqEy+N3XA1+xAKD2ClKnGefqHSmUFaS7tZTfwhHbgg/c+LXAVaNZ73FZykk5/2KR/sCswuC9sxegeZsPvc7f7Hh5wrjGWhA4BT1Ntckbk84/2lJfI9JEEbIbjqZX0PGRa1IRZIYlhEgHuVJjsdGAKA+1cPySvCl4OEyW/pOu5/dTZP6rp8Ue4ojQ06ntZJnJE/Q+uS3HwvHXIS+EFOciUddzecK4t4KDAGpPcnRBa/I2Kj30sCn8Ls645BtEEZaBLyhPU5AMRSguPjoHeDj/t/Ply49nBqr9/OXLp32E0g9fvuxQpWluBm2M7SN7RwDp3hDo8q2F9pcseeAYuEo20T5AZ5MT4OFr+mGF2lDoeqwOzjjOV1EtDVNlGRcvqX2Z7gFPb0AGn5aL+mI44mrplp0+xvcu8XE6cnrKaI3kkf6JVLRDRzzTm6zCeBRu0kqUwIG7fAO8U94KoqgDBCkrrLFALU/nzmY3mgAZO2ZN2qH6miGnZpEswFsr8CiTC2R3zP5e3h2ROJ0Baq1azhD/E8U/Bwj7nhPDAS3sueiJh0OR6jlIJb2haiAJIn0y8GkDp8ArexdWX4/sbI8BiOIelhR8wEETlSBQSGuWwCF4AlU7JoBKA639b58VFEg7TDgVy6Esc/WwtyQPZ1mWd2fc9NRqG8CdrPyO0VTP46TuvHoGj8IJmrZlKKOXZ/UvJteSj/usFvuC6AyFtOhu8Dv/godzbjdNoVZqN2p6WoME0w4nDmFC0JWXRFcya6EYDoR2DhcNT0HcGSDiB6JqDMWBREn5yCWgK7gfSu/bJaokC3k74tbkaKy8JMYjw3Q6APNqcuIjcEyxxcORK0KdjslFplQ6Op1jh/adGkllXi4ECjgrNiiQTlCjPSjjvXtfzW0FSJrfChJ8cMMtAW8fBjKt43IYE/pWzocRaA8KWIXA5qZafCU41zPYx7PgJ3CgOK89LdsZnviOpn2cdNrt7h91e3YCTV+XhQOl1+ahLGUzqS1eS/Xh8x0uxiNeFQBaitqrsA2gLHfV14cBxS/w7fyFtHLoDcBq78iIiQGk9cR94NKy7f0gCyd1Z+0/UhtqBSmULdp/cPa06ohnML02B7qVXIKZncFInpxNZyPTjRO1VmnfyZQxwCkfHfh8MhS538S381zISV2K6zAsIKC/hohUo2sguN/56CNwmFuCaWyrxkN6/8JwMqSD7snoKwlMuw0dmiQBAiIwUjn7TJMDpX5Nqf6lE9R1EIyLWzQPA1ADt1F/hISeyJcrrMNCXyomkgVSnZJyhFrqfS/qpMA0vIccL8Z3bPNwxDL+J6a1f2ul05tVrXBhHbYgIeXwcNAUsPpAxLYv7VZjSD2xHWWJev9oZsap2gPIhZLmgV7e1Gkiv08m7mq+vMdgzFdOCAG8He1ZSD0CpENFnRRcHjnZ8lk4gtmiX9iqka7YH3ETmVnqd2zJvwwsrHCyVOjsh6UsnOoER+0OMJAsSigdiOHl7DKCWmVsWYrqa2Z8MmuE5P74BtivInUE7mmHBaSWmKJOCqaDjn0EDouHYznPpELlFyunMA/bWrdkhaTm8HBAInEwCu1e7ub6xVFsUARhB39S/EvQlIMUPCvMARBiuwcqjg0yMkCAJsetR2ozqvf04FrGcwFnQkSZ4PJI7LdwBA/nnVWbgy7o6rH7mB9S2kgW/Qe6YW2HRAAbVayUql3t9AYJ1uRxpOt6LrdTHmN8eO9O0xEgKXSXVQrcfMZ/HEHVaPeuAFJJ3k5TXpgV9Q9FtBQkx+tFqRpflc6/jDKB5ZEdP2fdxcMRc/CRPosx4oRwFYI8kMju4uGYkPOve2rHzo8368VisbTb2vd1vAQIuh08VR6eob/ilqpGgE822rSWWj3i/u6soHbWMauKunNOmsXdVmBbpjqBAIFYC7g8cnjs7/jHhXT3wFKNp6xzI2MXV0ZaasPqAxjIw7G1LMib1W52pw0joLurT3AhwNtKXEeUaZ2Zlomg2tNuJTFrV31kYhvBqtHabk3FdmsLeY0ugRiaFYU+UXs7g3NxpqFqLz+BIyKSl3RJpGtxNNTavETtkBqsohw/YgQG48t2LBqkUxbc9fAAoPORixJ1lPTW11QkYr5Xq72U7NsC+aguTkMQlMJf+NFzWEDiFEEsIHE8SBRKE/gJHOie2t2d3OeTouzBUexQb5FR5N4ERY4vdVAwPvbOYUxANMCEP4armh2gTuq1RpCybGXgfwABtIrlHzeAtoiJTXigKp7DkHNLURog0CSF6Q8GCMZ81pHaiQ4gcPB+OJ8+5G7lmWkcs9gNQSZjb3BOlYqJ5yoEARNMrioPeHbUjQpZ9g+gbPmkqqf0yw+p0EE1IDx0Zf9yZf5I8KGDuuo7l+xK1ThWXtK2Mv+AavQFC9np0+mrFazWHIg1+vspfXqaPq5qVUlCRYGlUoNjh/gCpIVSfbic0xmJugRkwEZtXqv2ym3dY+QIhpgCOdEZEb0AYWeRJppOg0umqA5XDLQvuaVAXPxGNsgEMomy5h8qxdVGTe+n4ExyOUywYY24QKCqcaAVcvn8H8kq66cq9eUcHg5UChH6Gx1oqm5rxIvEUFoV1eh6H4HqQBBlItS9CXhIbSaY6JFWfOmHlN6Cd0n1ic8XFOQrbPNUFmoAVtCIsy/Binct976y6yBTLG5h/MR2j+zRZdYdWTO0TAeyGSSmx04Mp/Wq3v7dGX9AsYwAz1oQEo1L1XF9uHBnG6GUMT0PWYNu33vAaxywlrToZaOfCZCrKHKkun2Xt7JF9zcA0XNI3XZCIhnFTmCQGSgwSK1/KruRv9UTHb7HRRQHmaVETKCjR51zEvTOz7aWBbOkOcCV9syPuk5KEhLVWZTq2/k9sXsoNMDmYB18clQpQrFRHuAmmXIPRw3e+cMFEj9UbhJRLj2HEjnB9drRNcQLEZq+sRQRQniuRq21e3XIcXJ+0Tq1slTBPBxHkkGNlMohVWOw5OboSGKnul9UaiKCC/G5WoViWO5PoJTTA++AcKhrnTIuttL7LrROcFkpMjfEmwKNIxiqkzFIfBdkGpC+AP2YzgDJ/jFK6kX+xYbvk6Ok3bB6HPCLhFP7DjVSqn7eD2eoAgXUyaY0tbbUBnFsOBzqnBYIdgYIAWHMi+8gdHL97XcubOvq9a9aXaVW+x7C8Eq0w1mqqWxH9IA5oaPkSUSS2dFEaFV1TnSbhwPGtXpzSuRtAA5x3grQzzlnQ55WI8WVCgjoVAihJoaTirkBSWvZ0wFy7MNAxGfgNglKjHhuxIx2tALv8oQef6OnQGTdgnk4YzvuCO4cf+sWFYBseGpshe0NuBevMA5IcbVP9YyaZA57X/V0U4xxtQ8iiPiMAdAXANxyQ9VsprQEjzmiU2q1lIURE7y/nDgCSHzpZ0N6jWq6vCgS4086AvtGiuTNqsvI2+lRRbIgu6sgbYUVT6PoxTunTYISYg+wun9BvyGZgZb6VRTIz+PhGABnpPAMRpkdAJU83aZN/YXaW1gpKFJa6csShTGTQYuzu0ZNJCXGStVEPZH5T6ur2QGkRBuMVlJL9YUg/a7KC+QiqrKSoTO3YCj4MlxcPGK+V54hT0UzcPCTIhQKNsubD2GpgBImCCmbCnGyUo/t5LUI6C1lpgmeFSl1tfY1N1RZ5/+hjP8FnhMnU4LiQFxLFCOEWUa1tetoYevTPcHIW+3uV6omGZ0L9bKgZO7YRR9QTeJcpATPFNjUELpNNgjjWtMGzUypVMow074s/EYSaOE4PByQ21j2fwVPATRVzn3qzh1qU8f9rarFSGS5zxkJFF55uAzqrhCIvBXXRfur7CLZiW5JBTtk3+5ArIdKuydAFfxlQ31OCjatNWJC396ZSemqllEdz+sduOQyUAUlgwTsPKzgOI642zYnEjQLV1gXqqaaC8GUQveflzJ3RUemlufY9YpWliqQh2NbOA2ATtn29/xQAYjneeQyNeGUXWrfW+cBat04B1URD0f3dwsdqcKrI3VIbXvp6vlJkx9GuI2LGrzHPWu6EZMft6Vei6RTkcBetg4PB6Q/J67CpYyhSPBtye15krrKDnV6qZhZoNYXRKovVD6pLUSCTz1surar0Vy2xXlPFtqSreXK04TH9e+Y1rvmGRBmp/0hVWOgynZlqYCKFm3ip4yoYKg/fHLj+ZKe0oBpO2QEKhKXcx1T5fcG8NIq9DaabnucvCzpOvZwRdwG/BCOGiLDdvoT8xpZPtKsUfFunbfArllOwBtI2i+QMgZ0kXcZI4aipbxbhZL7pfRTZ2PTqumZE9/2YIJ9n4BG2aWsnCGuWWdjuQ+R8t6gvOnGf/gRRBcxrbplpX0CFI1r65sHahFSCJkyBguyfOx+pDByJnsu2UsPxOLBrKHDYF+g6LY6PphNL0f7C5sohVsnTW0saGBJJJkVwTLG7e/EWzxpvBNuROUJuHg4ULK7FzJlDC5j8sJ7rSKF4I36oRecW2xH98q4ZqeJUQvK/boQm9zNtqiiKL4uZmUVhq97Z46VtJyxKyyc79knG3koiHFV5efFSC2Qh9O00xv3wNcWPScEXMapWhtUfWQKUrsZzu6sge/gk+nea3hLIzXM46h7OQjOhwiN927x1X1Q578IquF8+ANZTW7jmqtGkyxjo6VyPEvFeozLgOpugndv5HcM7JKs2/Ex+aW5YOQr4VQjRRbjfC4YY+yNIZgvGN/0b92X5Dcs68CZSNS6xLlEGAwfMC6deZYDNU4snvvd88b2dv+hnM/f5nR9khwxS57+Sh9jnIkHLiKbl0YG90ehHj95xtcVb7My47g8DPVb6w2Goxy+4kF11l7sTQSXix2tY7HigpnGdt0EAlpBSzJ8KKBpJaNCyRdDQJH73az3kmxQlWMkXtwMg4ujsxk6I4oY8fv7l5eXWq1GjfcsfV6pVIpGo8Vivb51cbh5UarF1SRIto0auxehHl+sGf5qadTIboX6LcXhOf60s7ODSwjJtdPEB54b/2C5RqkaA3k4riIHwDbuhOSLi5HPVgeoygSCLg58EEJGGERUvxb0G/Y/z6N4uCxiAmsoBxkJ9fjA+4T8LYMgAtqtdqmO+y8TTbzdX2JTNMcI5OG4TiP00ZCBvx3WGl8fslmndWRIraxPfufMDOM7fTJ55ZxbRatn2/uHP1BTD60a11gWqM4zownZTz9CHtPptEgUG/S/hGOo4KsNrfgl8Jk+TRsHlV6v8VVBXn7gFnHSKeB3PpZl/6eCryb6qTMAjc9ibyEz/2ssDTSV0RcdyggqM/v5kqxoARqfyY+GrPHnARnnMhTq/yCnB6YqddcT3xKBup5TK2m9in8uyPTSysQkt9STTdQ87RG+NwkyId7LbdT/fcM1viZIpIJty6SDX1SzbZ4BNV4TfFjbj18A1Rtvmfgafxr2W6WDN5dhksPR/cAL01EwbdfLjV83oEQCfttY48/DdjnhidqOtoOve83Ny36meh+BHne4GlvjT0NABib4wjlryNB7AiycD6vwDNf4hpioekdRJL98u3GssRJ+BpLkudUKm9b4doD6Yf20LD9sjW+MDlQE9rBexv8RgFbMcKXvq6zx7aCDbE4d66t8fGyNb4UdmAbYfXpa6VuAa3wbTOYVhO6sUiS2xjdCbB6pd2ftdPwvYIgDKKMOCmsr538Dg6cPO2o8PP3V41sjJAaJgRKJtYXzN8b/A4snjFA7siUUAAAAAElFTkSuQmCC"
              alt="Prosol"
              height={48}
            />
            <img
              className="logo-images col-span-2 max-h-12 w-full object-contain lg:col-span-1 "
              src={Hoegner}
              alt="Hoegner"
              height={48}
            />
            <img
              className="logo-images col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={Ulber}
              alt="Ulber"
              height={48}
            />
            <img
              className="logo-images col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src={Raab}
              alt="Raab"
              height={48}
            />
          </div>
        </div>
      </div>

      <div className="container-faq">
        <BackgroundGradientAnimation className="z-0">
          <div className="flex flex-col sm:p-20 p-4">
            <h1 className="text-3xl sm:text-6xl mb-7 font-bold z-10 mt-7">
              Noch Fragen?
            </h1>
            <Accordion
              type="single"
              collapsible
              className="overflow-x-auto w-full z-10 mt-0"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Werden nachhaltige Produkte verwendet?
                </AccordionTrigger>
                <AccordionContent>
                  Wir sind ein nachhaltiger Malerbetrieb und verwenden Produkte,
                  die umweltfreundlich hergestellt werden, wie Farben und Lacke
                  mit geringem VOC-Gehalt (flüchtige Organische Verbindungen)
                  und Lösungsmittelfreie Alternativen.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Kann beim Ausräumen vor dem Anstrich geholfen werden?
                </AccordionTrigger>
                <AccordionContent>
                  Gerne sind wir bereit, Ihnen beim Aus- und Einräumen
                  behilflich zu sein.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Hat der Betrieb eine professionelle Ausstattung?
                </AccordionTrigger>
                <AccordionContent>
                  Unser Betrieb verfügt über hochwertige Werkzeuge, Geräte und
                  Materialien, um eine qualitativ hochwertige Arbeit zu
                  gewährleisten.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Zuverlässigkeit und Pünktlichkeit?
                </AccordionTrigger>
                <AccordionContent>
                  Wir halten Termine ein und arbeiten effizient, um den Zeitplan
                  einzuhalten.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Kundenorientierung?</AccordionTrigger>
                <AccordionContent>
                  Ein ausgezeichneter Kundenservice ist uns sehr wichtig, ebenso
                  wie die Berücksichtigung der Bedürfnisse und Wünsche unserer
                  Kunden.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Sauberkeit und Ordnung?</AccordionTrigger>
                <AccordionContent>
                  Wir halten die Baustelle sauber und ordentlich, sowohl während
                  als auch nach der Arbeit.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </BackgroundGradientAnimation>
      </div>

      <ContactNew />
    </>
  );
}

export default Home;
