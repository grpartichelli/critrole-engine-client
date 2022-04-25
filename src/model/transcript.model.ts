export class TranscriptModel {
  actor_nickname : string;
  timestamp: Date;
  text: string
  youtube_link: string
  episode_number: number

  constructor(actor_nickname: string, timestamp: Date, text: string, youtube_link: string, episode_number: number) {
    this.actor_nickname = actor_nickname;
    this.timestamp = timestamp;
    this.text = text;
    this.youtube_link = youtube_link;
    this.episode_number = episode_number;
  }
}
