export type TimelineType = "week" | "month" | "year";

export type TimeLineEvent = {
  id: number;
  title: string;
  start_time: number;
  end_time: number;
  group_type: string;
  type: string;
  description?: string;
};
