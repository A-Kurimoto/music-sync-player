import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface NTP {
    id: string;
    it: number;
    st: number;
    leap: number;
    next: number;
    step: number;
}

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

    musicFile: string;
    audio;
    playTime: Date;

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
    }

    selectAudio(event: any) {
        this.musicFile = null;
        if (this.audio) {
            this.audio.pause();
        }
        this.audio = null;
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            this.musicFile = reader.result as string;
        };
        reader.readAsDataURL(file);
    }

    async setTime() {
        if (this.audio) {
            this.audio.pause();
        }
        const res = await this.http.get('https://ntp-a1.nict.go.jp/cgi-bin/json').toPromise() as NTP;
        const now = res.st * 1000;

        const targetTime = new Date();
        targetTime.setHours(this.playTime.getHours());
        targetTime.setMinutes(this.playTime.getMinutes());
        targetTime.setSeconds(0);
        targetTime.setMilliseconds(0);

        setTimeout(() => {
            this.audio = new Audio(this.musicFile);
            this.audio.loop = true;
            this.audio.play();
        }, targetTime.getTime() - now)
    }

    play() {
        this.audio.play();
    }

    pause() {
        this.audio.pause();
    }
}
