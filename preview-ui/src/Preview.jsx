import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import React from "react";

const Sudoku = () => {
  const renderGrid = () => {
    const grid = [];
    for (let i = 0; i < 9; i++) {
      const row = [];
      for (let j = 0; j < 9; j++) {
        row.push(
          <Input
            key={`${i}-${j}`}
            className="w-10 h-10 text-center border border-gray-300"
            maxLength={1}
          />
        );
      }
      grid.push(
        <div key={i} className="flex">
          {row}
        </div>
      );
    }
    return grid;
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Sudoku</h1>
      <div className="grid grid-cols-9 gap-1 mb-4">{renderGrid()}</div>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <Button key={num} className="w-10 h-10">
            {num}
          </Button>
        ))}
      </div>
      <div className="flex space-x-2">
        <Button>New Game</Button>
        <Button>Check</Button>
        <Button>Solve</Button>
      </div>
    </div>
  );
};

export default Sudoku;