import { Button } from "@/components/ui/button";

interface GameRoom {
  id: string;
  name: string;
  players: number;
  wordLength: number;
  maxPlayers: number;
}

// Sample data (would connect to backend in real app)
const sampleRooms: GameRoom[] = [
  { id: '1', name: 'Word Masters', players: 2, wordLength: 5, maxPlayers: 4 },
  { id: '2', name: 'Lingo Champions', players: 3, wordLength: 6, maxPlayers: 5 },
  { id: '3', name: 'Word Wizards', players: 1, wordLength: 4, maxPlayers: 3 },
];

export default function AvailableRoomsCard() {
    return (
<div className="bg-card rounded-xl p-6">
            <h2 className="font-semibold text-xl mb-4">Available Rooms</h2>
            
            {sampleRooms.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">
                No rooms available. Create your own game!
              </p>
            ) : (
              <div className="space-y-3">
                {sampleRooms.map((room) => (
                  <div 
                    key={room.id}
                    className="flex items-center justify-between bg-muted p-4 rounded-md"
                  >
                    <div>
                      <h3 className="font-medium">{room.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {room.wordLength} letters • {room.players}/{room.maxPlayers} players
                      </p>
                    </div>
                    <Button
                      disabled={room.players >= room.maxPlayers}
                    >
                      Join
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>        
    )
}