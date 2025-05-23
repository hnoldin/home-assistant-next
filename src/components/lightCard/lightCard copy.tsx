"use client";
import React from "react";
import { Card } from "../ui/card";
import { useHomeAssistant } from "@/providers/homeAssistant";
import { Slider } from "../ui/slider";

type LightCard2Props = {
  entity_id: string;
  name?: string;
  icon: React.ReactNode;
  showState: boolean;
  showSlider: boolean;
};

const lightCard2 = ({
  entity_id,
  name,
  icon,
  showState,
  showSlider,
}: LightCard2Props) => {
  const homeAssistant = useHomeAssistant();
  const entity = homeAssistant.entities?.[entity_id];
  const entities = homeAssistant.entities;

  // Use the actual entity state instead of local state
  const currentState = entity?.state;
  const isOn = currentState === "on";

  return (
    <Card
      onClick={() => {
        homeAssistant.client?.callService("light", "toggle", {
          entity_id: entity_id,
        });
      }}
      className={`flex w-full cursor-pointer flex-col items-start justify-between p-4 transition-colors ${
        isOn
          ? "bg-amber-100 dark:bg-yellow-900"
          : "bg-gray-100 dark:bg-gray-800"
      }`}
    >
      <div className="flex flex-row items-center gap-2">
        {icon}
        <div className="flex flex-col items-start justify-between">
          <h2>{name ?? entities?.[entity_id]?.attributes?.friendly_name}</h2>
          {showState && (
            <p className="text-muted-foreground text-sm">
              {entities?.[entity_id]?.state === "on" ? "On" : "Off"}
            </p>
          )}
        </div>
      </div>
      {showSlider && (
        <Slider
          className="mt-2 w-full"
          min={0}
          max={100}
          step={1}
          value={[entities?.[entity_id]?.attributes?.brightness]}
          onValueChange={(value) => {
            // Debounce the service call to reduce lag
            const debounceTimer = setTimeout(() => {
              homeAssistant.client?.callService("light", "turn_on", {
                entity_id: entity_id,
                brightness: value[0],
              });
            }, 100); // Wait 100ms before making the service call

            return () => clearTimeout(debounceTimer);
          }}
        />
      )}
    </Card>
  );
};

export default lightCard2;
