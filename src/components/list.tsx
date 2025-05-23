"use client";
import Link from "next/link";

import { type ListItem, ListItemType } from "@/types/list";
import { Card } from "./ui/card";

export default function List({ items }: { items: Array<ListItem> }) {
  return (
    <section className=" text-primary flex min-w-full flex-col items-center justify-center">
      <ul className="selectable-list flex min-w-full flex-col gap-3 px-2">
        {items.map(
          ({
            key,
            type,
            name,
            url,
            value,
            icon,
            iconColor,
            selected,
            onClick,
          }: ListItem) => {
            return url ? (
              <Card className="bg-background p-4">
                <Link
                  key={key}
                  href={url}
                  className="flex flex-row items-center gap-3"
                  replace={type === ListItemType.Source}
                >
                  <span className="text-primary">{icon}</span>
                  <span className="text-primary">{name}</span>
                </Link>
              </Card>
            ) : (
              <a
                key={key}
                className={`flex ${
                  selected ? "cursor-default" : "cursor-pointer"
                } flex-row items-center gap-3`}
                onClick={onClick}
              >
                <Card className="bg-background flex flex-row items-center gap-4 p-4 transition-colors duration-300 ease-out hover:border-neutral-400 hover:bg-neutral-100">
                  <span className="text-red-500">{icon}</span>
                  <span className="text-primary">{name}</span>
                  <span className="text-primary">{value}</span>
                </Card>
              </a>
            );
          },
        )}
      </ul>
    </section>
  );
}
