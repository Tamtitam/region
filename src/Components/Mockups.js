import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DndContext, closestCenter, MouseSensor, TouchSensor } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, horizontalListSortingStrategy } from '@dnd-kit/sortable';
import { arrayMove } from '@dnd-kit/sortable';
import Mockup from './Mockup';

const Mockups = () => {
  const [mockups, setMockups] = useState([]);

  useEffect(() => {
    const fetchMockups = async () => {
      console.log('fetchMockups function called');
      try {
        const response = await axios.get('http://localhost:3001/api/mockups');
        console.log('API response:', response); // Log the entire response, [] now
        console.log('API response data:', response.data); // Log the response data, which is [] now
        setMockups(response.data);
      } catch (error) {
        console.error('Error fetching mockups:', error);
      }
    };

    fetchMockups();
  }, []);

  useEffect(() => {
    console.log('Mockups:', mockups); // Log the updated mockups state
  }, [mockups]); // Log the updated state when mockups state changes
  const handleDragEnd = (event) => {
    const { active, over } = event;
  
    if (over && active.id !== over.id) {
      setMockups((mockups) => {
        const oldIndex = mockups.findIndex((mockup) => mockup.title === active.id);
        const newIndex = mockups.findIndex((mockup) => mockup.title === over.id);
  
        return arrayMove(mockups, oldIndex, newIndex);
      });
    }
  };
  return (
    <React.Fragment>
      <h2>Mockups</h2>
      <div className='mockupsContainer'>
   
      <DndContext onDragEnd={handleDragEnd} sensor={[MouseSensor, TouchSensor]} collisionDetection={closestCenter}>
       <SortableContext items={mockups.map(({ title }) => title)} strategy={horizontalListSortingStrategy}>
       {mockups.map((mockup) => (
        <Mockup key={mockup._id} id={mockup._id} color={mockup.color} category={mockup.category} title={mockup.title} image={mockup.image}/>
      ))}
     </SortableContext>
     </DndContext>
  
      </div> 
    </React.Fragment>
  );
};

export default Mockups;

