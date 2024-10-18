import { TagsList } from "@/components/tags-list";
import { getRoom } from "@/data-access/rooms";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import { DevFinderVideo } from "./video-player";
import { splitTags } from "@/lib/utils";
import { unstable_noStore } from "next/cache";
export default async function RoomPage(props: { params: { roomid: string } }) {
  unstable_noStore();
  const { roomid } = props.params;

  console.log("Room Id", roomid);
  const room = await getRoom(roomid);
  if (!room) {
    return <div>No room of this ID found</div>;
  }

  return (
    <div className="grid grid-cols-4 min-h-screen">
      <div className="col-span-3 p-4 pr-2">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 min-h-screen">
          <DevFinderVideo room={room} />
        </div>
      </div>

      <div className="col-span-1 p-4 pl-2">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 flex flex-col gap-4">
<<<<<<< HEAD
          <h1 className="text-base">{room?.name || "Untitled room"}</h1>
=======
          <h1 className="text-base">{room?.name || "untitled rooms"}</h1>
>>>>>>> origin/main

          {room.githubRepo && (
            <Link
              href={room.githubRepo}
              className="flex items-center gap-2 text-center text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
              Github Project
            </Link>
          )}

<<<<<<< HEAD
          <p className="text-base text-gray-600">{room?.description || "No Description"}</p>

          <TagsList tags={splitTags(room.tags || "")} />
=======
          <p className="text-base text-gray-600">
            {room?.description || "untitled descp"}
          </p>

          <TagsList tags={splitTags(room.tags || "untitle tags h bhai")} />
>>>>>>> origin/main
        </div>
      </div>
    </div>
  );
}
