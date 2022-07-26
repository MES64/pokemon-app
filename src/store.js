import { makeObservable, observable, computed } from 'mobx';

class Store {
    pokemon = [];
    filter = "";
    selectedItem = null;

    constructor() {
        makeObservable(this, {
            pokemon: observable,
            filter: observable,
            selectedItem: observable,
            filteredPokemon: computed,
        });
    }

    get filteredPokemon() {
        return this.pokemon
        .filter((pokemon) => 
            pokemon.name.english
            .toLowerCase()
            .includes(this.filter.toLowerCase())
        )
    }

    setPokemon(pokemon) {
        this.pokemon = pokemon;
    }

    setFilter(filter) {
        this.filter = filter;
    }

    setSelectedItem(selectedItem) {
        this.selectedItem = selectedItem;
    }
}

const store = new Store();

fetch("/pokemon-app/pokemon.json")
    .then((resp) => resp.json())
    .then((pokemon) => store.setPokemon(pokemon));

export default store;