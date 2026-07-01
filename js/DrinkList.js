export class DrinkList {
  #container;
  #countEl;
  #drinks;
  #filters = { temp: 'all', brewMethod: 'all', milk: 'all', sweetness: 'all' };

  constructor(containerEl, allDrinks) {
    this.#container = containerEl;
    this.#countEl   = document.getElementById('result-count');
    this.#drinks    = allDrinks;
  }

  init() {
    document.getElementById('filter-temp')
      .addEventListener('change', e => { this.#filters.temp = e.target.value; this.#render(); });
    document.getElementById('filter-brewMethod')
      .addEventListener('change', e => { this.#filters.brewMethod = e.target.value; this.#render(); });
    document.getElementById('filter-milk')
      .addEventListener('change', e => { this.#filters.milk = e.target.value; this.#render(); });
    document.getElementById('filter-sweetness')
      .addEventListener('change', e => { this.#filters.sweetness = e.target.value; this.#render(); });
    document.getElementById('filter-reset')
      .addEventListener('click', () => this.#resetFilters());
    this.#render();
  }

  #resetFilters() {
    this.#filters = { temp: 'all', brewMethod: 'all', milk: 'all', sweetness: 'all' };
    document.getElementById('filter-temp').value        = 'all';
    document.getElementById('filter-brewMethod').value  = 'all';
    document.getElementById('filter-milk').value        = 'all';
    document.getElementById('filter-sweetness').value   = 'all';
    this.#render();
  }

  #applyFilters() {
    return this.#drinks.filter(d => {
      if (this.#filters.temp !== 'all' && d.temp !== this.#filters.temp) return false;
      if (this.#filters.brewMethod !== 'all' && d.brewMethod !== this.#filters.brewMethod) return false;
      if (this.#filters.milk === 'none' && d.milk !== 'none') return false;
      if (this.#filters.milk === 'some' && d.milk === 'none') return false;
      if (this.#filters.sweetness !== 'all' && d.sweetness !== this.#filters.sweetness) return false;
      return true;
    });
  }

  #renderCard(drink, index = 0) {
    const tempIcon  = drink.temp === 'hot' ? 'bi-fire' : 'bi-snow';
    const tempLabel = drink.temp === 'hot' ? 'Hot' : 'Iced';
    const strengthLabel = drink.strength.charAt(0).toUpperCase() + drink.strength.slice(1) + ' brew';
    const steps = drink.method.map(s => `<li>${s}</li>`).join('');

    return `
      <div class="col drink-card-enter" style="animation-delay:${index * 35}ms">
        <div class="card drink-card h-100">
          <div class="card-header d-flex flex-wrap gap-2 align-items-center">
            <span class="badge drink-badge--temp">
              <i class="bi ${tempIcon}"></i> ${tempLabel}
            </span>
            <span class="badge drink-badge--strength">${strengthLabel}</span>
          </div>
          <div class="card-body">
            <h5 class="card-title">${drink.name}</h5>
            <dl class="drink-attrs">
              <dt>Brew method</dt> <dd>${drink.brewMethod}</dd>
              <dt>Milk</dt>        <dd>${drink.milk}</dd>
              <dt>Sweetness</dt>   <dd>${drink.sweetness}</dd>
              <dt>Equipment</dt>   <dd>${drink.equipment.join(', ')}</dd>
            </dl>
          </div>
          <div class="card-footer bg-transparent border-0 pb-3">
            <button class="btn btn-sm drink-card__method-btn w-100"
                    data-bs-toggle="collapse"
                    data-bs-target="#method-${drink.id}"
                    aria-expanded="false"
                    aria-controls="method-${drink.id}">
              How to make <i class="bi bi-chevron-down"></i>
            </button>
            <div class="collapse" id="method-${drink.id}">
              <ol class="method-steps mt-2 mb-0">
                ${steps}
              </ol>
            </div>
          </div>
        </div>
      </div>`;
  }

  #render() {
    const filtered = this.#applyFilters();

    this.#countEl.classList.remove('result-count--flash');
    void this.#countEl.offsetWidth; // force reflow so removing + re-adding the class re-triggers the animation
    this.#countEl.textContent = `Showing ${filtered.length} of ${this.#drinks.length} drinks`;
    this.#countEl.classList.add('result-count--flash');

    if (filtered.length === 0) {
      this.#container.innerHTML = `
        <div class="col-12 drink-card-enter">
          <div class="empty-state text-center py-5">
            <i class="bi bi-cup-hot empty-state__icon d-block mb-3"></i>
            <p class="lead mb-1">No drinks match your filters.</p>
            <p class="text-muted mb-0">Try adjusting or resetting the filters above.</p>
          </div>
        </div>`;
      return;
    }

    this.#container.innerHTML = filtered.map((d, i) => this.#renderCard(d, i)).join('');
  }
}
