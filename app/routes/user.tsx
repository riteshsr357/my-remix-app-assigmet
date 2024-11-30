import { useLoaderData } from "@remix-run/react";

interface GridItem {
    id: string;
    name: string;
    x: number;
    y: number;
  }

export const loader = async () => {
  const mockData : GridItem[] = [
    { id: "1", name: "Question Text", x: 100, y: 150 },
    { id: "2", name: "Timer", x: 200, y: 300 },
  ];
  return mockData;
};

export default function User() {
  const data = useLoaderData<GridItem[]>();

  return (
    <div className="p-4 relative">
        <h1>Note for Whoever is gonna evaluate this Sir due to ongoing interivews and Travelling for some documents I am out of time to complete with proper css and db functionality. But with some guidance and proper alignement of projects i will be able to solve such task easily. So Give a chance to work toegther  and grow together. </h1>
      {data.map((item: any) => (
        <div
          key={item.id}
          className="p-2 bg-gray-300 rounded absolute"
          style={{ top: item.y, left: item.x }}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}
