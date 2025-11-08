import React, { useEffect, useState } from "react";
import CardWrapper from "../CardWrapper";

interface LeaderboardEntry {
  username: string | null;
  topic: string;
  score: number;
  time: number;
  correct: number;
  rank: number;
  user_id: number;
}

interface LeaderboardResponse {
  topFive: LeaderboardEntry[];
  user: LeaderboardEntry | null;
}

const DailyLeaderboard: React.FC = () => {
  const [data, setData] = useState<LeaderboardResponse>({
    topFive: [],
    user: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchLeaderboard = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/leaderboard/data");
      if (!res.ok) throw new Error("Failed to fetch leaderboard");
      const json = await res.json();

      // Ensure structure always exists
      setData({
        topFive: json?.topFive || [],
        user: json?.user || null,
      });
    } catch (err) {
      console.error(err);
      setError("Error loading leaderboard");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeaderboard();
    const interval = setInterval(fetchLeaderboard, 10000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <p className="text-center text-teal-400 mt-6">Loading leaderboard...</p>;
  if (error) return <p className="text-center text-red-400 mt-6">{error}</p>;

  const { topFive, user } = data;

  return (
      <CardWrapper title="Daily Challenge Leaderboard">
      <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto mt-10">
      <h2 className="text-2xl font-orbitron text-electric-blue mb-4 text-center">
        🏆 Live Leaderboard
      </h2>

      {topFive.length === 0 ? (
          <p className="text-center text-gray-400">No players yet.</p>
        ) : (
            <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-800 text-teal-300">
              <th className="p-3 text-left">Rank</th>
              <th className="p-3 text-left">Player</th>
              <th className="p-3 text-right">Score</th>
              <th className="p-3 text-right">Time (s)</th>
            </tr>
          </thead>
          <tbody>
            {topFive.map((entry) => (
                <tr
                key={entry.rank}
                className={`${
                    entry.rank === 1
                    ? "bg-yellow-800/30"
                    : entry.rank === 2
                    ? "bg-gray-800/30"
                    : "bg-gray-700/20"
                } border-b border-gray-700`}
                >
                <td className="p-3">{entry.rank}</td>
                <td className="p-3">{entry.username || "Guest"}</td>
                <td className="p-3 text-right">{entry.score}</td>
                <td className="p-3 text-right">{entry.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {user && user.rank > 5 && (
          <div className="mt-6 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400 mb-2">Your Position</p>
          <div className="bg-gray-800/50 rounded-md p-3">
            <strong>#{user.rank}</strong> {user.username || "You"} — {user.score} pts
          </div>
        </div>
      )}
    </div>

      </CardWrapper>
  );
};





export default DailyLeaderboard;
