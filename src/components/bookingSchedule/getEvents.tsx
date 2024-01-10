import React from 'react'

export default function getEvents() {
  const baseUrl = "http://localhost:3000";

  const fetchEvents = async () => {
    try {
        const response = await fetch(`${baseUrl}/api/eventbooking`); 
        if (response.ok) {
            const eventData = await response.json();
            console.log('Fetched events:', eventData);
            
        } else {
            console.error('Failed to fetch events');
        }
    } catch (error) {
        console.error('Error fetching events:', error);
    }
};
fetchEvents();
  return (
    <div></div>
  )
}
