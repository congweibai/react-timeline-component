import moment from "moment";
import { TimeLineEvent } from "../type";

// Sample data with 'start_time' and 'end_time' (Unix timestamps)
export const events: TimeLineEvent[] = [
  {
    id: 1,
    title: "Event 1",
    start_time: moment().subtract(2, "hours").unix(),
    end_time: moment().subtract(1, "hours").unix(),
    group_type: "Actions",
    type: "fa-eye",
  },
  {
    id: 9,
    title: "Event 1 over fap",
    start_time: moment().subtract(2, "hours").unix(),
    end_time: moment().subtract(1.5, "hours").unix(),
    group_type: "Actions",
    type: "fa-heart",
  },
  {
    id: 2,
    title: "Event 2",
    start_time: moment().subtract(2, "day").subtract(2, "hours").unix(),
    end_time: moment().subtract(1, "day").unix(),
    group_type: "Actions",
    type: "fa-heart",
  },
  {
    id: 3,
    title: "Event 3",
    start_time: moment().subtract(2, "day").subtract(3, "hours").unix(),
    end_time: moment().subtract(1, "day").subtract(2, "hours").unix(),
    group_type: "Cadio tests/imaging",
    type: "fa-eye",
    description:
      "Iron studies, consisting of quantitation of: (a) serum iron; and (b)transferrin or iron binding capacity; and (c) ferritin",
  },
  {
    id: 4,
    title: "Event 4",
    start_time: moment().subtract(1, "day").subtract(3, "hours").unix(),
    end_time: moment().subtract(1, "day").subtract(2, "hours").unix(),
    group_type: "Cadio tests/imaging",
    type: "fa-eye",
    description:
      "Iron studies, consisting of quantitation of: (a) serum iron; and (b)transferrin or iron binding capacity; and (c) ferritin",
  },
  {
    id: 5,
    title: "Event 5",
    start_time: moment().subtract(2, "day").subtract(8, "hours").unix(),
    end_time: moment().subtract(2, "day").subtract(6, "hours").unix(),
    group_type: "Cadio tests/imaging",
    type: "fa-heart",
    description:
      "Iron studies, consisting of quantitation of: (a) serum iron; and (b)transferrin or iron binding capacity; and (c) ferritin",
  },
  {
    id: 6,
    title: "Event 6",
    start_time: moment().subtract(2, "day").subtract(7, "hours").unix(),
    end_time: moment().subtract(2, "day").subtract(5.5, "hours").unix(),
    group_type: "Cadio tests/imaging",
    type: "fa-heart",
    description:
      "Iron studies, consisting of quantitation of: (a) serum iron; and (b)transferrin or iron binding capacity; and (c) ferritin",
  },
  {
    id: 7,
    title: "Event 7",
    start_time: moment().subtract(1, "day").subtract(7, "hours").unix(),
    end_time: moment().subtract(1, "day").subtract(5.5, "hours").unix(),
    group_type: "Profile check",
    type: "fa-heart",
  },
];
