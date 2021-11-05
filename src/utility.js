import { useEffect, useRef } from "react";

// Finds the player position.
// Only runs once, to be kept in state.
export function whereIsPlayer(grid) {
  // Starts at the bottom row, since the player spawns on the lower end.
  for (let playerRow = grid.length - 1; playerRow >= 0; playerRow--) {
    for (let playerCol = 0; playerCol < grid[0].length; playerCol++) {
      if (grid[playerRow][playerCol].type === 'player') {
        return {playerRow, playerCol}
      }
    }
  }
}

// Equivalent of setInterval for React.
export const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};