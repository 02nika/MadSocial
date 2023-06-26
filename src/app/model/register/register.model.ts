export class RegisterModel {
    constructor(
        public firstName: string,
        public lastName: string,
        public gender: RegisterDropdownModel,
        public email: string,
        public country: RegisterDropdownModel,
        public city: RegisterDropdownModel,
        public timeZone:RegisterTimeZoneDropdownModel,
        public language:RegisterDropdownModel
    ) { }
}
export class RegisterDropdownModel{
    constructor(
        public id: number,
        public name: string
    ) { }
}
export class RegisterTimeZoneDropdownModel {
    constructor(
        public id: number,
        public name: string
    ) { }
}