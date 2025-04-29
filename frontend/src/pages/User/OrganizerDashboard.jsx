import { useEffect, useState } from 'react';
import axios from 'axios';

export default function OrganizerDashboard() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('/my-events') // API trả các event do user tạo
      .then(res => setEvents(res.data))
      .catch(err => console.error('Failed to fetch events:', err));
  }, []);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">My Created Events</h1>
      <button className="primary-btn mb-4">+ Create New Event</button>

      {events.length === 0 ? (
        <p className="text-gray-600">You haven't created any events yet.</p>
      ) : (
        <div className="grid gap-4">
          {events.map(event => (
            <div key={event._id} className="border rounded p-4 shadow">
              <h2 className="text-xl font-semibold">{event.title}</h2>
              <p>{event.description}</p>
              <p className="text-sm text-gray-600">📅 {event.date} – 📍 {event.location}</p>
              <p className="text-sm mt-1">RSVP: ✅ {event.rsvpYes} | ❌ {event.rsvpNo} | ⏳ {event.rsvpPending}</p>
              <div className="flex gap-2 mt-3">
                <button className="secondary-btn">Edit</button>
                <button className="secondary-btn">Delete</button>
                <button className="secondary-btn">View RSVPs</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
