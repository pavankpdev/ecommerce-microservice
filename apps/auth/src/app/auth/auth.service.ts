import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
    async register () {
        return new Promise((r) => r("Done"))
    }

    async login () {
        return new Promise((r) => r("Done"))
    }
}