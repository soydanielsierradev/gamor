import axios from "axios";
import { create } from "zustand";

interface GameState {
  initial: boolean;
  loading: boolean;
  games: any;
  selectedGame: any;
  empty: boolean;
  getGame: (dato: any, platform: any) => void;
  setLoading: () => void;
  setInitial: () => void;
  setEmpty: () => void;
  selectGame: (game: any) => void;
  setSelectedGame: (game: any) => void;
}

export const useGameStore = create<GameState>((set, get) => ({
  initial: true,
  loading: false,
  empty: false,
  selectedGame: {},
  games: [],
  setLoading: () => {
    set({ loading: true });
  },
  setInitial: () => {
    set({ initial: false });
  },
  setEmpty: () => {
    set({ empty: false });
  },
  setSelectedGame: () => {
    set({ selectedGame: {
      id: 1,
      name: "Select a game",
      description: "00-00-0000",
      genres: "Empty",
    } });
  },
  getGame: async function getdata(dato: any, platform: any) {
    axios
      .get(
        `https://api.rawg.io/api/games?key=${
          import.meta.env.VITE_API_KEY
        }&search=${dato}&platforms=${platform}`
      )
      .then((response) => {
        if (response.data.results.length === 0) {
          set({ loading: false });
          set({ empty: true });
        } else {
          set({ games: response.data.results });
          set({ loading: false });
          console.log(response.data.results);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  selectGame: (game: any) => {
    const { games } = get();

    const selected = games.find((item: any) => item.id === game);
    set({ selectedGame:{
      id: selected.id,
      name: selected.name,
      description: selected.released,
      genres: selected.genres[0].name,
    } });
    console.log(games.find((item: any) => item.id === game));
    
  },
}));
