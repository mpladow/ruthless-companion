export interface Character {
  characterId: string;
  name: string;
  toughness: number;
  weapons: Weapon[];
  health: HealthStat[];
  gender: "m" | "f" | "n";
  status?: Status;
}

export interface Weapon {
  name: string;
  description?: string;
  maxAmmo: number;
  currentAmmo: number;
}

export interface HealthStat {
  name: string;
  maxValue: number;
  currentValue: number;
}

export interface Status {
  name: string;
}
