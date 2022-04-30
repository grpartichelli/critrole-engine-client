import {Component, OnInit} from '@angular/core';
import {CharacterModel} from "../../model/character.model";
import {DiceRollsService} from "../../service/dice-rolls-service";

@Component({
  selector: 'app-critrole-avg-dicerolls',
  templateUrl: './critrole-avg-dicerolls.component.html',
  styleUrls: ['./critrole-avg-dicerolls.component.scss']
})
export class CritroleAvgDicerollsComponent implements OnInit {
  loading = false;
  noResults = false;
  order = "Lowest Average"
  orderList = ["Lowest Average", "Highest Average"]
  characters: Array<CharacterModel> = []

  characterList = ["Jester Lavorre", "Mollymauk Tealeaf", "Caduceus Clay", "Kingsley Tealeaf", "Yasha Nydoorin", "Caleb Widogast", "Beauregard Lionett", "Revvetha \"Veth\" Brenatto", "Fjord"]


  constructor(private diceRollsService: DiceRollsService) {
  }

  ngOnInit(): void {
    this.noResults = false;
    this.loading = true;
    this.diceRollsService.findAvgDiceRolls()
      .then(avgdicerolls => {
        avgdicerolls?.forEach(d => {
          let character = new CharacterModel(d.character_name['character_name'], "", "", 1, [""], "", "", "", d.average)
          if (this.characterList.includes(character.name)) {
            this.characters.push(character)
          }
        })
        if (this.characters?.length == 0) {
          this.noResults = true;
        }

        this.loading = false
      })
      .catch(e => this.loading = false)
  }

  sortList() {
    if (this.order === "Highest Average") {
      this.characters.sort((a, b) => b.avg_dice_roll - a.avg_dice_roll)
      return;
    }
    this.characters.sort((a, b) => a.avg_dice_roll - b.avg_dice_roll)
  }

}
