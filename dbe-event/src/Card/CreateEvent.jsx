import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  MapPin,
  Users,
  Sparkles,
} from "lucide-react";

import { events } from "../calendar";

import "./CreateEvent.css";

export default function CreateEvent() {
  const [title, setTitle] = useState("Neon Night");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("Le Cargo - Salle A");
  const [places, setPlaces] = useState(30);
  const [description, setDescription] = useState("");

  const [category, setCategory] = useState("SOIRÉE");
  const [color, setColor] = useState("red");

  const categories = [
    "SOIRÉE",
    "SPORT",
    "JEUX-VIDÉO",
    "CULTURE",
    "AUTRE",
  ];

  const colors = [
    { name: "red", value: "#ff0000" },
    { name: "green", value: "#079447" },
    { name: "blue", value: "#086bc9" },
    { name: "orange", value: "#f5aa00" },
  ];

  // Permet de vérifier si la date correspond à un événement existant
  const existingEvent = events.find(
    (event) => Number(event.day) === Number(date.split("-")[2])
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEvent = {
      title,
      date,
      time,
      location,
      places,
      description,
      category,
      color,
    };

    console.log("Nouvel événement :", newEvent);
  };

  return (
    <div className="create-event-page">

      {/* RETOUR */}
      <a href="#" className="back-link">
        <ArrowLeft size={15} />
        RETOUR AU TABLEAU DE BORD
      </a>

      {/* TITRE */}
      <div className="page-heading">
        <span>NOUVEL ÉVÉNEMENT</span>

        <h1>
          CRÉER UN
          <br />
          <strong>ÉVÉNEMENT.</strong>
        </h1>
      </div>

      <div className="create-event-layout">

        {/* =========================
            FORMULAIRE
        ========================= */}

        <form
          className="event-form"
          onSubmit={handleSubmit}
        >

          {/* TITRE */}
          <div className="form-group full-width">
            <label>TITRE DE L'ÉVÉNEMENT</label>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* DATE + HEURE */}
          <div className="form-grid">

            <div className="form-group">
              <label>DATE</label>

              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>HEURE</label>

              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>

          </div>

          {/* LIEU + PLACES */}
          <div className="form-grid">

            <div className="form-group">
              <label>LIEU</label>

              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>PLACES DISPONIBLES</label>

              <input
                type="number"
                value={places}
                onChange={(e) => setPlaces(e.target.value)}
                min="1"
              />
            </div>

          </div>

          {/* DESCRIPTION */}
          <div className="form-group full-width">
            <label>DESCRIPTION</label>

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Quelques lignes pour donner envie..."
            />
          </div>

          {/* CATEGORIE */}
          <div className="form-group">
            <label>CATÉGORIE</label>

            <div className="category-list">
              {categories.map((item) => (
                <button
                  type="button"
                  key={item}
                  className={
                    category === item
                      ? "category active"
                      : "category"
                  }
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* COULEUR */}
          <div className="form-group">
            <label>COULEUR DE LA CARTE</label>

            <div className="color-list">

              {colors.map((item) => (
                <button
                  type="button"
                  key={item.name}
                  className={
                    color === item.name
                      ? "color-choice selected"
                      : "color-choice"
                  }
                  style={{
                    backgroundColor: item.value,
                  }}
                  onClick={() => setColor(item.name)}
                  aria-label={item.name}
                />
              ))}

            </div>
          </div>

          <div className="form-footer">

            <button
              type="button"
              className="cancel-button"
            >
              Annuler
            </button>

            <button
              type="submit"
              className="publish-button"
            >
              PUBLIER L'ÉVÉNEMENT
              <ArrowRight size={16} />
            </button>

          </div>

        </form>

        {/* =========================
            APERÇU
        ========================= */}

        <div className="preview-container">

          <div className="preview-label">
            APERÇU
          </div>

          <div
            className={`event-preview ${color}`}
          >

            {/* HEADER */}
            <div className="preview-cover">

              <div className="preview-date">

                <strong>
                  {date
                    ? new Date(`${date}T00:00:00`)
                        .getDate()
                        .toString()
                        .padStart(2, "0")
                    : "24"}
                </strong>

                <span>
                  {date
                    ? new Date(`${date}T00:00:00`)
                        .toLocaleDateString("fr-FR", {
                          month: "short",
                        })
                        .replace(".", "")
                        .toUpperCase()
                    : "SEP"}
                </span>

              </div>

              <Sparkles className="preview-icon" />

              <div className="preview-tag">
                {category}
              </div>

            </div>

            {/* CONTENU */}
            <div className="preview-content">

              <h2>
                {title || "TITRE DE L'ÉVÉNEMENT"}
              </h2>

              <div className="preview-info">

                <div>
                  <CalendarDays size={14} />

                  <span>
                    {date
                      ? new Date(`${date}T00:00:00`)
                          .toLocaleDateString("fr-FR", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })
                      : "24 septembre 2026"}
                  </span>
                </div>

                <div>
                  <Clock3 size={14} />

                  <span>
                    {time || "21:00"}
                  </span>
                </div>

                <div>
                  <MapPin size={14} />

                  <span>
                    {location || "Le Cargo - Salle A"}
                  </span>
                </div>

                <div>
                  <Users size={14} />

                  <span>
                    {places || 30} places
                  </span>
                </div>

              </div>

            </div>

          </div>

          {/* INFO EVENT EXISTANT */}
          {existingEvent && (
            <div className="existing-event">
              Événement existant le {existingEvent.day} :{" "}
              <strong>{existingEvent.title}</strong>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
