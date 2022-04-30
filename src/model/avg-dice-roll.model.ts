export class AvgDiceRollModel {
  average: number
  character_name: { character_name : string }


  constructor(average: number, character_name: { character_name: string }) {
    this.average = average;
    this.character_name = character_name;
  }
}
