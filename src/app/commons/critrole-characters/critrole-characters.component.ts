import {Component, Input} from '@angular/core';
import {CharacterModel} from "../../../model/character.model";

@Component({
  selector: 'app-critrole-characters',
  templateUrl: './critrole-characters.component.html',
  styleUrls: ['./critrole-characters.component.scss']
})
export class CritroleCharactersComponent {

  @Input() characters: Array<CharacterModel> = [];

  charactersImg = new Map<string, string>([
    ["Jester Lavorre", "https://pbs.twimg.com/media/FOjaoldWUAAfp1C?format=jpg&name=4096x4096"],
    ["Mollymauk Tealeaf", "https://i.pinimg.com/originals/39/98/aa/3998aa52d8f022ea79cb676ef42bd43e.jpg"],
    ["Caduceus Clay", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/811a2908-404c-4d71-b6d2-0b4e737898e1/dd7ujlf-d2ef5bf2-a0a8-4578-83e5-f0e01c3b375a.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgxMWEyOTA4LTQwNGMtNGQ3MS1iNmQyLTBiNGU3Mzc4OThlMVwvZGQ3dWpsZi1kMmVmNWJmMi1hMGE4LTQ1NzgtODNlNS1mMGUwMWMzYjM3NWEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.iRrdvFF_cJd4ZPzneIsUu-HLNPRaZ9teUclbAW6C5iw"],
    ["Kingsley Tealeaf", "https://pbs.twimg.com/media/E3FlzkuVgAIOZKf.jpg"],
    ["Yasha Nydoorin", "https://i.pinimg.com/736x/c6/cf/85/c6cf8532447b7caff3ab331d9e168a3c.jpg"],
    ["Caleb Widogast", "https://i.pinimg.com/originals/a9/d7/4e/a9d74ee38760eb1342e962026eaba266.jpg"],
    ["Beauregard Lionett", "https://cdna.artstation.com/p/assets/images/images/022/983/986/large/ian-singh-beauregard-lionett-logo.jpg?1577585460&dl=1"],
    ["Revvetha \"Veth\" Brenatto", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq2i_cmqjaWZUtLdW9-sUXQDyNGb48JgSL06X3Nn75luy4eh6dUYbt58-0Y5Df9-eDwzI&usqp=CAU"],
    ["Fjord", "https://pbs.twimg.com/media/DbN8orQX0AAOXGu.jpg"],

  ]);



  getAvatar(character: CharacterModel) {
    return this.charactersImg.get(character.name)
  }
}
