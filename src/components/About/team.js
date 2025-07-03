import React, { createContext, useState, useEffect } from 'react';
import { getTeamMembers } from '../../Api';

export const TeamContext = createContext();

export function TeamProvider({ children }) {
  // Initialize with expected structure
  const [teamData, setTeamData] = useState({
    management: [],
    shareholders: [],
    BOD: [],
  });

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const res = await getTeamMembers();
        // Ensure the API response has the correct structure
        setTeamData({
          management: res.data.management || [],
          shareholders: res.data.shareholders || [],
          BOD: res.data.BOD || [],
        });
      } catch (err) {
        console.error("Failed to fetch teams");
      }
    };
    fetchTeams();
  }, []);

  return (
    <TeamContext.Provider value={teamData}>
      {children}
    </TeamContext.Provider>
  );
}