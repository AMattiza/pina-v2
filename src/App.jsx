import { useState } from "react";

export default function App() {
  const [params, setParams] = useState({
    months: 120,
    newCustomers: 10,
    reorderRate: 100,
    reorderCycle: 6,
    vePerDisplay: 32,
    licensePerVE: 1,
    license2PerVE: 0.5,
    license2Threshold: 500,
    growthRate: 0,
    costPackaging: 3.75,
    costPralines: 3.15,
    licenseCostInternalPerVE: 0.10,
    priceToRetailer: 12.9,
    uvp: 19.9
  });

  const handleChange = (key, value) => {
    setParams({ ...params, [key]: parseFloat(value) });
  };

  const inputGroups = [
    {
      title: "📈 Markt & Nachfrage",
      fields: [
        ["Neukunden/Monat", "newCustomers", "Anzahl neuer Kunden pro Monat"],
        ["Nachbestellrate (%)", "reorderRate", "Wiederkaufrate in Prozent"],
        ["Nachbestellzyklus (Monate)", "reorderCycle", "Zyklus der Nachbestellungen"],
        ["Wachstumsrate (%/Jahr)", "growthRate", "Erwartetes Wachstum pro Jahr"]
      ]
    },
    {
      title: "📦 Produkt & Verpackung",
      fields: [
        ["VE pro Display", "vePerDisplay", "Verkaufseinheiten pro Display"],
        ["Verpackungskosten (€)", "costPackaging", "Verpackungskosten pro VE"],
        ["Pralinenkosten (€)", "costPralines", "Pralinenkosten pro VE"]
      ]
    },
    {
      title: "💶 Preis & Handel",
      fields: [
        ["Händlerpreis/VE (€)", "priceToRetailer", "Verkaufspreis an Handel"],
        ["UVP (€)", "uvp", "Unverbindliche Preisempfehlung"]
      ]
    },
    {
      title: "🔐 Lizenzen",
      fields: [
        ["Lizenz 1 pro VE (€)", "licensePerVE", "Agenturlizenz für Postkarte"],
        ["Lizenz 2/VE (€)", "license2PerVE", "Zusatzlizenz für digitale Inhalte"],
        ["Lizenz 2 ab Kundenanzahl", "license2Threshold", "Schwelle für Zusatzlizenz"],
        ["Interne Lizenzkosten (€)", "licenseCostInternalPerVE", "Druck etc."]
      ]
    },
    {
      title: "🗓️ Zeitraum",
      fields: [
        ["Simulationszeitraum (Monate)", "months", "Planungshorizont in Monaten"]
      ]
    }
  ];

  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem", maxWidth: "1000px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>🍫 Pralinenplanung für Pina</h1>
      <p>Konfiguriere hier dein Szenario:</p>

      {inputGroups.map(group => (
        <div key={group.title} style={{ margin: "2rem 0" }}>
          <h2 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>{group.title}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1rem" }}>
            {group.fields.map(([label, key, tooltip]) => (
              <label key={key} title={tooltip} style={{ display: "flex", flexDirection: "column", fontSize: "0.9rem" }}>
                {label}
                <input
                  type="number"
                  step="any"
                  value={params[key]}
                  onChange={e => handleChange(key, e.target.value)}
                  style={{
                    padding: "0.5rem",
                    marginTop: "0.25rem",
                    borderRadius: "8px",
                    border: "1px solid #ccc"
                  }}
                />
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
