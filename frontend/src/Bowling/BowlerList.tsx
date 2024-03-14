import { useEffect, useState } from 'react';
import { Bowler } from '../types/Bowler';
import { Team } from '../types/Team';

function BowlerList() {
  const [BowlingData, setBowlingData] = useState<Bowler[]>([]);
  const [TeamData, setTeamData] = useState<Team[]>([]);

  useEffect(() => {
    const fetchBowlingData = async () => {
      const rsp = await fetch('https://localhost:7065/Bowling/Bowler');
      const b = await rsp.json();
      setBowlingData(b);
    };
    fetchBowlingData();
  }, []);

  useEffect(() => {
    const fetchTeamData = async () => {
      const Trsp = await fetch('https://localhost:7065/Bowling/Team');
      const t = await Trsp.json();
      setTeamData(t);
    };
    fetchTeamData();
  }, []);

  // Filter BowlingData by team names "Marlins" and "Sharks"
  const filteredBowlingData = BowlingData.filter((b) => {
    const teamName = TeamData.find(
      (team) => team.teamID === b.teamID,
    )?.teamName;
    return teamName === 'Marlins' || teamName === 'Sharks';
  });

  return (
    <>
      <div className="row">
        <h4 className="text-center">Bowling League Data</h4>
      </div>

      <table className="table table-boardered">
        <thead>
          <tr>
            <th>Bowler Name</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {filteredBowlingData.map((b) => (
            <tr key={b.bowlerID}>
              <td>
                {b.bowlerFirstName} {b.bowlerMiddleInit} {b.bowlerLastName}
              </td>
              <td>
                {TeamData.find((team) => team.teamID === b.teamID)?.teamName}
              </td>
              <td>{b.bowlerAddress}</td>
              <td>{b.bowlerCity}</td>
              <td>{b.bowlerState}</td>
              <td>{b.bowlerZip}</td>
              <td>{b.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlerList;
