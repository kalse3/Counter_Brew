// Your 15+ curated drinks go here — objects you author yourself.
// Delete the three PLACEHOLDER entries below and replace with your real, hand-written entries.
//
// Schema (matches CLAUDE.md):
// {
//   id:         "cold-brew",       // unique kebab-case slug
//   name:       "Cold brew",
//   brewMethod: "cold steep",      // MUST be one of the six canonical values:
//                                  //   "moka pot" | "french press" | "pour-over"
//                                  //   "cold steep" | "boiled" | "instant/whisked"
//   milk:       "none",            // none / steamed / foamed / condensed / oat / ...
//   temp:       "iced",            // hot | iced
//   sweetness:  "none",            // none | low | sweet
//   strength:   "medium",          // light | medium | strong
//   equipment:  ["jar", "filter"],
//   method:     ["Step 1 ...", "Step 2 ..."],  // ordered home instructions (steps array)
//   notes:      ""                 // your own tasting note / origin (you author this)
// }

export const drinks = [

  // PLACEHOLDER A — moka pot · hot · no milk · no sweetness
  {
    id:         "placeholder-a",
    name:       "Placeholder Drink A",
    brewMethod: "moka pot",
    milk:       "none",
    temp:       "hot",
    sweetness:  "none",
    strength:   "medium",
    equipment:  ["moka pot", "stovetop"],
    method:     ["Step 1: do something.", "Step 2: do something else."],
    notes:      ""
  },

  // PLACEHOLDER B — cold steep · iced · with milk · low sweetness
  {
    id:         "placeholder-b",
    name:       "Placeholder Drink B",
    brewMethod: "cold steep",
    milk:       "steamed",
    temp:       "iced",
    sweetness:  "low",
    strength:   "light",
    equipment:  ["jar", "filter", "glass"],
    method:     ["Step 1: do something.", "Step 2: do something else."],
    notes:      ""
  },

  // PLACEHOLDER C — french press · hot · foamed milk · sweet
  {
    id:         "placeholder-c",
    name:       "Placeholder Drink C",
    brewMethod: "french press",
    milk:       "foamed",
    temp:       "hot",
    sweetness:  "sweet",
    strength:   "strong",
    equipment:  ["french press", "frother"],
    method:     ["Step 1: do something.", "Step 2: do something else.", "Step 3: serve."],
    notes:      ""
  }

];
