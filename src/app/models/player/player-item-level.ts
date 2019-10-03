export class PlayerItemLevel {
  id: number;
  count: number;
  level: number;
  starLevel: number;
  name: string;
  maxLevel: number;
  iconUrls: {
    medium:string
  };

  PlayerItemLevel(
    id: number,
    count: number,
    level: number,
    starLevel: number,
    name: string,
    maxLevel: number,
    iconUrls: any
  ) {
    this.id = id;
    this.count = count;
    this.level = level;
    this.starLevel = starLevel;
    this.name = name;
    this.maxLevel = maxLevel;
    this.iconUrls = iconUrls;
  }

}
