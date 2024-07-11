type StatsType = {
  count: number;
  dis: string;
  id: number;
};

const StatusData: StatsType[] = [
  {
    id: 1,
    count: 9000,
    dis: "Premium Products",
  },
  {
    id: 2,
    count: 6000,
    dis: "Happy Customers",
  },
  {
    id: 3,
    count: 4000,
    dis: "Award Winning",
  },
];

const Stats = () => {
  return (
    <div className="flex items-center justify-between flex-wrap gap-6 ">
      {StatusData.map((stat) => (
        <div key={stat.id} className="flex flex-col">
          <span className="text-[2rem] font-[300]">
            {stat.count} <span className="text-orange-400">+</span>
          </span>
          <span className="font-[200] text-[14px]">{stat.dis}</span>
        </div>
      ))}
    </div>
  );
};

export default Stats;
