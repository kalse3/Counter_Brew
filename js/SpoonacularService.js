const BASE = 'https://api.spoonacular.com/recipes';

export class SpoonacularService {
  #apiKey;
  #searchCache = new Map();
  #detailCache = new Map();

  constructor(apiKey) {
    this.#apiKey = apiKey;
  }

  async search(query, offset = 0, number = 9) {
    const cacheKey = `${query}|${offset}`;
    if (this.#searchCache.has(cacheKey)) {
      return this.#searchCache.get(cacheKey);
    }

    const url = new URL(`${BASE}/complexSearch`);
    url.searchParams.set('query', query);
    url.searchParams.set('number', number);
    url.searchParams.set('offset', offset);
    url.searchParams.set('apiKey', this.#apiKey);

    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Search failed (${res.status}). You may have hit the daily API limit.`);
    }

    const data = await res.json();
    const result = { results: data.results, totalResults: data.totalResults };
    // Only cache responses that contain at least one result so that a query
    // returning nothing can retry the API on the next search.
    if (data.results.length > 0) {
      this.#searchCache.set(cacheKey, result);
    }
    return result;
  }

  async getDetails(id) {
    if (this.#detailCache.has(id)) {
      return this.#detailCache.get(id);
    }

    const url = new URL(`${BASE}/${id}/information`);
    url.searchParams.set('includeNutrition', 'false');
    url.searchParams.set('apiKey', this.#apiKey);

    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could not load recipe details (${res.status}).`);
    }

    const data = await res.json();
    this.#detailCache.set(id, data);
    return data;
  }
}
