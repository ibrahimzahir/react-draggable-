import React from 'react';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import { Place } from './Place';

export const Column = ({ places }) => {
  return (
    <div className="w-64 flex flex-col bg-slate-100 border rounded-md px-4 py-5">
      <SortableContext items={places} strategy={verticalListSortingStrategy}>
        {places.map((place) => (
          <Place key={place.id} id={place.id} title={place.title} />
        ))}
      </SortableContext>
    </div>
  );
};
