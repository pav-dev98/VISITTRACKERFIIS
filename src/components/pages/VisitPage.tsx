import React from "react";
import { Button } from "@/components/ui/button";
import CustomCard from "../custom-card";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "../ui/card";
// import { Payment, columns } from "../visits-table/columns";
// import { DataTable } from "../visits-table/data-table";

// function getData(): Payment[] {
//   // Fetch data from your API here.
//   return [
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     },
//   ];
// }

const VisitPage: React.FC = () => {
  // const data = getData();
  return (
    <div className="p-4">
      {/* <h1 className="font-bold text-2xl">Applications</h1>
      <div className="container mx-auto py-4">
        <DataTable columns={columns} data={data} />
      </div> */}
      <h1 className="font-semibold text-xl mb-2">Pending visit requests</h1>
      <div className="">
        <Button>View All</Button>
      </div>
      <div className="flex my-4 gap-4">
        <CustomCard title="Colegio Padre Abad" />
        <CustomCard title="Colegio Padre Abad" />
        <CustomCard title="Colegio Padre Abad" />
      </div>
      <h1 className="font-semibold text-xl mb-2">Visit of the day</h1>
      <div className="flex my-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>
              <h2 className="text-center">Padre Abad 5C </h2>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-4xl text-center mb-4">
              10.00 AM
            </CardDescription>
            <CardDescription className="text-center mb-4">
              Laboratorio: De computo
            </CardDescription>
            <CardDescription className="text-center">00:00:30</CardDescription>
          </CardContent>
          <CardFooter>
            <div className="flex justify-center w-full gap-4">
              <Button>start</Button>
              <Button>view details</Button>
            </div>
          </CardFooter>
        </Card>
        <Card className="w-full">
          <CardHeader>State</CardHeader>
          <CardContent>
            <CardDescription className="flex gap-2 mb-4">
              <Checkbox checked disabled />
              <h3>Tutor is present</h3>
            </CardDescription>
            <CardDescription className="flex gap-2 items-center mb-4">
              <Checkbox checked disabled />
              <h3>30 of 40 registered for the visit</h3>
              <div className="flex">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="-ml-2">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="-ml-2">
                  <AvatarImage src="https://avatars.githubusercontent.com/u/24969384?v=4" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              more ..
            </CardDescription>
          </CardContent>
          <CardFooter className="flex flex-col justify-center">
            <Progress value={33} />
            <h3>
              33% of the students have completed the visit
            </h3>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default VisitPage;
