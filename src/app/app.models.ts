// String Union Type - string type, but only with these values
type Fruit = 'Apple' | 'Orange' | 'Pineapple';

// Interface - defines how an object should look
interface Animal {
    type: string; // Required property
    color: string;
    name: string;
    age: number;
    favoriteFood?: string; // Optional property
}
