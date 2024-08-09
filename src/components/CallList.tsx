"use client";

import { Call, CallRecording } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { useGetCalls } from "@/hooks/useGetCalls";
import { ICallListProps, RoutePaths } from "@/models";
import Loader from "./Loader";
import MeetingCard from "./MeetingCard";
import { useToast } from "./ui/use-toast";

const CallList = ({ type }: ICallListProps) => {
  const { endedCalls, upcomingCalls, callRecordings, isLoading } =
    useGetCalls();
  const [recordings, setRecordings] = useState<CallRecording[]>([]);
  const router = useRouter();
  const { toast } = useToast();

  const getCalls = () => {
    switch (type) {
      case "ended":
        return endedCalls;
      case "recordings":
        return recordings;
      case "upcoming":
        return upcomingCalls;
      default:
        return [];
    }
  };

  const getIcon = () => {
    switch (type) {
      case "ended":
        return "/icons/previous.svg";
      case "recordings":
        return "/icons/recordings.svg";
      case "upcoming":
        return "/icons/upcoming.svg";
      default:
        return "";
    }
  };

  const getNoCallsMessage = () => {
    switch (type) {
      case "ended":
        return "No Previous Calls";
      case "recordings":
        return "No Recordings";
      case "upcoming":
        return "No Upcoming Calls";
      default:
        return "";
    }
  };

  useEffect(() => {
    const setCallRecordings = async () => {
      try {
        const callData = await Promise.all(
          callRecordings.map((meeting) => meeting.queryRecordings())
        );

        const recordings = callData
          .filter((call) => call.recordings.length)
          .flatMap((call) => call.recordings);

        setRecordings(recordings);
      } catch (error) {
        toast({ title: "try again later" });
      }
    };

    if (type === "recordings") setCallRecordings();
  }, [type, callRecordings]);

  const calls = getCalls();
  const noCallsMessage = getNoCallsMessage();

  if (isLoading) return <Loader />;

  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
      {calls && calls.length > 0 ? (
        calls.map((meeting: Call | CallRecording, index: number) => (
          <MeetingCard
            key={index}
            icon={getIcon()}
            date={
              (meeting as Call).state?.startsAt?.toLocaleString() ||
              (meeting as CallRecording).start_time?.toLocaleString()
            }
            handleClick={() =>
              router.push(
                type === "recordings"
                  ? (meeting as CallRecording).url
                  : `${RoutePaths.MEETING}/${(meeting as Call).id}`
              )
            }
            link={
              type === "recordings"
                ? (meeting as CallRecording).url
                : `${process.env.NEXT_PUBLIC_BASE_URL}${RoutePaths.MEETING}/${
                    (meeting as Call).id
                  }`
            }
            title={
              (meeting as Call).state?.custom?.description?.substring(0, 26) ||
              (meeting as CallRecording)?.filename?.substring(0, 20) ||
              "No Description"
            }
            isPreviousMeeting={type === "ended"}
            buttonIcon1={type === "recordings" ? "/icons/play.svg" : undefined}
            buttonText={type === "recordings" ? "Play" : "Start"}
          />
        ))
      ) : (
        <h1>{noCallsMessage}</h1>
      )}
    </div>
  );
};

export default CallList;
