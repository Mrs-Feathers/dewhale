import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import React from "react";

const SudokuGame = () => {
  const renderGrid = () => {
    const grid = [];
    for (let row = 0; row < 9; row++) {
      const cells = [];
      for (let col = 0; col < 9; col++) {
        cells.push(
          <div key={`${row}-${col}`} className="border p-2">
            <Input className="w-full text-center" maxLength={1} />
          </div>
        );
      }
      grid.push(
        <div key={row} className="grid grid-cols-9 gap-1">
          {cells}
        </div>
      );
    }
    return grid;
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-white p-4 shadow-md">
        <h1 className="text-center text-2xl font-bold">Sudoku Game</h1>
      </header>
      <main className="flex-1 overflow-y-auto p-4 flex">
        <div className="flex-1 grid grid-cols-1 gap-4">
          {renderGrid()}
        </div>
        <aside className="w-64 p-4 bg-white shadow-md">
          <div className="mb-4">
            <Button className="w-full">New Game</Button>
          </div>
          <div className="mb-4">
            <Button className="w-full">Check Solution</Button>
          </div>
          <div className="mb-4">
            <Button className="w-full">Reset</Button>
          </div>
          <Separator className="my-4" />
          <div className="mb-4">
            <Label htmlFor="difficulty">Difficulty</Label>
            <Input id="difficulty" className="w-full" placeholder="Easy, Medium, Hard" />
          </div>
        </aside>
      </main>
      <footer className="bg-white p-4 shadow-md text-center">
        <p>Footer content goes here.</p>
      </footer>
    </div>
  );
};

export default SudokuGame;