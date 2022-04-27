import {Component} from '@angular/core';
import {TranscriptService} from "../../service/transcript-service";
import {TranscriptModel} from "../../model/transcript.model";


@Component({
  selector: 'app-critrole-search-transcripts',
  templateUrl: './critrole-search-transcripts.component.html',
  styleUrls: ['./critrole-search-transcripts.component.scss'],
})
export class CritroleSearchTranscriptsComponent {
  transcripts: Array<TranscriptModel> | undefined = []
  // transcripts: Array<TranscriptModel> | undefined = [
  //   {
  //     "actor_nickname": "Matt",
  //     "timestamp": "02:40:29",
  //     "text": "As this is happening, Ulog is sighing loudly, pulls out some tools, and begins to fiddle with where the boards are on the ground. He manages to get a shortsword of his pressed underneath where the boards are and slips it across, slightly lifting each one as he goes until the sword peeks out the opposite side acting as a platform beneath.",
  //     "youtube_link": "https://youtube.com/watch?v=HoZGMqCIRK8&t=2h40m29s",
  //     "episode_number": 12
  //   },
  //   {
  //     "actor_nickname": "Matt",
  //     "timestamp": "03:27:51",
  //     "text": "That you see on the shelf as you close in to look at it. As you climb the shelf and look up, above the bookshelf there is, placed ornamentally on the wall, a very wide blade, longsword of some kind is bolted onto the wall as an ornamental display.",
  //     "youtube_link": "https://youtube.com/watch?v=0ZLwaSShk8M&t=3h27m51s",
  //     "episode_number": 15
  //   },
  //   {
  //     "actor_nickname": "Laura",
  //     "timestamp": "01:24:24",
  //     "text": "Do you think taking the sword off the wall was what made Siff be able to come back?",
  //     "youtube_link": "https://youtube.com/watch?v=lT-wFK4SgJc&t=1h24m24s",
  //     "episode_number": 16
  //   },
  //   {
  //     "actor_nickname": "Marisha",
  //     "timestamp": "01:34:56",
  //     "text": "Well, I think this information about the teleportation-y circle situation could be useful leverage if he wants to try and take that sword off of your back.",
  //     "youtube_link": "https://youtube.com/watch?v=lT-wFK4SgJc&t=1h34m56s",
  //     "episode_number": 16
  //   },
  //   {
  //     "actor_nickname": "Travis",
  //     "timestamp": "00:58:49",
  //     "text": "You did some crazy shit with that sword of yours.",
  //     "youtube_link": "https://youtube.com/watch?v=MPELLuQXVcE&t=0h58m49s",
  //     "episode_number": 2
  //   },
  //   {
  //     "actor_nickname": "Matt",
  //     "timestamp": "01:54:16",
  //     "text": "Sword of Sea Eye, give me sight beyond sight. Go ahead and make an intelligence check.",
  //     "youtube_link": "https://youtube.com/watch?v=xr1dOEL2EHQ&t=1h54m16s",
  //     "episode_number": 23
  //   },
  //   {
  //     "actor_nickname": "Matt",
  //     "timestamp": "02:40:23",
  //     "text": "\"I've only but scratched the surface, and I've never felt a connection like this with the \"sea that has been my life. It's incredible. I can only do it in bursts, but I can cause it to swell \"and move and part and flood and shift. It's-- (sighs). Soon.\" She reaches out and touches the top of your hand. \"Soon. I promise. Now, we were talking before and I think it's only fair.\" She takes another big sip. \"Your blade is very interesting. I knew one other who had a blade very \"similar. Referred to it as the Sword of Fathoms.\"",
  //     "youtube_link": "https://youtube.com/watch?v=etjou2cxZJw&t=2h40m23s",
  //     "episode_number": 40
  //   },
  //   {
  //     "actor_nickname": "Travis",
  //     "timestamp": "02:41:21",
  //     "text": "Sword of Fathoms?",
  //     "youtube_link": "https://youtube.com/watch?v=etjou2cxZJw&t=2h41m21s",
  //     "episode_number": 40
  //   },
  //   {
  //     "actor_nickname": "Travis",
  //     "timestamp": "02:42:33",
  //     "text": "This Vandren, you say he told you about the Sword of Fathoms or he had a Sword of Fathoms?",
  //     "youtube_link": "https://youtube.com/watch?v=etjou2cxZJw&t=2h42m33s",
  //     "episode_number": 40
  //   },
  //   {
  //     "actor_nickname": "Travis",
  //     "timestamp": "02:18:46",
  //     "text": "Yeah, actually I do have some news to share. Avantika apparently has come across my old mentor, Vandren, before. She knew him. Apparently he carried the same sword that I have, it's called the Sword of Fathoms. Has a name. She's of the opinion that he always carried on him the sword and another one of those spheres, an eye. She asked me if I knew where the ship that I was on went down. I did recall the area and she believes that if we were to search that shipwreck we might find this third sphere. She has the ability to mess with water now, and in some of the dreams I've been having, I believe there's quite a bit more where that has come from.",
  //     "youtube_link": "https://youtube.com/watch?v=NOh9T7YeR3o&t=2h18m46s",
  //     "episode_number": 41
  //   },
  //   {
  //     "actor_nickname": "Taliesin",
  //     "timestamp": "00:56:48",
  //     "text": "Sword of Ambivalence.",
  //     "youtube_link": "https://youtube.com/watch?v=3yfLht7w7Yk&t=0h56m48s",
  //     "episode_number": 64
  //   },
  //   {
  //     "actor_nickname": "Travis",
  //     "timestamp": "01:08:09",
  //     "text": "I'm just going to wait for a sword of infinite healing.",
  //     "youtube_link": "https://youtube.com/watch?v=vFMddwkLjJw&t=1h8m9s",
  //     "episode_number": 84
  //   },
  //   {
  //     "actor_nickname": "Matt",
  //     "timestamp": "02:14:36",
  //     "text": "Looks like there's one person scanning past in the process of reading and looking at things as they go. Looks to be a person in basic leather armors. Probably a sellsword of some kind.",
  //     "youtube_link": "https://youtube.com/watch?v=HtnTlm6UBpg&t=2h14m36s",
  //     "episode_number": 9
  //   },
  //   {
  //     "actor_nickname": "Matt",
  //     "timestamp": "03:08:22",
  //     "text": "And looking around, you can see the blade in this creature's hand is the Sword of Fathoms, or at least looks very much like it.",
  //     "youtube_link": "https://youtube.com/watch?v=4OH5Sa8x_Cw&t=3h8m22s",
  //     "episode_number": 98
  //   },
  //   {
  //     "actor_nickname": "Matt",
  //     "timestamp": "04:37:20",
  //     "text": "Watching the healing spell go out there and looking down at all of a sudden the rising center just gets angry and just as opposed to, like, staying in the back and watching from a distance, pulls out the Sword of Fathoms, leaps down, and walks right up to Fjord on the ground.",
  //     "youtube_link": "https://youtube.com/watch?v=4OH5Sa8x_Cw&t=4h37m20s",
  //     "episode_number": 98
  //   },
  //   {
  //     "actor_nickname": "Matt",
  //     "timestamp": "04:38:21",
  //     "text": "Its first attack with the Sword of Fathoms is going to be a 15 to hit.",
  //     "youtube_link": "https://youtube.com/watch?v=4OH5Sa8x_Cw&t=4h38m21s",
  //     "episode_number": 98
  //   },
  //   {
  //     "actor_nickname": "Matt",
  //     "timestamp": "04:43:39",
  //     "text": "It leaps down onto the ground, puts its hands on the blade, the Sword of Fathoms, as well and pushes down.",
  //     "youtube_link": "https://youtube.com/watch?v=4OH5Sa8x_Cw&t=4h43m39s",
  //     "episode_number": 98
  //   },
  //   {
  //     "actor_nickname": "Matt",
  //     "timestamp": "00:23:50",
  //     "text": "It has lost any sort of visual representation of the Sword of Fathoms that it used to have.",
  //     "youtube_link": "https://youtube.com/watch?v=KmLNSQwQQXQ&t=0h23m50s",
  //     "episode_number": 99
  //   }
  // ]
  loading = false;
  constructor(private transcriptService: TranscriptService) {
  }

  searchTranscripts(text : string) {
    this.loading = true;
    this.transcriptService.findByText(text)
      .then(transcripts => {
        this.transcripts = transcripts;
        this.transcripts?.forEach(transcript => {
          transcript.actor_nickname = `${transcript.actor_nickname.slice(0, 1)}${transcript.actor_nickname.slice(1).toLowerCase()}`
          transcript.timestamp = transcript.timestamp.split(" ")[1]
        });
        this.loading = false})
      .catch(e =>  this.loading = false)

  }
}
