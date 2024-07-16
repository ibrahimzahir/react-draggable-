import React from 'react';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { Bars2Icon } from '@heroicons/react/20/solid';

export const Place = ({ id, title }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="flex items-center"
    >
      <Bars2Icon className="h-5 2-5" />
      <div className="p-4 text-sm text-gray-700">{title}</div>
    </div>
  );
};
