import React, { useState } from "react";

const checklistData = [
  {
    chapter: "SEO META",
    items: [
      { id: 1, text: "title", type: "done", description: "Użyj wtyczki SEO META in 1 CLICK do pobrania treści" },
      { id: 2, text: "description", type: "done", description: "Użyj wtyczki SEO META in 1 CLICK do pobrania treści" },
    ],
  },
  {
    chapter: "TEASER INFORMATION",
    items: [
      { id: 3, text: "heading", type: "done", description: "Znajdź odpowiednią wersję językową w pliku CA-pages-meta" },
      { id: 4, text: "description", type: "done", description: "Znajdź odpowiednią wersję językową w pliku CA-pages-meta" },
    ],
  },
  {
    chapter: "TITLE",
    items: [{ id: 5, text: "title", type: "done", description: "Zmień główny tytuł strony na nowy język" }],
  },
  {
    chapter: "HEADER",
    items: [
      { id: 6, text: "heading", type: "done", description: "Zmień tytuł headera na nowy język" },
      { id: 7, text: "subheading", type: "done/nd", description: "Jeśli jest, zmień podtytuł headera na nowy język" },
    ],
  },
  {
    chapter: "INTRODUCTION",
    items: [{ id: 8, text: "introduction", type: "done/nd", description: "Jeśli jest, wklej treść w nowym języku" }],
  },
  {
    chapter: "BODY",
    items: [
      { id: 9, text: "sections", type: "done/nd", description: "Podmień wszystkie teksty na nowy język z zachowaniem oryginalnego podziału na sekcje. Pamiętaj zarówno o body, jak i o heading w section" },
      { id: 10, text: "accordions", type: "done/nd", description: "Zmień tytuły panelów w danym accordionie" },
      { id: 11, text: "cards", type: "done/nd", description: "➡️Jeśli karta miała podpięte istniejące entry, to Contentstack automatycznie wyłapuje nową wersję w odpowiednim języku i nic nie trzeba robić. \n ➡️Jeśli w karcie mieliśmy broszurę, to należy ją podmienić zgodnie z procedurą umieszczania broszur." },
      { id: 12, text: "buttons", type: "done/nd", description: "➡️Jeśli przycisk kieruje do strony zewnętrznej innej niż w EN Master, to zmieniamy napisz na przycisku i wklejamy nowy link. \n ➡️Jeśli przycisk kieruje do jakiejś podstrony, to zmieniamy tylko napis na przycisku - poprawnie podpięte entry powinno samo wykryć analogiczną lokalizację podstrony w danej wersji językowej. \n ➡️Jeśli przycisk posiada podpiętą broszurę, to zmieniamy zarówno napis na przycisku, jak i wgrywamy nowy plik zgodnie z procedurą umieszczania broszur." },
      { id: 13, text: "videos", type: "done/nd", description: "Zweryfikuj czy w nowej wersji językowej nie ma nowego filmiku => jeśli tak, to pamiętaj, aby skopiować EMBED link i nadać właściwy dla danego języka tytuł i opis filmu." },
      { id: 14, text: "images", type: "done/nd", description: "Należy zwrócić uwagę czy obraz jest uniwersalny czy ma różne wersje językowe. \n Jeśli na obrazku są napisy, to najpewniej powinien on mieć swój odpowiednik dla każdej wersji językowej => należy podpiąć i zlokalizować nowe entry dla konkretnej wersji językowej." },
      { id: 15, text: "brochures", type: "done/nd", description: "Wgraj nowe broszury do odpowiedniej lokalizacji na Contentstacku (folder Brochures/...) i dopiero wtedy podepnij nowe entry, lokalizując je dla konkretnej wersji językowej => pamiętaj o nowym tytule i description." },
    ],
  },
];

const Checklist = () => {
  const [checklist, setChecklist] = useState(checklistData);
  const [descriptionsVisible, setDescriptionsVisible] = useState(true);

  const handleCheck = (chapterIndex, itemIndex) => {
    const newChecklist = [...checklist];
    newChecklist[chapterIndex].items[itemIndex].checked =
      !newChecklist[chapterIndex].items[itemIndex].checked;
    setChecklist(newChecklist);
  };

  const resetChecklist = () => {
    alert("Good job, jedziemy dalej 😄🎉");
    window.location.reload();
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>CHECKLISTA CONTENTSTACK<br></br>❗️zlokalizuj nową wersję językową❗️</h1>
      {checklist.map((chapter, chapterIndex) => (
        <div key={chapter.chapter}>
          <h2>{chapter.chapter}</h2>
          {chapter.items.map((item, itemIndex) => (
            <div key={item.id} style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                checked={!!item.checked}
                onChange={() => handleCheck(chapterIndex, itemIndex)}
              />
              <span style={{ marginLeft: "8px" }}>{item.text}</span>
              {descriptionsVisible && (
                <p style={{ marginLeft: "10px", fontSize: "12px", color: "gray" }}>
                  {item.description.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              )}
            </div>
          ))}
        </div>
      ))}
      <button onClick={resetChecklist} style={{ display: "block", margin: "20px auto" }}>
        ZAKOŃCZ
      </button>
      <button
        onClick={() => setDescriptionsVisible(!descriptionsVisible)}
        style={{ display: "block", margin: "10px auto", fontSize: "14px" }}
      >
        {descriptionsVisible ? "Zwiń opisy" : "Rozwiń opisy"}
      </button>
    </div>
  );
};

const App = () => {
  return <Checklist />;
};

export default App;
