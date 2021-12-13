import mongoose from 'mongoose';


const uri = "mongodb+srv://abbeazale:swagog12@cluster0.diayv.mongodb.net/scarves?retryWrites=true&w=majority";

export async function getData(){
    const client = await mongoose.connect(uri);
    
}

export const ProductSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    Curses: {type: Number, required: true},
    witch: {type: String, required: true },
    length: {type: Number, required: true},
    width: {type: Number, required: true},
    weight: {type: Number, required: true},
    location: {type: String, required: true},

})

export interface Product {
    id: string;
    title: string;
    description: string;
    curses: number;
}

