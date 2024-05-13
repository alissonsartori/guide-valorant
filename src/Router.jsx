import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppHome from "./Components/Home/AppHome";
import AppAgents from "./Components/Agents/AppAgents";
import AppAgent from "./Components/Agent/AppAgent";
import AppWeapons from "./Components/Weapons/AppWeapons";
import AppSpray from "./Components/Sprays/AppSpray";
import AppBuddies from "./Components/Buddies/AppBuddies";
import AppMaps from "./Components/Maps/AppMaps";
import AppBundles from "./Components/Bundles/AppBundles";
import AppBundle from "./Components/Bundle/AppBundlesSkins"
import AppWeapon from "./Components/Weapon/AppWeapon";
import AppCards from "./Components/PlayerCard/AppPlayerCard"
import AppTiers from "./Components/Tiers/AppTiers"
import AppMap from "./Components/Map/AppMap"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppHome />} />
        <Route path="/agents" element={<AppAgents />} />
        <Route path="/agents/:id" element={<AppAgent />} />
        <Route path="/weapons" element={<AppWeapons />} />
        <Route path="/weapons/:id" element={<AppWeapon />} />
        <Route path="/sprays" element={<AppSpray />} />
        <Route path="/buddies" element={<AppBuddies />} />
        <Route path="/maps" element={<AppMaps />} />
        <Route path="/bundles" element={<AppBundles />} />
        <Route path="/bundles/:id" element={<AppBundle />} />
        <Route path="/cards" element={<AppCards />} />
        <Route path="/tiers" element={<AppTiers />} />
        <Route path="/maps/:id" element={<AppMap />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
