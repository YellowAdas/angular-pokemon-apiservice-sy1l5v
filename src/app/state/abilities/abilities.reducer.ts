import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import {
  Action,
  createReducer,
  createSelector,
  createFeatureSelector,
  on,
} from '@ngrx/store';
import { AbilityProps } from '../../pokemon-details.model';
import * as AbilitiesActions from './abilities.actions';
import { AppState } from '../../state/state';



export interface PokemonAbilitiesState extends EntityState<AbilityProps> {
  // additional state property
  isLoaded: boolean;
}

export const adapter: EntityAdapter<AbilityProps> =
  createEntityAdapter<AbilityProps>({selectId: (ability)=> ability.name});

export const initialState: PokemonAbilitiesState = adapter.getInitialState({
  // additional entity state properties
  isLoaded: false,
});

export const pokemonAbilitiesReducer = createReducer(
  initialState,
  on(AbilitiesActions.loadAbilitiesSuccess, (state, { abilityProps }) => {
    return adapter.setAll(abilityProps, { ...state, isLoaded: true });
  })
);



const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const pokemonAbilitiesFatureKey = 'PokemonAbilities';

export const selectPokemonAbilitiesState = createFeatureSelector<
  AppState,
  PokemonAbilitiesState
>(pokemonAbilitiesFatureKey);

export const selectPokemonAbilities = createSelector(
  selectPokemonAbilitiesState,
  selectEntities
);

export const pokemonAbilitiesIsLoaded = createSelector(
  selectPokemonAbilitiesState,
  (state) => state.isLoaded
);

