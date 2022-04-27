import {Component, Input} from '@angular/core';
import {TranscriptModel} from "../../../model/transcript.model";

@Component({
  selector: 'app-critrole-transcripts',
  templateUrl: './critrole-transcripts.component.html',
  styleUrls: ['./critrole-transcripts.component.scss']
})
export class CritroleTranscriptsComponent {

  @Input() transcripts: Array<TranscriptModel> = [];
}
