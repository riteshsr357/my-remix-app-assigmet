// routes/admin.tsx
import React from "react";
import { Grid } from "~/components/Grid";
import { Sidebar } from "~/components/Sidebar";

export default function Admin() {
  return (
    <div className="flex">
      <Sidebar />
      <Grid />
    </div>
  );
}
