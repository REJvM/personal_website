const dayjs = useDayjs();

export default function (date: string): String {
  return dayjs(date).utc().format("DD-MM-YYYY HH:mm").toString();
}
