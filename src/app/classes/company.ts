
export class Company {
    id: number = Math.random();
    company_name: string;
    status: string;
    info: string;
    performance: string;
    key_contacts: Contacts;
    website: string;
    address: Address;
    company_phone: string;
    revenue: object;
    ebitda: object;
}

export class Contacts{
    first_contact: string;
    second_contact: string;
}

export class Address {
    street: string;
    city: string;
    state: string;
    zip: Number;
}