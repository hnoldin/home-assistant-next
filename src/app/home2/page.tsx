"use client";
import { useHomeAssistant } from "@/providers/homeAssistant";
import { mdiLightbulbOutline } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import LightCard2 from "@/components/lightCard/lightCard copy";
import { LightbulbIcon } from "lucide-react";
import TitleCard from "@/components/TitleCard/Component";

const Home2 = () => {
  const homeAssistant = useHomeAssistant();
  const entities = homeAssistant.entities;
  return (
    <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <TitleCard title="Living Room" />
      <LightCard2
        entity_id="light.living_room_lights_light"
        name="Living Room Lights"
        icon={<LightbulbIcon size={24} />}
        showState={true}
        showSlider={true}
      />
      <LightCard2
        entity_id="light.living_room_lights_light"
        name="Living Room Lights"
        icon={<LightbulbIcon size={24} />}
        showState={true}
        showSlider={false}
      />
    </div>
  );
};

export default Home2;
