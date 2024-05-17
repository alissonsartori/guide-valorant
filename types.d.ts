export type DataAgents = {
  uuid: string;
  displayName: string;
  bustPortrait: string;
};

export type DataAgent = {
  background: string;
  fullPortrait: string;
  displayName: string;
  description: string;
  role: {
    displayName: string;
    displayIcon: string;
  };
  abilities: {
    displayName: string;
    displayIcon: string;
    description: string;
  }[];
};

export type DataBuddies = {
  displayName: string;
  displayIcon: string;
};

export type DataBundles = {
  uuid: string;
  displayName: string;
  displayIcon: string;
};

export type DataSkins = {
  displayName: string;
  displayIcon: string;
};

export type DataMaps = {
  uuid: string;
  displayName: string;
  listViewIconTall: string;
};

export type DataMap = {
  displayName: string;
  stylizedBackgroundImage: string;
  displayIcon: string;
  coordinates: string;
};

export type DataPlayerCard = {
  displayName: string;
  largeArt: string;
};

export type DataSpray = {
  displayName: string;
  fullTransparentIcon: string;
};

export type DataWeapon = {
  displayName: string;
  displayIcon: string;
  shopData: {
    cost: string;
    category: string;
  };
  weaponStats: {
    shotgunPelletCount: string;
    firstBulletAccuracy: string;
    reloadTimeSeconds: string;
    equipTimeSeconds: string;
    runSpeedMultiplier: string;
    magazineSize: string;
    fireRate: string;
  };
  skins: Skin[];
};

interface Skin {
  displayName: string;
  displayIcon?: string;
}

export type DataWeapons = {
  uuid: string;
  displayName: string;
  displayIcon: string;
};
