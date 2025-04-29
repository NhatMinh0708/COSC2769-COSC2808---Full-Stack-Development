import React, { useState, useEffect } from "react";
import axios from "axios";

const AttendeeDashboard = () => {
  const [invitations, setInvitations] = useState([]);

  useEffect(() => {
    axios.get('/my-invitations') // API lấy list invitation
      .then(res => {
        setInvitations(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  const respondInvitation = (invitationId, response) => {
    axios.post(`/respond-invitation/${invitationId}`, { response })
      .then(() => {
        // Reload or update state
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">My Invitations</h1>

      {invitations.length === 0 ? (
        <div>No invitations found.</div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {invitations.map(inv => (
            <div key={inv._id} className="border p-4 rounded shadow">
              <h2 className="text-xl font-semibold">{inv.eventName}</h2>
              <p>From: {inv.organizerName}</p>
              <div className="mt-2">
                {inv.response ? (
                  <p className="text-green-600">Responded: {inv.response}</p>
                ) : (
                  <div className="flex gap-2">
                    <button className="primary-btn" onClick={() => respondInvitation(inv._id, 'yes')}>Accept</button>
                    <button className="secondary-btn" onClick={() => respondInvitation(inv._id, 'no')}>Decline</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AttendeeDashboard;
