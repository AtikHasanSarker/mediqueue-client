'use client';
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";

const ProfilePage = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;
  return (
    <div className="pt-40 pb-20 max-w-6xl mx-auto px-6">
      <Card className="max-w-96 mx-auto flex flex-col items-center border border-gray-300 mt-5">
        <Avatar className="h-20 w-20">
          <Avatar.Image
            alt="John Doe"
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
        </Avatar>

        <h2 className="text-xl font-bold">{user?.name}</h2>
        <p className="text-muted">{user?.email}</p>

      </Card>
    </div>
  );
};

export default ProfilePage;
