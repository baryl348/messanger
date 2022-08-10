import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})

export class ListUserChatService {
    public listUsers = [
        {
            name: 'Artem',
            lastMessage: 'i love ruby on rails',
            date: this.generateDate(),
        },
        {
            name: 'Sergey',
            lastMessage: 'i hate programming',
            date: this.generateDate(),
        },
        {
            name: 'Maksim',
            lastMessage: 'java is the best language to programming',
            date: this.generateDate(),
        }
    ]

    private generateDate (): string {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();
        return mm + '/' + dd + '/' + yyyy
    }
}