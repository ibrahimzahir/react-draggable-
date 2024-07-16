import React from 'react';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import { Place } from './Place';

export const Column = ({ places }) => {
  return (
    <div className="flex flex-col rounded-md px-32">
      <SortableContext items={places} strategy={verticalListSortingStrategy}>
        {places.map((place) => (
          <Place key={place.id} id={place.id} title={place.title} />
        ))}
      </SortableContext>
    </div>
  );
};
