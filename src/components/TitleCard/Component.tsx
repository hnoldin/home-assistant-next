import React from "react";

export default function TitleCard({ title }: { title: string }) {
  return <div className="col-span-2 text-2xl font-bold">{title}</div>;
}
