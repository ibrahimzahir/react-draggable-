import { useState } from 'react';
import {
  ChevronDownIcon,
  Bars2Icon,
  XMarkIcon,
  TrashIcon,
} from '@heroicons/react/20/solid';

import { closestCorners, DndContext } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { Column } from './components/Column';

function App() {
  const [places, setPlaces] = useState([
    { id: 1, title: 'Place 1' },
    { id: 2, title: 'Place 2' },
    { id: 3, title: 'Place 3' },
  ]);

  const getPlacesPosition = (id) =>
    places.findIndex((places) => places.id === id);
  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    setPlaces((places) => {
      const originalPosition = getPlacesPosition(active.id);
      const newPosition = getPlacesPosition(over.id);
      return arrayMove(places, originalPosition, newPosition);
    });
  };
  return (
    <div className="px-12 py-24 h-screen items-center justify-center">
      <div className="overflow-hidden rounded-lg bg-white shadow">
        {/* card header */}
        <div className="flex justify-between items-center w-full p-4">
          <h1>Categories</h1>
          <XMarkIcon className="w-5 h-5" />
        </div>
        {/* card body */}

        <DndContext
          onDragEnd={handleDragEnd}
          collisionDetection={closestCorners}
        >
          <div className="flex justify-between max-w-2xl gap-x-3 p-4">
            <div className="sm:col-span-2">
              <div className="mt-2">
                <Bars2Icon className="h-5 2-5" />
              </div>
            </div>
            <div className="flex items-center justify-between rounded-lg border px-2">
              <div className="flex-1">
                <input
                  id="color-code"
                  name="color-code"
                  type="color"
                  autoComplete="color-code"
                  className="w-10 h-10 rounded-lg"
                />
              </div>
              <div className="">
                <ChevronDownIcon className="h-5 2-5" />
              </div>
            </div>
            <div className="">
              <div className="mt-2">
                <input
                  id="postal-code"
                  name="postal-code"
                  type="text"
                  autoComplete="postal-code"
                  placeholder="Magey vinares flat"
                  className=" w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="mt-2">
                <TrashIcon className="w-5 h-5" />
              </div>
            </div>
          </div>
          <Column places={places} />
        </DndContext>

        {/* card footer */}
        <div>
          <button>Button</button>
        </div>
      </div>
    </div>
  );
}

export default App;
