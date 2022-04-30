export class CharacterModel {
  name: string
  actor_name: string
  actor_nickname: string
  age: number
  pronouns: Array<string>
  creature_type: string
  race: string
  dnd_class: string
  avg_dice_roll: number


  constructor(name: string, actor_name: string, actor_nickname: string, age: number, pronouns: Array<string>, creature_type: string, race: string, dnd_class: string, avg_dice_roll: number) {
    this.name = name;
    this.actor_name = actor_name;
    this.actor_nickname = actor_nickname;
    this.age = age;
    this.pronouns = pronouns;
    this.creature_type = creature_type;
    this.race = race;
    this.dnd_class = dnd_class;
    this.avg_dice_roll = avg_dice_roll;
  }
}
