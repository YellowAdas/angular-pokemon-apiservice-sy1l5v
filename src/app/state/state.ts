import { createSelector } from '@ngrx/store/src/selector';
import {
  pokemonDetailFeatureKey,
  PokemonDetailState,
  selectDetails,
} from '../pokemon-detail/PokemonDetailStore/detailsReducers';
import {
  pokemonListFeatureKey,
  PokemonListState,
} from '../pokemon-list/store/listReducers';

import { pokemonAbilitiesFatureKey, PokemonAbilitiesState, selectPokemonAbilities } from './abilities/abilities.reducer';

export interface AppState {
  [pokemonListFeatureKey]: PokemonListState;
  [pokemonDetailFeatureKey]: PokemonDetailState;
  [pokemonAbilitiesFatureKey]: PokemonAbilitiesState;
}