import { useToast } from "@/components/ui/use-toast";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";

export const useGetCalls = () => {
  const [calls, setCalls] = useState<Call[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const client = useStreamVideoClient();
  const user = useUser();
  const { toast } = useToast();

  useEffect(() => {
    const loadCalls = async () => {
      if (!client || !user.user?.id) return;
      setIsLoading(true);
      try {
        const { calls } = await client.queryCalls({
          sort: [
            {
              field: "starts_at",
              direction: -1,
            },
          ],
          filter_conditions: {
            starts_at: { $exists: true },
            $or: [
              { created_by_user_id: user.user.id },
              { members: { $in: [user.user.id] } },
            ],
          },
        });
        setCalls(calls);
      } catch (error) {
        toast({ title: "Something went wrong!!" });
      } finally {
        setIsLoading(false);
      }
    };

    loadCalls();
  }, [client, user?.user?.id]);

  const now = new Date();

  const endedCalls = calls.filter(({ state: { startsAt, endedAt } }: Call) => {
    return (startsAt && new Date(startsAt) < now) || !!endedAt;
  });

  const upcomingCalls = calls.filter(
    ({ state: { startsAt, endedAt } }: Call) => {
      return startsAt && new Date(startsAt) > now;
    }
  );

  return {
    endedCalls,
    upcomingCalls,
    callRecordings: calls,
    isLoading,
  };
};
